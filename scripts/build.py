from utils import (
    get_manim_plugins,
    parse_examples_folder,
    write_plugins_to_json,
    write_governance_file,
    render_manim_example,
    write_example_json,
    guarantee_existence_of_folders,
)

guarantee_existence_of_folders()

MANIM_PLUGINS = []
MANIM_PLUGINS = get_manim_plugins(default_plugins="default.json")
write_plugins_to_json(manim_plugins=MANIM_PLUGINS)
write_governance_file()

examples = parse_examples_folder()
# If None of the examples are marked as visible
# make sure to add the first one as visible so
# that atleast one example is visible.
for example in examples:
    if example["visible"] == "True":
        break
else:
    examples[0]["visible"] = "True"

write_example_json(examples)

for example in examples:
    render_manim_example(op_type=example["type"], code=example["code"], name=example["name"])
