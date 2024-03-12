let Code = 0
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . .
    # . . . .
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && Code == 0) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        Code = 1
    }
    if ((input.buttonIsPressed(Button.B) || input.logoIsPressed()) && Code == 0) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        Code = 0
    }
    if (input.buttonIsPressed(Button.B) && Code == 1) {
        basic.clearScreen()
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        Code = 2
    }
    if ((input.buttonIsPressed(Button.A) || input.logoIsPressed()) && Code == 1) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        Code = 0
    }
    if (input.logoIsPressed() && Code == 2) {
        basic.clearScreen()
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        Code = 3
    }
    if ((input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) && Code == 2) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        Code = 0
    }
    if (input.buttonIsPressed(Button.A) && Code == 3) {
        basic.clearScreen()
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        Code = 4
    }
    if ((input.buttonIsPressed(Button.B) || input.logoIsPressed()) && Code == 3) {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        Code = 0
    }
    if (input.logoIsPressed() && Code == 4) {
        basic.clearScreen()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1500)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        Code = 0
    }
})
