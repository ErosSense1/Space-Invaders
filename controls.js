window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case player.keys.right.key:
            player.keys.right.pressed = true;
            break;
        case player.keys.left.key:
            player.keys.left.pressed = true;
            break;
        case player.keys.shoot.key:
            player.keys.shoot.pressed = true;
            break;
        case player.keys.up.key:
            player.keys.up.pressed = true;
            break;
        case player.keys.down.key:
            player.keys.down.pressed = true;
            break;
    }
});
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case player.keys.right.key:
            player.keys.right.pressed = false;
            break;
        case player.keys.left.key:
            player.keys.left.pressed = false;
            break;
        case player.keys.shoot.key:
            player.keys.shoot.pressed = false;
            break;
        case player.keys.up.key:
            player.keys.up.pressed = false;
            break;
        case player.keys.down.key:
            player.keys.down.pressed = false;
            break;
    }
});
