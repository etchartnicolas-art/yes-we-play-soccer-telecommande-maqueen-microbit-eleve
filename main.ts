input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("recule")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
function recule () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 80)
}
function tournedroite () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 70)
}
function tournegauche () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 70)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("crochet-gauche")
    basic.showIcon(IconNames.Meh)
})
function crochetg () {
    tournegauche()
    basic.pause(500)
    arret()
    avancer()
    basic.pause(500)
    arret()
    tournedroite()
    basic.pause(500)
    arret()
    avancer()
    basic.pause(500)
    arret()
}
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("droite")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("gauche")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("boost")
    basic.showIcon(IconNames.Skull)
})
function crochetd () {
    tournedroite()
    basic.pause(500)
    arret()
    avancer()
    basic.pause(500)
    arret()
    tournegauche()
    basic.pause(500)
    arret()
    avancer()
    basic.pause(500)
    arret()
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "arret") {
        arret()
        basic.showIcon(IconNames.No)
    }
    if (receivedString == "avance") {
        avancer()
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedString == "recule") {
        recule()
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (receivedString == "gauche") {
        tournegauche()
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (receivedString == "droite") {
        tournedroite()
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (receivedString == "crochet-droit") {
        crochetd()
        basic.showIcon(IconNames.Confused)
    }
    if (receivedString == "crochet-gauche") {
        crochetg()
        basic.showIcon(IconNames.Confused)
    }
    if (receivedString == "boost") {
        boost()
        basic.showIcon(IconNames.Skull)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("crochet-droit")
    basic.showLeds(`
        # # . # #
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("avance")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
function avancer () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("arret")
    basic.showIcon(IconNames.No)
})
function boost () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
function arret () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
}
radio.setGroup(10)
basic.showIcon(IconNames.Chessboard)
