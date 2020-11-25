# Tutorial
## Step 1: Create the setting for your activity:
- a) Establish the potato
- b) Connect the two players devices

How to: 
- 1) Go in the variable tab and create a new variable, name it potato.
- 2) Drag the block "Set variable to 0", and place it under the start block. 
- 3) drag the variable potato to replace "variable", and change the number to -1.
- 4) In the radio tab, select the "Radio radio group ". 
- 5) change the number for the one given to you by your teacher. 

```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 
## Step 2: Define the player action: If you have the potato, send it to the other player 
- 1) In the Input tab, select and drag the "on shake" block, place it unthetered
- 2) Select the "If then" block from the Logic tab
- 3) Add the potato variable the first location on the "if then" block
- 4) In the radio tab, drag the "radio send number" block, add a potato variable in that block 
- 5) Drag from the variable tab the "Set potato to" block and change the number to -1 

```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```

## Step 3: Set your device to catch the potato when the opponent shakes their own device
- 1) In the input tab, select the "On button A pressed" block and drag in below, unthetered 
- 2) Go in the variable tab and nest the "set potato to 0" block
- 3) In the math tab, select "pick random 0 to 10" and change it to indicate 10 to 20
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