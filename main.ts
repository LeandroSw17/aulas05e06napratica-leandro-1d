function aumentar (valor: number) {
    contador += valor
    atualizarDisplay()
}
function diminuir (valor: number) {
    if (contador - valor >= 0) {
        contador += 0 - valor
    } else {
        contador = 0
    }
    atualizarDisplay()
}
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.B)) {
        diminuir(10)
    } else {
        diminuir(1)
    }
})
input.onGesture(Gesture.Shake, function () {
    while (contador > 0) {
        diminuir(1)
        basic.pause(500)
    }
    basic.showString("FIM")
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.A)) {
        aumentar(10)
    } else {
        aumentar(1)
    }
})
function atualizarDisplay () {
    basic.showNumber(contador)
}
let contador = 0
atualizarDisplay()
