import { getSectionID, getFieldID, findByID } from "../../utils.js";
import { renderContentEditor, renderPreview } from "../../render.js";
import { State } from "../../../State.js";

export default (e) => {

    let sectionID = getSectionID(e.target);
    let targetSection = findByID(sectionID);
    let fieldID = getFieldID(e.target);

    targetSection.fields = targetSection.fields.filter(f => f.id != fieldID);
    State.hasChanged = true;

    renderContentEditor();
    renderPreview();

}