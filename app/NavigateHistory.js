import { renderAll } from "./functions/render.js";
import { State } from "./State.js";
import { relinkStringifiedObjects } from "./functions/utils.js";

/** @module NavigateHistory */
/**
 * Navigate to a different State in the saved history
 * @param {number}amount - the amount of change from the current history index. Positive numbers go forward, negative numbers go backward.
*/
export default (amount = 0) => {

    let target = State.nowIndex + amount;
    State.now = JSON.parse(State.history[target]);
    State.nowIndex = target;

    relinkStringifiedObjects();
    renderAll();
}