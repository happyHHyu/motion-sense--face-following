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
        CUHK_JC_iCar.headLightsOff()
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
    } else if (CUHK_JC_iCar.Ultrasonic_Car() < 5) {
        CUHK_JC_iCar.carStop()
    } else {
        CUHK_JC_iCar.carStop()
    }
}
ml.onStart(ml.event.Nothing, function () {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("message", 1)
})
ml.onStart(ml.event.Tick, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
})
function turn_left () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.TurnLeft, 30)
    CUHK_JC_iCar.setHeadColor(0xff0000)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0x007fff)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0xffff00)
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
	
})
function move_forward () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 30)
    CUHK_JC_iCar.setHeadColor(0xff0000)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0x007fff)
}
function turn_right () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.TurnRight, 30)
    CUHK_JC_iCar.setHeadColor(0xff0000)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0x007fff)
    basic.pause(500)
    CUHK_JC_iCar.setHeadColor(0xffff00)
}
ml.onStart(ml.event.No, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.No)
})
let xcenter = 0
radio.setGroup(131)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    face_following_mode()
})
