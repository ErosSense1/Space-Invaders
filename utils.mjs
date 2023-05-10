import { c } from "./script.mjs";

function objFuncs(canvas, object, func) {
    if (func == "draw") object.draw(canvas);
    else if (func == "update") object.update(canvas);
    else if (func == "controls") object.controls(c);
}

export {objFuncs}