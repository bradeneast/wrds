import { State } from '../../../State.js';
import { renderContentEditor } from '../../render.js';
import { walkSections, getSectionID, getSectionDepth } from '../../utils.js';
import { Section } from '../../../Classes.js';


export default (e) => {

    let id = getSectionID(e.target);
    let depth = getSectionDepth(e.target);
    let newID;

    for (let { section, parent } of walkSections(State.now.children, State.now)) {

        if (section.id == id) {
            let newSection = new Section(depth + 1);
            section.children.unshift(newSection);
            newID = newSection.id;
            break;
        }

    }

    State.hasChanged = true;
    renderContentEditor();

    if (!State.isMobile) {
        document.querySelector(`[id="${newID}"] textarea`)?.focus();
    }

}