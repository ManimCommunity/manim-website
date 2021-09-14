import json
import re
from pathlib import Path

import requests

LOC = Path(__file__).parent / "../" / "dist" / "plugins.json"
REGEX = re.compile(r"<(.*)>manim-(?P<name>.*)<(.*)>")
IDS = []
content = requests.get("https://pypi.org/simple")
content = content.text.split('\n')

with open(Path(__file__).parent / 'default.json') as f:
    default = json.load(f)

for i in content:
    if "manim" in i:
        things = REGEX.search(i)
        if things:
            if "manim-" + things.group("name") not in default["exclude"] + default["archive"]:
                IDS.append("manim-" + things.group("name"))
IDS.extend(default['extras'])

with open(LOC, "w") as f:
    json.dump([IDS, default["archive"]], f)
