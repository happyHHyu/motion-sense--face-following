radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
function face_following_mode () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        xcenter = huskylens.readeBox(1, Content1.xCenter)
        if (xcenter < 80) {
            turn_left()
        }
        if (xcenter >= 80 && xcenter <= 240) {
            move_forward()
        }
        if (xcenter > 240) {
            turn_right()
        }
    } else {
        CUHK_JC_iCar.carStop()
        CUHK_JC_iCar.headLightsOff()
    }
}
ml.onStart(ml.event.Nothing, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("message", 1)
})
ml.onStart(ml.event.Tick, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
})
function turn_left () {
    music.play(music.stringPlayable("B B B B B B B B ", 120), music.PlaybackMode.LoopingInBackground)
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.TurnLeft, 30)
    CUHK_JC_iCar.setHeadColor(0xffff00)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0xff0000)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0x007fff)
    basic.pause(500)
    music.stopAllSounds()
}
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("message", 3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("message", 2)
})
radio.onReceivedValue(function (name, value) {
    if (name == "message" && value == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (name == "message" && value == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
ml.onStart(ml.event.Unknown, function () {
    radio.sendNumber(3)
})
function move_forward () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 30)
    CUHK_JC_iCar.setHeadColor(0xff0000)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0x007fff)
    basic.pause(500)
}
function turn_right () {
    music.play(music.stringPlayable("B B B B B B B B ", 120), music.PlaybackMode.LoopingInBackground)
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.TurnRight, 30)
    CUHK_JC_iCar.setHeadColor(0xffff00)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0xff0000)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0x007fff)
    basic.pause(500)
    music.stopAllSounds()
}
ml.onStart(ml.event.No, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
let xcenter = 0
radio.setGroup(131)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
CUHK_JC_iCar.headLightsOff()
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (CUHK_JC_iCar.Ultrasonic_Car() < 5) {
        CUHK_JC_iCar.carStop()
    } else {
        face_following_mode()
    }
})
