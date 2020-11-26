# Tutorial

## Step 1: 
Let's start by creating the setting for your activity:
- First, we will establish what the potato is
- Then we will connect the two players' devices


1. Go in the variable tab and click "Make a Variable". Name it potato.
2. Drag the block ``||Set potato variable to 0||``, and place it under the start block. Change the number to -1.
3. In the radio tab, select the ``||Radio set group||`` block. Place it under the "Set potato" block.  
4. Change the number to the one your teacher gave you. 


```blocks
let Potato = 0
Potato = -1
radio.setGroup(1)
``` 

## Step 2: 

Define the player action: If you have the potato, send it to the other player 
1. In the Input tab, select and drag the **on shake** block. Place it unthetered. 
2. Select the **If true then** block from the Logic tab
3. Place the potato variable over the true variable in the **if true then** block
4. In the radio tab, add the **radio send number** block under the **if potato then** block. Add a potato variable in the radio block 
5. Under the variable tab, drag **Set potato to** block in and add it under the radio block. Change the number to -1 


```blocks 
input.onGesture(Gesture.Shake, function () {
    if (Potato) {
        radio.sendNumber(Potato)
        Potato = -1
    }
})
```

## Step 3: 

Set your device to catch the potato when the opponent shakes their own device
1. In the input tab, select the **On button A pressed** block and drag in, unthetered 
2. Go in the variable tab and place the **set potato to 0** block in the **On button A pressed** block
3. In the math tab, select **pick random 0 to 10** block, add it in the space for 0 and change it to indicate 10 to 20


```blocks
radio.onReceivedNumber(function (receivedNumber) {
    Potato = receivedNumber
})
// Starts the game timer
input.onButtonPressed(Button.A, function () {
    Potato = randint(10, 20)
})
```


## Step 4: 
Define what the potato is doing
- Checks if the game is done then displays loosing screen
- Checks that the players doesn't have the potato, if so displays nothing
- Checks if you are holding the potato, then counts down the timer

1. Drag from the Basic tab the **forever** block, unthetered
2. From the logic tab, add in the **if true then** block. Replace the true variable with **0 = 0**. Add two more of these blocks. 
3. In the first **if then** block, replace the first 0 with a potato variable 
4. Select the **show Icon** block from Basics, and add it underneath the first **if potato = 0** block and change it to the skull image.
5. Drag in **clear screen** block from Basics and add it under the second **if then** block. Change the 0 to -1
6. In the third **if then** block, change the **=** symbol for the **>** symbol
7. Drag a **show icon** block from basic below the third **"If then"** and select an image that reminds you of a potato
8. From the variable tab, add a **change potato by 1** block, and modify the number to -1


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


## Step 5: 

Congratulations, you have completed the Hot Potato Game, now it's time to play! 
- Download your code by saving it locally
- Drag your save .hex file to your Micro:bit (make sure it is plugged in with your USB)
- Could you add a third or fourth player? 



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
