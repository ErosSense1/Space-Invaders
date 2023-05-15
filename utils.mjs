import { A, CANVAS_HEIGHT, CANVAS_WIDTH, enemiesNum, player } from "./script.mjs";

function objFuncs(canvas, object, func) {
    if (func == "draw") object.draw(canvas);
    else if (func == "update") object.update(canvas);
    else if (func == "controls") object.controls(canvas);
}
function clean(c){
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function end(){
    if (player.bulletController.count == enemiesNum*enemiesNum) {
        player.bulletController.count = 0
        player.bulletController.bullets = []
        setTimeout(()=>{
            alert("You won")
            let restart = confirm("Wanna play again?")
            if(restart){
                A()
            } else {
                window.close()
            }
        }, 2000)
    }
}
export {objFuncs,end,clean}