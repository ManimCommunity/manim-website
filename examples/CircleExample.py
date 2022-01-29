# output: CircleExample.png
# name: CircleExample
# visible: True
# type: image


class CircleExample(Scene):
    def construct(self):
        circle = Circle(color=BLUE, fill_opacity=0.5)
        self.add(circle)
