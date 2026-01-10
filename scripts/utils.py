from __future__ import annotations

import tempfile
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

from constants import (
    CONTENT_FOLDER,
    EXAMPLE_FOLDER,
    OUTPUT_DIR,
    PARSE_PARAMETERS,
    PLUGIN_REGEX,
    EXAMPLE_JSON,
)


def parse_header(header: str) -> tuple[str, dict]:
    """Parse a header like 'text/markdown; charset=utf-8' into ('text/markdown', {'charset': 'utf-8'}).
    
    Replacement for the deprecated cgi.parse_header function.
    """
    if not header:
        return "", {}
    parts = header.split(';')
    value = parts[0].strip()
    params = {}
    for part in parts[1:]:
        part = part.strip()
        if '=' in part:
            key, val = part.split('=', 1)
            params[key.strip()] = val.strip().strip('"')
    return value, params


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

    content_type, parameters = parse_header(content_type or "")
    renderer = _RENDERERS.get(content_type, readme_renderer.txt)
    rendered = renderer.render(value, **parameters)
    if use_fallback and rendered is None:
        rendered = readme_renderer.txt.render(value)

    return rendered


def render_manim_example(op_type, code, name, manim_path):
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)
        with (tmpdir / "test.py").open("w", encoding="utf-8") as f:
            f.write("from manim import *\n")
            f.write(code)

        subprocess.run(
            [str(manim_path), "test.py", "-qm", "-o", f"{name}"], cwd=tmpdir, check=True
        )

        if op_type == "image":
            file = tmpdir / "media" / "images" / "test" / f"{name}.png"
            shutil.move(os.fspath(file), os.fspath(OUTPUT_DIR / f"{name}.png"))

        elif op_type == "video":
            file = tmpdir / "media" / "videos" / "test" / "720p30" / f"{name}.mp4"
            shutil.move(os.fspath(file), os.fspath(OUTPUT_DIR / f"{name}.mp4"))
        else:
            print(f"Invalid output type specified: {op_type}")


def get_manim_plugins(default_plugins: str) -> list[str]:
    pypi_packages = requests.get("https://pypi.org/simple").text.split("\n")
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


def write_plugins_to_json(manim_plugins: list):
    for manim_plugin in tqdm(
        manim_plugins, total=len(manim_plugins), desc="Writing plugin files"
    ):
        file = Path(CONTENT_FOLDER, f"{manim_plugin}.json")
        if file.exists():
            continue
        plugin_content_req = requests.get(
            f"https://pypi.org/pypi/{manim_plugin}/json"
        )
        if plugin_content_req.status_code != 200:
            continue
        plugin_content = plugin_content_req.json()
        description = render_readme(
            plugin_content["info"]["description"],
            content_type=plugin_content["info"]["description_content_type"],
        )
        plugin_content["info"]["description"] = description  # convert md to html

        with open(file, "w", encoding="utf-8") as f:
            json.dump(plugin_content, f)


def write_example_json(examples):
    with open(EXAMPLE_JSON, "w", encoding="utf-8") as f:
        print(f"Created {EXAMPLE_JSON}")
        json.dump(examples, f, indent=4)


def parse_examples_folder() -> list[dict[str, str | bool]]:
    examples = []
    for example in EXAMPLE_FOLDER.glob("*.py"):
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


def guarantee_existence_of_folders():
    OUTPUT_DIR.mkdir(exist_ok=True, parents=True)
    CONTENT_FOLDER.mkdir(exist_ok=True, parents=True)


def guarantee_one_visible(example_dict):
    # If None of the examples are marked as visible
    # make sure to add the first one as visible so
    # that atleast one example is visible.
    for example in example_dict:
        example["visible"] = example["visible"] == "True"
        if example["visible"]:
            break
    else:
        example_dict[0]["visible"] = True

    return example_dict
