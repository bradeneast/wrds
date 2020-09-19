import { State, options } from "../../../State.js";
import { renderToolbar } from "../../render.js";

export default (direction = '') => {

    let dir = direction.toLowerCase();
    let zoom = State.settings.zoom;

    if (dir == 'out' && zoom > options.zoom.min) zoom = zoom - options.zoom.interval;
    if (dir == 'in' && zoom < options.zoom.max) zoom = zoom + options.zoom.interval;

    if (zoom != State.settings.zoom) {

        State.settings.zoom = zoom;
        State.hasChanged = true;

        renderToolbar();
    }
}