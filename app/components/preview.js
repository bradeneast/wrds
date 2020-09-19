import { html } from "../libraries/lit-html/lit-html.js";
import snarkdown from '../libraries/snarkdown/snarkdown.js';
import fieldPreview from "./fieldPreview.js";
import { depthNames } from "../State.js";

export default function preview(section) {

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = snarkdown(section.text);

    return html`
    <section class=${depthNames[section.depth]}>
    
        ${section.fields.map(field => fieldPreview(field))}
    
        ${section.text.length ? content : ''}
    
        ${section.children.map(s => preview(s))}
    
    </section>`
}