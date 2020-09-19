import { State, globalTypeNames, depthNames } from "../State.js";
import { dashify } from "../functions/utils.js";
import { html } from "../libraries/lit-html/lit-html.js";

export default () => html`

${State.now.fieldTypes.map(type => {
return `#preview .${dashify(type.name).trim()}` + `{${type.css}}`;
})}

${depthNames.map(depthName => {
let targetType = State.now.globalTypes.find(t => t.name == depthName);
return `#preview .${dashify(depthName).trim()}` + `{${targetType?.css}}`;
})}

${Object.keys(globalTypeNames).map(key => {

let value = globalTypeNames[key];
let targetType = State.now.globalTypes.find(t => t.name == value);

return `#preview ${key} {${targetType?.css}}`;
})}
`;