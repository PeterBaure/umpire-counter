input.onButtonPressed(Button.A, function () {
    Number_of_strikes += 1
    basic.pause(500)
    basic.showString("S")
    basic.showNumber(Number_of_strikes)
    if (Number_of_strikes == 3) {
        basic.clearScreen()
        basic.showString("Out")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    number_of_balls = 0
    Number_of_strikes = 0
})
input.onButtonPressed(Button.B, function () {
    number_of_balls += 1
    basic.pause(500)
    basic.showString("B")
    basic.showNumber(number_of_balls)
    if (number_of_balls == 4) {
        basic.clearScreen()
        basic.showString("Walk")
    }
})
let number_of_balls = 0
let Number_of_strikes = 0
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
	
})
