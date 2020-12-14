import requests
import json
import re

REGEX = re.compile(r"<(.*)>manim-(?P<name>.*)<(.*)>")
IDS = []
#content = requests.get("https://pypi.org/simple")
#with open("content.html","wb") as f:
#    f.write(content.content)
with open("content.html","r") as f:
    content = f.readlines()

for i in content:
    if 'manim' in i:
        things= REGEX.search(i)
        if things:
            IDS.append('manim-'+things.group('name'))
with open('plugins.json','w') as f:
    json.dump(IDS,f)
            
