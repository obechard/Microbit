radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
let Potato = 0
Potato = -1
radio.setGroup(1)
basic.forever(function () {
    if (Potato) {
        basic.showIcon(IconNames.Skull)
    }
    if (Potato) {
        basic.clearScreen()
        if (true) {
            basic.showIcon(IconNames.Target)
            Potato += -1
        }
    }
})
