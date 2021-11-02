input.onButtonPressed(Button.A, function () {
    basic.showString("You got the wrong one!")
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Congradulations!! You picked the right one!!")
    basic.showIcon(IconNames.Yes)
})
