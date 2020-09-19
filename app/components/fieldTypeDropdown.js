import { html } from "../libraries/lit-html/lit-html.js";
import { State } from "../State.js";
import { styles, fields } from "../functions/actions.js";


export default ({ global = false, field = {} } = {}) => {

    if (!State.now.fieldTypes?.length) return;

    let selectedID = global ? State.now.selected.fieldType?.id : field?.type?.id;

    return html`
    <select name=type @input=${global ? styles.updateCurrentFieldType : fields.updateFieldType}>

        ${State.now.fieldTypes.map(f => html`
            <option value=${f.id} ?selected=${f.id == selectedID}>
                ${f.name}
            </option>
        `)}

    </select>`;
}