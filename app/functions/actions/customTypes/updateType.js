import { State } from "../../../State.js";
import { renderAll } from "../../render.js";

export default (e) => {
    State.now.editing[e.target.name] = e.target.value;
    State.hasChanged = true;
    renderAll();
}