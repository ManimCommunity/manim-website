import json
import os
import shutil
import subprocess
import tempfile
from constants import PARSE_PARAMETERS, EXAMPLE_FOLDER, EXAMPLE_JSON, OUTPUT_DIR
from utils import parse_examples_to_obtain_parameters

from pathlib import Path

OUTPUT_DIR.mkdir(exist_ok=True, parents=True)

examples = parse_examples_to_obtain_parameters(EXAMPLE_FOLDER, PARSE_PARAMETERS)

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

        subprocess.run([manim, "test.py", "-qm"], cwd=tmpdir, check=True)

        if op_type == "image":
            file = list(Path(tmpdir / "media" / "images" / "test").glob("*.png"))[0]
            shutil.move(os.fspath(file), os.fspath(OUTPUT_DIR / example["output"]))

        elif op_type == "video":
            file = list(
                Path(tmpdir / "media" / "videos" / "test" / "720p30").glob("*.mp4")
            )[0]
            convert_mp4_to_webm(file, OUTPUT_DIR / (example["output"] + ".webm"))
            shutil.move(
                os.fspath(file), os.fspath(OUTPUT_DIR / (example["output"] + ".mp4"))
            )
        else:
            print(f"Invalid output type specified: {op_type}")
