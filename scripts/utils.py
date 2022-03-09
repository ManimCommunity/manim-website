import cgi
import json
import os
import shutil
import subprocess
from pathlib import Path

import readme_renderer.markdown
import readme_renderer.rst
import readme_renderer.txt
import requests
from tqdm import tqdm

from constants import EXAMPLE_FOLDER, PARSE_PARAMETERS, PLUGIN_REGEX


def render_readme(
    value,
    content_type=None,
    use_fallback=True,
):
    _RENDERERS = {
        None: readme_renderer.rst,  # Default if description_content_type is None
        "": readme_renderer.rst,  # Default if description_content_type is None
        "text/plain": readme_renderer.txt,
        "text/x-rst": readme_renderer.rst,
        "text/markdown": readme_renderer.markdown,
    }
    if value is None:
        return value

    content_type, parameters = cgi.parse_header(content_type or "")
    renderer = _RENDERERS.get(content_type, readme_renderer.txt)
    rendered = renderer.render(value, **parameters)
    if use_fallback and rendered is None:
        rendered = readme_renderer.txt.render(value)

    return rendered


def get_manim_plugins(pypi_packages: list[str], default_plugins: str) -> list[str]:
    plugins = []
    with open(Path(__file__).parent / default_plugins) as f:
        default = json.load(f)

    for package in pypi_packages:
        if "manim" in package:
            manim_plugin = PLUGIN_REGEX.search(package)
            if manim_plugin:
                if (
                    "manim-" + manim_plugin.group("name")
                    not in default["exclude"] + default["archive"]
                ):
                    plugins.append("manim-" + manim_plugin.group("name"))

    plugins.extend(default["extras"])
    return plugins


def convert_mp4_to_webm(input: Path, output: Path):
    ffmpeg = shutil.which("ffmpeg")
    if not ffmpeg:
        raise Exception("Ffmpeg is required to run this script.")
    subprocess.run(
        [
            ffmpeg,
            "-y",
            "-loglevel",
            "quiet",
            "-i",
            os.fspath(input),
            "-stats",
            "-c:v",
            "libvpx-vp9",
            "-crf",
            "27",
            os.fspath(output),
        ],
        check=True,
    )


def write_plugins_to_json(manim_plugins: list, content_folder: Path):
    for manim_plugin in tqdm(
        manim_plugins, total=len(manim_plugins), desc="Writing plugin files"
    ):
        file = Path(content_folder, f"{manim_plugin}.json")
        if file.exists():
            continue
        plugin_content = requests.get(
            f"https://pypi.org/pypi/{manim_plugin}/json"
        ).json()

        description = render_readme(
            plugin_content["info"]["description"],
            content_type=plugin_content["info"]["description_content_type"],
        )
        plugin_content["info"]["description"] = description  # convert md to html

        with open(file, "w", encoding="utf-8") as f:
            print(f"Created {file}")
            json.dump(plugin_content, f)


def parse_examples_folder() -> list[dict[str, str]]:
    examples = []
    for example in tqdm(EXAMPLE_FOLDER.glob("*.py"), desc="Parsing Examples Folder"):
        temp = {}
        with example.open(encoding="utf-8") as f:
            code = f.readlines()

        parameters = code[:4]
        for parameter in parameters:
            details = PARSE_PARAMETERS.search(parameter)
            if details:
                var = details.group("var").strip()
                val = details.group("value").strip()
                temp[var] = val

        if len(temp.keys()) == 4:
            code_final = ""
            for _code in code:
                if _code.startswith("#"):
                    continue
                code_final += _code
            temp["code"] = code_final.strip()
            examples.append(temp)
        else:
            # TODO A better error message
            print(
                f"Invalid file {example} or insufficient information in headers provided. Skipping"
            )

    return examples
