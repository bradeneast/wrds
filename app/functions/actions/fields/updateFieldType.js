import { State } from "../../../State.js";
import { getFieldID, getSectionID, findByID } from "../../utils.js";
import { renderPreview } from '../../render.js';

export default (e) => {

    let fieldTypeID = e.target.value
    let targetFieldID = getFieldID(e.target);
    let targetSectionID = getSectionID(e.target);
    let targetSection = findByID(targetSectionID);
    let targetField = targetSection.fields.find(f => f.id == targetFieldID);

    targetField.type = State.now.fieldTypes.find(t => t.id == fieldTypeID);

    State.hasChanged = true;

    renderPreview();

}