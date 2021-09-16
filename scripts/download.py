import json
import re
from pathlib import Path

import requests

CONTENT_FOLDER = Path(__file__).parent.parent / 'content'
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
if not (CONTENT_FOLDER).exists():
    CONTENT_FOLDER.mkdir()

for id in IDS:
    file = Path(CONTENT_FOLDER, f'{id}.json')
    if file.exists():
        continue
    c = requests.get(f'https://pypi.org/pypi/{id}/json')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(c.text)
