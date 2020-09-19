import { getSectionID, findByID } from "../../utils.js"
import { State } from "../../../State.js";
import { renderContentEditor } from "../../render.js";
import { Field } from "../../../Classes.js";

export default (e) => {

    let id = getSectionID(e.target);
    let targetSection = findByID(id);
    let newField = new Field();

    newField.type = State.now.fieldTypes[0];
    targetSection.fields.push(newField);

    State.hasChanged = true;

    renderContentEditor();

    if (!State.isMobile) {
        document.querySelector(`[id="${newField.id}"] input`)?.focus();
    }

}