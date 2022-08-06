function game() {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    objFuncs(c, player, "controls");
    objFuncs(c, player, "update");
    enemies.forEach((enemy) => {
        enemy.draw(c);
        enemy.life(2);
    });

    if (count == enemiesNum*enemiesNum) {
        enemies = []
        count = 0
        player.bulletController.bullets = []
        A()
        
    }
}

window.onload = setInterval(game, 1000 / 60);
