import { State } from "../../../State.js";
import { renderPreview } from "../../render.js";
import formatCSS from "./formatCSS.js";
import { $ } from "../../utils.js";

export default (e) => {

    let code = $('global_type_styles');
    let typeName = e.target.value;
    let matchingType = State.now.globalTypes.find(t => t.name == typeName);

    if (matchingType) {
        if (!matchingType.css) matchingType.css = '';
        State.now.selected.globalType = matchingType;
    }
    else {
        let fallbackType = { id: typeName, css: '' };
        State.now.globalTypes.push(fallbackType);
        State.now.selected.globalType = fallbackType;
    }

    code.innerHTML = State.now.selected.globalType.css;
    formatCSS(code);

    State.hasChanged = true;
    renderPreview();

}