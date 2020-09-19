import { State } from "../../../State.js";
import { renderPreview } from "../../render.js";
import formatCSS from "./formatCSS.js";
import { $ } from "../../utils.js";

export default (e) => {

    let fieldTypeID = e.target.value;
    let code = $('field_type_styles');
    let matchingType = State.now.fieldTypes.find(type => type.id == fieldTypeID);

    if (matchingType) {
        if (!matchingType.css) matchingType.css = '';
        State.now.selected.fieldType = matchingType;
    }
    else {
        let fallbackType = { id: fieldTypeID, css: '' };
        State.now.fieldTypes.push(fallbackType);
        State.now.selected.fieldType = fallbackType;
    }

    code.innerHTML = State.now.selected.fieldType.css;
    formatCSS(code);

    State.hasChanged = true;
    renderPreview();

}