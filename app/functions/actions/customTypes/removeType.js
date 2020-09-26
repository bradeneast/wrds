import { State } from "../../../State.js";
import { renderAll, renderModal } from "../../render.js";

export default (type) => {

    if (type == 'field type') {
        State.now.fieldTypes = State.now.fieldTypes.filter(type => type.id != State.now.selected.fieldType.id);
        State.now.selected.fieldType = State.now.fieldTypes?.[0] || {};
    }

    State.now.editing = {};
    State.hasChanged = true;
    renderAll();
    renderModal(null);
}