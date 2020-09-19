import { State, DOM } from "../../../State.js";
import linkFieldTypes from "./linkFieldTypes.js";
import { FieldType, Template } from "../../../Classes.js";
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

    if (type == 'template') {

        let template = new Template(State.now.editing.name);

        template.fieldTypes = State.now.fieldTypes;
        template.globalTypes = State.now.globalTypes;

        State.templates.push(JSON.stringify(template));
        State.now.selected.template = template;

    }

    State.now.editing = {};
    State.hasChanged = true;
    renderAll();
    renderModal(null);
}