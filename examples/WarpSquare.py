# output: WarpSquare
# name: WarpSquare
# visible: False
# type: video


class WarpSquare(Scene):
    def construct(self):
        square = Square()
        self.play(
            ApplyPointwiseFunction(
                lambda point: complex_to_R3(np.exp(R3_to_complex(point))),
                square,
            ),
        )
        self.wait()
