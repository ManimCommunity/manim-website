# output: UnionExample.png
# name: UnionExample
# visible: False
# type: image


class UnionExample(Scene):
    def construct(self):
        sq = Square(color=RED, fill_opacity=1).move_to([-2, 0, 0])
        cr = Circle(color=BLUE, fill_opacity=1).move_to([-1.3, 0.7, 0])
        un = Union(sq, cr, color=GREEN, fill_opacity=1).move_to([1.5, 0.3, 0])
        self.add(sq, cr, un)
