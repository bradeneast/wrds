import { State, DOM } from "../../../State.js";
import linkFieldTypes from "./linkFieldTypes.js";
import { FieldType } from "../../../Classes.js";
import { renderAll, renderModal } from "../../render.js";


export default (type) => {

    State.now.editing.name = State.now.editing.name.trim();

    if (!State.now.editing.name.length) {
        renderModal(null);
        return;
    }

    if (type == 'field type') {
        State.now.fieldTypes.push(new FieldType(State.now.editing.name));
        linkFieldTypes();
        DOM.styleEditorPane.querySelector('code')?.focus();
    }

    State.now.editing = {};
    State.hasChanged = true;
    renderAll();
    renderModal(null);
}