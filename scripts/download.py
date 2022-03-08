import base64
import os  # Duplicate
from pathlib import Path  # Duplicate

import requests #Duplicate
from utils import get_manim_plugins

CONTENT_FOLDER = Path(__file__).parent.parent / "content"
MANIM_PLUGINS = []

CONTENT_FOLDER.mkdir(exist_ok=True, parents=True)

all_packages = requests.get("https://pypi.org/simple").text.split("\n")
MANIM_PLUGINS = get_manim_plugins(
    pypi_packages=all_packages, default_plugins="default.json"
)


front_matter_md = """
---
slug: "/governance"
title: "Manim governance"
date: {date}
description: "Manim's governance model"
---
"""

GITHUB_TOKEN = os.environ.get("TOKEN_FOR_API_GITHUB_PRIVATE")
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

    with open(Path(CONTENT_FOLDER, f"steering_council.md"), "w", encoding="utf-8") as f:
        f.write(front_matter_md.format(date=date))
        f.write("\n")
        f.write(contents.decode("utf-8"))
else:
    # Create a empty file so that the build doesn't error
    # out for people with no access to Steering Council repo
    with open(Path(CONTENT_FOLDER, f"steering_council.md"), "w", encoding="utf-8") as f:
        f.write(front_matter_md.format(date="2021-12-05"))
        f.write("\n")
        f.write("# This is a stub file.")
