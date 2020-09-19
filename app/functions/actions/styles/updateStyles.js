import { State } from "../../../State.js";
import { renderStyles } from '../../render.js';

export default (e) => {

    let cssText = e.target.textContent || '';

    if (e.target.id.includes('global')) {
        State.now.selected.globalType.css = cssText;
        State.hasChanged = true;
    }

    if (e.target.id.includes('field')) {
        State.now.selected.fieldType.css = cssText;
        State.hasChanged = true;
    }

    renderStyles();

}