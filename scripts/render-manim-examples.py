import json
import os
import requests
import shutil
import subprocess
import tempfile
from pathlib import Path

from constants import CONTENT_FOLDER, EXAMPLE_JSON, GITHUB_TOKEN, OUTPUT_DIR
from utils import (convert_mp4_to_webm, get_manim_plugins,
                   parse_examples_folder, write_plugins_to_json)

CONTENT_FOLDER.mkdir(exist_ok=True, parents=True)
MANIM_PLUGINS = []

all_packages = requests.get("https://pypi.org/simple").text.split("\n")
MANIM_PLUGINS = get_manim_plugins(
    pypi_packages=all_packages, default_plugins="default.json"
)
write_plugins_to_json(MANIM_PLUGINS, CONTENT_FOLDER)

OUTPUT_DIR.mkdir(exist_ok=True, parents=True)

examples = parse_examples_folder()

# If None of the examples are marked as visible
# make sure to add the first one as visible so
# that atleast one example is visible.

for example in examples:
    if example["visible"] == "True":
        break
else:
    examples[0]["visible"] = "True"

with open(EXAMPLE_JSON, "w", encoding="utf-8") as f:
    print(f"Created {EXAMPLE_JSON}")
    json.dump(examples, f, indent=4)



manim = shutil.which("manim")
if not manim:
    raise Exception("Manim is required to run this script.")

for example in examples:
    code = example["code"]
    op_type = example["type"]

    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = Path(tmpdir)

        with (tmpdir / "test.py").open("w", encoding="utf-8") as f:
            f.write("from manim import *\n")
            f.write(code)

        subprocess.run([manim, "test.py", "-qm", "-o", "example_render"], cwd=tmpdir, check=True)

        if op_type == "image":
            file = (tmpdir / "media" / op_type / "test" / "example_render.png")
            shutil.move(os.fspath(file), os.fspath(OUTPUT_DIR / example["output"]))

        elif op_type == "video":
            file = (tmpdir / "media" / op_type / "test" / "720p30" / "example_render.mp4")
            print("Converting mp4 to webm")
            convert_mp4_to_webm(file, OUTPUT_DIR / (example["output"] + ".webm"))
            shutil.move(
                os.fspath(file), os.fspath(OUTPUT_DIR / (example["output"] + ".mp4"))
            )
        else:
            print(f"Invalid output type specified: {op_type}")
