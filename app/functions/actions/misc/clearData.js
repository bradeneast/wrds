import { State } from '../../../State.js';
import { renderAll } from '../../render.js';
import { Section } from '../../../Classes.js';

export default (e) => {

    State.now.children = [];
    State.now.fieldTypes = [];
    State.now.editing = {};
    State.now.selected = {
        fieldType: {},
        globalType: {},
        template: {},
    };
    State.templates = [];
    State.settings = {
        zoom: 1,
        darkMode: false,
        advancedUI: false
    };

    renderAll();
    State.now.children.push(new Section());
    renderContentEditor();
    State.hasChanged = true;

}