import { html } from "../libraries/lit-html/lit-html.js";
import { State } from "../State.js";
import { dashify } from "../functions/utils.js";
import markdown from '../libraries/tiny-markdown/tiny-markdown.js';

export default (field) => {

    let type = State.now.fieldTypes.find(t => t.id == field?.type?.id);
    let content = document.createElement('div');
    content.innerHTML = markdown(field.value);

    if (/<p>/.test(content.innerHTML)) {
        content.innerHTML = content.firstElementChild.innerHTML;
    }

    return html`
    <div class=${dashify(type?.name || '' )}>
        ${content}
    </div>`;

}