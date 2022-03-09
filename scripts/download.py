import base64
import requests

from constants import CONTENT_FOLDER, GITHUB_TOKEN
from utils import get_manim_plugins, write_plugins_to_json



with open(CONTENT_FOLDER / f"steering_council.md", "w", encoding="utf-8") as f:
    f.write(front_matter_md.format(date=date))

if GITHUB_TOKEN:
    req = requests.get(
        "https://api.github.com/repos/manimcommunity/official_documents/contents/steering_council.md",
        headers={
            "Accept": "application/vnd.github.v3+json",
            "Authorization": f"token {GITHUB_TOKEN}",
        },
    )
    last_mod_req = requests.get(
        "https://api.github.com/repos/manimcommunity/official_documents/commits?path=steering_council.md&page=1&per_page=1",
        headers={
            "Accept": "application/vnd.github.v3+json",
            "Authorization": f"token {GITHUB_TOKEN}",
        },
    )
    date = last_mod_req.json()[0]["commit"]["committer"]["date"]
    contents = base64.b64decode(req.json()["content"])

    with open(CONTENT_FOLDER / f"steering_council.md", "w", encoding="utf-8") as f:
        f.write(front_matter_md.format(date=date))
        f.write("\n")
        f.write(contents.decode("utf-8"))
else:
    # Create a empty file so that the build doesn't error
    # out for people with no access to Steering Council repo
    with open(CONTENT_FOLDER / f"steering_council.md", "w", encoding="utf-8") as f:
        f.write(front_matter_md.format(date="2021-12-05"))
        f.write("\n")
        f.write("# This is a stub file.")
