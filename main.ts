radio.onReceivedString(function (receivedString) {
    while (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) >= 5) {
        if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
            cuteBot.motors(60, 10)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
            cuteBot.motors(10, 60)
        }
        if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
            cuteBot.motors(25, 25)
        }
    }
    cuteBot.stopcar()
    radio.sendString("1")
})
while (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) >= 5) {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(60, 10)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(10, 60)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(25, 25)
    }
}
cuteBot.stopcar()
radio.sendString("1")
