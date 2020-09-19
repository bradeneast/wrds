import { State } from "../../../State.js";
import { renderToolbar } from "../../render.js";

export default (e) => {

    let setTo = State.settings.advancedUI;

    document.documentElement.classList.toggle('advanced', !setTo);
    State.settings.advancedUI = !setTo;
    State.hasChanged = true;

    renderToolbar();
}