import shutil
import argparse
from utils import (
    get_manim_plugins,
    parse_examples_folder,
    write_plugins_to_json,
    write_governance_file,
    render_manim_example,
    write_example_json,
    guarantee_existence_of_folders,
    guarantee_one_visible,
)

manim = shutil.which("manim")
ffmpeg = shutil.which("ffmpeg")
if manim is None or ffmpeg is None:
    raise FileNotFoundError("Manim and FFmpeg are required for running this script")

parser = argparse.ArgumentParser()
parser.add_argument("--no-render-examples", action="store_true")
config = parser.parse_args()

MANIM_PLUGINS = []
MANIM_PLUGINS = get_manim_plugins(default_plugins="default.json")

examples = parse_examples_folder()
examples = guarantee_one_visible(examples)

if __name__ == "__main__":
    guarantee_existence_of_folders()
    write_plugins_to_json(manim_plugins=MANIM_PLUGINS)
    write_governance_file()
    write_example_json(examples=examples)

    if config.no_render_examples:
        print("Skipping Examples rendering")
    else:
        for example in examples:
            render_manim_example(
                op_type=example["type"],
                code=example["code"],
                name=example["name"],
                manim_path=manim,
                ffmpeg_path=ffmpeg,
            )
