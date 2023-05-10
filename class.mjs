import { Bullet } from "./bullet.mjs";
import { CANVAS_HEIGHT, CANVAS_WIDTH, enemies } from "./script.mjs";
class Player {
    constructor(bulletController) {
        this.size = {
            width: 25,
            height: 25,
        };
        this.position = {
            x: 0,
            y: 0,
        };
        this.speed = {
            x: 0,
            y: 0,
        };
        this.keys = {
            up: {
                key: "",
                pressed: false,
            },
            down: {
                key: "",
                pressed: false,
            },
            left: {
                key: "ArrowLeft",
                pressed: false,
            },
            right: {
                key: "ArrowRight",
                pressed: false,
            },
            shoot: {
                key: " ",
                pressed: false,
            },
        };
        this.bulletController = bulletController;
        this.hp = 0;
    }
    draw(c) {
        c.fillStyle = "black";
        c.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }
    update(c) {
        this.draw(c);

        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x <= 0) this.position.x = 0;
        else if (this.position.x + this.size.width >= CANVAS_WIDTH)
            this.position.x = CANVAS_WIDTH - this.size.width;

        if (this.position.y <= 0) this.position.y = 0;
        else if (this.position.y + this.size.height >= CANVAS_HEIGHT)
            this.position.y = CANVAS_HEIGHT - this.size.height;
    }
    controls(c) {
        if (this.keys.left.pressed) {
            this.speed.x = -2;
        } else if (this.keys.right.pressed) {
            this.speed.x = 2;
        } else {
            this.speed.x = 0;
        }

        if (this.keys.up.pressed) {
            this.speed.y = -2;
        } else if (this.keys.down.pressed) {
            this.speed.y = 2;
        } else {
            this.speed.y = 0;
        }

        this.bulletController.draw(c);
        if (this.keys.shoot.pressed) {
            const speed = 5;
            const delay = 15;
            const damage = 0.9;
            const bulletX = this.position.x + this.size.width / 2;
            const bulletY = this.position.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }
}

class BulletController {
    bullets = [];
    delay = 0;
    count = 0
    constructor(canvas) {
        this.canvas = canvas;
    }
    shoot(x, y, speed, damage, delay) {
        if (this.delay <= 0) {
            this.bullets.push(new Bullet(x, y, speed, damage));
            this.delay = delay;
        }
        this.delay--;
    }
    draw(c) {
        this.bullets.forEach((bullet) => {
            bullet.draw(c);
            if (bullet.y <= -15) this.bullets.shift();

            enemies.forEach((enemy) => {
                if (
                    bullet.y <= enemy.y + (enemy.height - 1) &&
                    bullet.x <= enemy.x + enemy.width &&
                    bullet.x + bullet.width >= enemy.x
                ) {
                    this.bullets.shift();
                }
                if (
                    bullet.y <= enemy.y + enemy.height &&
                    bullet.x <= enemy.x + enemy.width &&
                    bullet.x + bullet.width >= enemy.x
                ) {
                    enemy.hp = 0;
                    if (enemy.hp === 0) {
                        enemy.x = -100;
                        this.count += 1;
                    }
                } else return false;
            });
        });
    }
}

class Enemy {
    width = 25;
    height = 25;
    hp = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw(c) {
        c.fillRect(this.x, this.y, this.width, this.height);
    }
    life(n) {
        this.hp = n;
    }
}

export {Enemy,Player,BulletController}