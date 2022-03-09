# Manim Website

This repository is the website deployed at [manim.community](https://www.manim.community/).

This is a [Gatsby](https://www.gatsbyjs.com/) project.

## Build Site Locally
1. Install [Node](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install)
2. Install [Manim Dependencies](https://docs.manim.community/en/stable/installation.html) (namely LaTeX and FFmpeg)
3. Install python dependencies (`pip install -r scripts/requirements.txt`)
6. Run `python scripts/build.py`
7. Run `yarn install`
8. Run `yarn develop`
9. See the site at `http://localhost:8000`

**Note:** You won't be able to access `/governance` because that page is from a private repository and requires authentication to fetch.

## Code of Conduct

Our full code of conduct, and how we enforce it, can be read on [our website](https://docs.manim.community/en/latest/conduct.html).
