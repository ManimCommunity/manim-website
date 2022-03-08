import re
from pathlib import Path

PLUGIN_REGEX = re.compile(r"<(.*)>manim-(?P<name>.*)<(.*)>")
PARSE_PARAMETERS = re.compile(
    r"^#[\s]*(?P<var>[a-zA-Z]*):[\s]*(?P<value>[\S]*)",
    re.MULTILINE,
)

EXAMPLE_JSON = Path(__file__).parent.parent / "manim_examples.json"
EXAMPLE_FOLDER = Path(__file__).parent.parent / "examples"
OUTPUT_DIR = Path(__file__).parent.parent / "static" / "examples"
