import { control } from "./controls.mjs";
import { A, c, enemies, player } from "./script.mjs";
import { clean, end, objFuncs } from "./utils.mjs";

const x = () => {
  objFuncs(c, player, "controls");
  objFuncs(c, player, "update");
};
control();

function game() {
  clean(c);
  x();
  enemies.forEach((enemy) => {
    objFuncs(c, enemy, "draw");
    if (enemy.y >= player.position.y - 25) {
      enemies.forEach((e) => {
        e.y = -1000;
      });
      setTimeout(() => {
        alert("You lose!");
        let restart = confirm("Wanna play again?");
        if (restart) {
          window.location.reload();
        } else {
          window.close();
        }
      }, 500);
    }
  });
  end();
}
window.onload = setInterval(game, 1000 / 60);
