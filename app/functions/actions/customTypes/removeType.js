import { State } from "../../../State.js";
import { renderAll, renderModal } from "../../render.js";

export default (type) => {

    if (type == 'template') {
        State.templates = State.templates.filter(t => JSON.parse(t).id != State.now.selected.template.id);
        try {
            State.now.selected.template = JSON.parse(State.templates?.[0]) || {};
        } catch (e) { }
    }

    if (type == 'field type') {
        State.now.fieldTypes = State.now.fieldTypes.filter(type => type.id != State.now.selected.fieldType.id);
        State.now.selected.template.fieldTypes = State.now.fieldTypes;
        State.now.selected.fieldType = State.now.fieldTypes?.[0] || {};
    }

    State.now.editing = {};
    State.hasChanged = true;
    renderAll();
    renderModal(null);
}