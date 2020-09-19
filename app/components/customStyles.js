import { State, globalTypeNames, depthNames } from "../State.js";
import { escapeSelector } from "../functions/utils.js";
import { html } from "../libraries/lit-html/lit-html.js";

export default () => html`

${State.now.fieldTypes.map(type => {
    return `#preview .${escapeSelector(type.name).trim()}` + `{${type.css}}`;
})}

${depthNames.map(depthName => {
    let targetType = State.now.globalTypes.find(t => t.name == depthName);
    return `#preview .${escapeSelector(depthName).trim()}` + `{${targetType?.css}}`;
})}

${Object.keys(globalTypeNames).map(key => {

    let value = globalTypeNames[key];
    let targetType = State.now.globalTypes.find(t => t.name == value);

    return `#preview ${key} {${targetType?.css}}`;
})}
`;