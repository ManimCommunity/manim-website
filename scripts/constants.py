import re
from pathlib import Path
import os
import shutil

PLUGIN_REGEX = re.compile(r"<(.*)>manim-(?P<name>.*)<(.*)>")
PARSE_PARAMETERS = re.compile(
    r"^#[\s]*(?P<var>[a-zA-Z]*):[\s]*(?P<value>[\S]*)",
    re.MULTILINE,
)

EXAMPLE_JSON = Path(__file__).parent.parent / "manim_examples.json"
EXAMPLE_FOLDER = Path(__file__).parent.parent / "examples"
CONTENT_FOLDER = Path(__file__).parent.parent / "content"
OUTPUT_DIR = Path(__file__).parent.parent / "static" / "examples"
GITHUB_TOKEN = os.environ.get("TOKEN_FOR_API_GITHUB_PRIVATE")

front_matter_md = """---
slug: "/governance"
title: "Manim governance"
date: {date}
description: "Manim's governance model"
---
"""

manim = shutil.which("manim")
if not manim:
    raise ModuleNotFoundError("Manim is required to run the build script")

ffmpeg = shutil.which("ffmpeg")
if not ffmpeg:
    raise ModuleNotFoundError("FFmpeg is required to run the build script")
