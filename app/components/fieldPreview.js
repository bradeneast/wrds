import { html } from "../libraries/lit-html/lit-html.js";
import { State } from "../State.js";
import { escapeSelector } from "../functions/utils.js";
import snarkdown from '../libraries/snarkdown/snarkdown.js';

export default (field) => {

    let type = State.now.fieldTypes.find(t => t.id == field?.type?.id);
    let content = document.createElement('div');
    content.innerHTML = snarkdown(field.value);

    if (/<p>/.test(content.innerHTML)) {
        content.innerHTML = content.firstElementChild.innerHTML;
    }

    return html`
    <div class=${escapeSelector(type?.name || '' )}>
        ${content}
    </div>`;

}