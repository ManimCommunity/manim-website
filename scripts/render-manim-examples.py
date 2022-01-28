import json
import os
import shutil
import subprocess
import tempfile
import re

from pathlib import Path

EXAMPLE_JSON = Path(__file__).parent.parent / "manim_examples.json"
EXAMPLE_FOLDER = Path(__file__).parent.parent / "examples"
OUTPUT_DIR = Path(__file__).parent.parent / "static" / "examples"
DETAILS_PARSE_REGEX = re.compile(
    r"^#[\s]*(?P<var>[a-zA-Z]*):[\s]*(?P<value>[\S]*)",
    re.MULTILINE,
)

OUTPUT_DIR.mkdir(exist_ok=True, parents=True)

examples = []
for example in EXAMPLE_FOLDER.glob("*.py"):
    temp = {}
    with example.open(encoding="utf-8") as f:
        code = f.read()

    for reg_val in DETAILS_PARSE_REGEX.finditer(code):
        try:
            var = reg_val.group("var").strip()
            val = reg_val.group("value").strip()
        except AttributeError:
            print(f"Invalid file: {example}, skipping")
            break
        if val == "True":
            val = True
        elif val == "False":
            val = False
        temp[var] = val
    else:
        code_final = ""
        for _code in code.split("\n"):
            if _code.startswith("#"):
                continue
            code_final += _code + "\n"
        temp["code"] = code_final.strip()
        examples.append(temp)

with open(EXAMPLE_JSON, "w", encoding="utf-8") as f:
    print(f"Created {EXAMPLE_JSON}")
    json.dump(examples, f, indent=4)

manim = shutil.which("manim")
if not manim:
    raise Exception("Manim is required to run this script.")
ffmpeg = shutil.which("ffmpeg")
if not ffmpeg:
    raise Exception("Ffmpeg is required to run this script.")


def convert_mp4_to_webm(input: Path, output: Path):
    # from https://stackoverflow.com/a/47512301/12858827
    subprocess.run(
        [
            ffmpeg,
            "-y",
            "-i",
            os.fspath(input),
            "-c:v",
            "libvpx-vp9",
            "-crf",
            "30",
            "-b:v",
            "0",
            "-b:a",
            "128k",
            "-c:a",
            "libopus",
            os.fspath(output),
        ],
        check=True,
    )


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
