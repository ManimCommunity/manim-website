import json
import re
from pathlib import Path

import requests

LOC = Path(__file__).parent / "../" / "dist" / "plugins.json"
REGEX = re.compile(r"<(.*)>manim-(?P<name>.*)<(.*)>")
IDS = []
content = requests.get("https://pypi.org/simple")
content = content.text.split('\n')

for i in content:
    if "manim" in i:
        things = REGEX.search(i)
        if things:
            IDS.append("manim-" + things.group("name"))
with open(LOC, "w") as f:
    json.dump(IDS, f)
