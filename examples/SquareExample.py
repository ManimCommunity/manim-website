# output: SquareExample.png
# name: SquareExample
# visible: False
# type: image


class SquareExample(Scene):
    def construct(self):
        square = Square(color=YELLOW, fill_opacity=0.5)
        self.add(square)
