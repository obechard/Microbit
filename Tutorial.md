# Tutorial
## Step 1: Create the setting for your activity:
- 1) Establish the potato
- 2) Connect the two players devices

```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 
## Step 2: Define the player action: If you have the potato, send it to the other player 
```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```

## Step 3: Set your device to catch the potato when the opponent shakes their own device
```blocks
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
```

## Step 4: Define what the potato is doing
- 1) Checks if the game is done then displays loosing screen
- 2) Checks that the players doesn't have the potato, if so displays nothing
- 3) Checks if you are holding the potato, then counts down the timer
```blocks
basic.forever(function () {
    if (Potato == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Potato == -1) {
        basic.clearScreen()
        if (Potato > 0) {
            basic.showIcon(IconNames.Target)
            Potato += -1
        }
    }
})
```