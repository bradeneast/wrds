import { State } from "../../../State.js";
import { walkSections } from "../../utils.js";

export default () => {

    State.now.selected.fieldType = State.now.fieldTypes[State.now.fieldTypes.length - 1];
    State.now.selected.template.fieldTypes = State.now.fieldTypes;

    if (State.now.fieldTypes.length == 1) {
        for (let { section, parent } of walkSections(State.now.children)) {
            section.fields.map(f => f.type = State.now.fieldTypes[0]);
        }
    }

}