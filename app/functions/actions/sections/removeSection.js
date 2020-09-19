import { State, depthNames } from '../../../State.js';
import { renderContentEditor, renderPreview } from '../../render.js';
import { walkSections, getSectionID } from '../../utils.js';


export default (e) => {

    let id = getSectionID(e.target);

    for (let { section, parent } of walkSections(State.now.children, State.now)) {
        if (section.id != id) continue;
        parent.children = parent.children.filter(s => s != section);
    }

    State.hasChanged = true;
    renderPreview();
    renderContentEditor();
}