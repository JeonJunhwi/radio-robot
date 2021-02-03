radio.onReceivedValue(function (name, value) {
    if (name == "left") {
        magicbit.MotorRun(magicbit.Motors.M1, value)
        basic.showString("left")
        basic.showString("" + (value))
    } else if (name == "right") {
        magicbit.MotorRun(magicbit.Motors.M2, value)
        basic.showString("right")
        basic.showString("" + (value))
    } else {
        basic.showString("?")
    }
})
radio.setGroup(1)
