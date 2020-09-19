import { renderPreview } from '../../render.js';
import { findByID, getSectionID } from '../../utils.js';
import { State } from '../../../State.js';


export default (e) => {

    let id = getSectionID(e.target);
    let updatedSection = findByID(id);

    updatedSection.text = e.target.value;

    State.hasChanged = true;
    renderPreview();
}