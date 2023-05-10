import { Control } from "./controls.mjs";
import { A, CANVAS_HEIGHT, CANVAS_WIDTH, c, enemies, enemiesNum, player } from "./script.mjs";
import { objFuncs } from "./utils.mjs";

function game() {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    objFuncs(c, player, "controls");
    objFuncs(c, player, "update");
    enemies.forEach((enemy) => {
        enemy.draw(c);
        enemy.life(2);
    });

    if (player.bulletController.count == enemiesNum*enemiesNum) {
        enemies = []
        player.bulletController.count = 0
        player.bulletController.bullets = []
        A()
        
    }
}
Control()
window.onload = setInterval(game, 1000 / 60);
