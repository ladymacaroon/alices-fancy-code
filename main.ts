input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . # # # .
        # . # . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("I like right")
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("I like left")
    basic.clearScreen()
})
basic.forever(function () {
	
})
