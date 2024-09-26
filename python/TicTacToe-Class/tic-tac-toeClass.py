class Board:
    def __init__(self):
        self.matrix = [[" " for i in range(3)] for j in range(3)]

    def display(self):
        print("+-+-+-+")
        for row in self.matrix:
            print("|", "|".join(row), "|", sep="")
            print("+-+-+-+")


class Game:
    def __init__(self):
        self.board = Board()
        self.cur_player = "X"

    def swtich_player(self):
        self.cur_player = "0" if self.cur_player == "X" else "X"

    def mark(self, row, col):
        self.board.matrix[row][col] = self.cur_player

    def get_input(self):
        while True:
            try:
                row = int(input("Enter row number [0, 1 or 2]: "))
                col = int(input("Enter col number [0, 1, 2]: "))

                if (
                    0 <= row <= 2
                    and 0 <= col <= 2
                    and self.board.matrix[row][col] == " "
                ):
                    return row, col
                else:
                    print("Invalid input. Please enter numbers between 0 and 2.")
            except ValueError:
                print("Invalid input. Please enter a number.")

    def check_winner(self):
        for row in range(3):
            if (
                self.board.matrix[row][0]
                == self.board.matrix[row][1]
                == self.board.matrix[row][2]
                == self.cur_player
            ):
                return True
        for col in range(3):
            if (
                self.board.matrix[0][col]
                == self.board.matrix[1][col]
                == self.board.matrix[2][col]
                == self.cur_player
            ):
                return True
        if (
            self.board.matrix[0][0]
            == self.board.matrix[1][1]
            == self.board.matrix[2][2]
            == self.cur_player
        ):
            return True
        if (
            self.board.matrix[2][0]
            == self.board.matrix[1][1]
            == self.board.matrix[0][2]
            == self.cur_player
        ):
            return True
        return False

    def is_board_full(self):
        return (
            False
            if any(i for row in self.board.matrix for i in row if i == " ")
            else True
        )

    def play(self):
        while True:
            self.board.display()
            print(f"Player {self.cur_player}'s turn")
            row, col = self.get_input()
            self.mark(row, col)
            if self.check_winner():
                print(f"Player '{self.cur_player}' won the game!")
                self.board.display()
                break
            if self.is_board_full():
                print(f"It is a TIE!")
                self.board.display()
                break
            self.swtich_player()


if __name__ == "__main__":
    game = Game()
    game.play()
