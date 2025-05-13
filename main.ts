basic.showNumber(5)
basic.forever(function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Happy)
})
