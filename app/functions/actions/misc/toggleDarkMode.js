import { State } from "../../../State.js";
import { renderToolbar } from "../../render.js";

export default (e) => {

    let dm = State.settings.darkMode;

    document.documentElement.classList.toggle('dark_mode', !dm);
    State.settings.darkMode = !dm;
    State.hasChanged = true;

    renderToolbar();

}