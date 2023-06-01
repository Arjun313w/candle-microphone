input.onSound(DetectedSound.Loud, function () {
    lit = !(lit)
})
let lit = false
lit = true
basic.forever(function () {
    if (lit) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
        basic.pause(200)
    } else {
        basic.clearScreen()
    }
})
