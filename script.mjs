/** @type {HTMLCanvasElement} */

import { BulletController, Enemy, Player } from "./class.mjs";

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let enemiesNum = 9;
let enemies = [];
const CANVAS_WIDTH = (canvas.width = 250);
const CANVAS_HEIGHT = (canvas.height = 500);

canvas.style.border = "2px solid";
let bulletController = new BulletController(canvas);
let player = new Player(bulletController);

let enemyX = [
    0 + 4,
    25 + 6,
    50 + 8,
    75 + 10,
    100 + 12,
    125 + 14,
    150 + 16,
    175 + 18,
    200 + 20,
    225 + 22,
];
let enemyY = [
    0 + 8,
    25 + 12,
    50 + 16,
    75 + 20,
    100 + 24,
    125 + 28,
    150 + 32,
    175 + 36,
    200 + 40,
];

function A() {
    for (let i = 0; i < enemiesNum; i++) {
        for (let j = 0; j < enemiesNum; j++) {
            enemies.push(new Enemy(enemyX[i], enemyY[j]));
        }
    }
}
A();
enemies.forEach((enemy) => {
    enemy.life(1);
});
player.position.y = CANVAS_HEIGHT - player.size.height;
player.position.x = CANVAS_WIDTH / 2 - player.size.width / 2;

export {CANVAS_HEIGHT,CANVAS_WIDTH,enemies,player,enemiesNum,A,c}