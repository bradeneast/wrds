import { depthNames, globalTypeNames, State } from '../../../State.js';
import { renderAll, renderContentEditor } from '../../render.js';
import { GlobalType, Section } from '../../../Classes.js';


export default (e) => {

    State.now.children = [new Section()];
    State.now.fieldTypes = [];
    State.now.globalTypes = depthNames
        .map(depthName => new GlobalType(depthName))
        .concat(Object
            .values(globalTypeNames)
            .map(globalTypeName => new GlobalType(globalTypeName))
        );
    State.now.editing = {};
    State.now.selected = {
        fieldType: {},
        globalType: {},
        template: {},
    };
    State.templates = [];

    renderAll();
    State.hasChanged = true;
}