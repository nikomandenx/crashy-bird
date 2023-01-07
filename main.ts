input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Brightness, 300)
let obstacels: game.LedSprite[] = []
let emptyObstacleY = randint(0, 4)
for (let indeks = 0; indeks <= 4; indeks++) {
    let index = 0
    if (index != emptyObstacleY) {
        obstacels.push(game.createSprite(4, index))
    }
}
basic.forever(function () {
    for (let obstacle of obstacels) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    while (obstacels.length > 0 && obstacels[0].get(LedSpriteProperty.X) == 0) {
        let list: game.LedSprite[] = []
        list.removeAt(0).delete()
    }
    for (let obstacle of obstacels) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})
