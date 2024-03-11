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
        let Code_2 = 0
        basic.clearScreen()
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        Code = Code_2
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
})
