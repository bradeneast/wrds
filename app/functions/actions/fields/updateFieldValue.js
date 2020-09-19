import { getSectionID, findByID, getFieldID } from "../../utils.js";
import { renderPreview } from "../../render.js";
import { State } from "../../../State.js";

export default (e) => {

    let sectionID = getSectionID(e.target);
    let targetSection = findByID(sectionID);
    let fieldID = getFieldID(e.target);
    let targetField = targetSection.fields.find(f => f.id == fieldID);

    targetField.value = e.target.value;

    State.hasChanged = true;

    renderPreview();

}