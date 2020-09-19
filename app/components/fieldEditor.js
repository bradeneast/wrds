import { html } from "../libraries/lit-html/lit-html.js";
import { fields } from "../functions/actions.js";
import fieldTypeDropdown from './fieldTypeDropdown.js';
import { moveDown, moveUp } from "../functions/utils.js";

export default (field, section, index) => html`
<div 
class=field 
id=${field.id}>

    <input 
    placeholder="Field value..."
    type=text 
    .value=${field.value} 
    @input=${fields.updateFieldValue} />

    ${fieldTypeDropdown({ field: field })}

    <button 
    @click=${fields.removeField} 
    class=remove>
        Remove
    </button>

    <button
    data-icon
    @click=${moveDown.bind(this, section, "fields", index)}
    ?disabled=${index >= section.fields.length - 1}
    class="move moveDown">
    </button>

    <button
    data-icon
    @click=${moveUp.bind(this, section, "fields", index)}
    ?disabled=${!index} 
    class="move moveUp">
    </button>

</div>`;