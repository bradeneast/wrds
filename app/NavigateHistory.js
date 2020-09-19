import {
    renderContentEditor,
    renderPreview,
    renderStyleEditor,
    renderStyles,
    renderToolbar
} from "./functions/render.js";
import { State } from "./State.js";
import { relinkStringifiedObjects } from "./functions/utils.js";

export default (direction = 0) => {

    let target = State.nowIndex + direction;
    State.now = JSON.parse(State.history[target]);
    State.nowIndex = target;

    relinkStringifiedObjects();

    renderContentEditor();
    renderToolbar();
    renderPreview();
    renderStyleEditor();
    renderStyles();

}