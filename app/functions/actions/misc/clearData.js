import { State } from '../../../State.js';
import { renderContentEditor, renderToolbar, renderPreview, renderStyleEditor, renderStyles } from '../../render.js';
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

    renderContentEditor();
    renderToolbar();
    renderPreview();
    renderStyleEditor();
    renderStyles();

    State.now.children.push(new Section());
    renderContentEditor();
    State.hasChanged = true;

}