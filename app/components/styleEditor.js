import { html } from "../libraries/lit-html/lit-html.js";
import fieldTypeDropdown from "./fieldTypeDropdown.js";
import { styles } from '../functions/actions.js';
import { State, depthNames, globalTypeNames } from "../State.js";
import { renderModal } from "../functions/render.js";

export default () => html`

<div class="heading">
    Style Editor
    <span tabindex="0" data-tooltip="This pane is for editing your document's styles. Apply valid CSS rules to any custom field type or global element."></span>
</div>

<section id=manageFieldTypes>

    <div class=actions>

        <label>Field Styles</label>

        ${fieldTypeDropdown({ global: true })}

        ${State.now.fieldTypes?.length ? html`
        <button 
        data-icon
        title="Edit Field Type"
        @click=${renderModal.bind(this, 'field type', true)}>
        </button>` : ''}

        <button 
        class=add 
        data-icon
        title="New Field Type"
        @click=${renderModal.bind(this, 'field type', false)}>
        </button>
        
    </div>

    <code 
    spellcheck=false
    id=field_type_styles
    class=language-css 
    contenteditable=true 
    @focusout=${styles.formatCSS}
    @keyup=${styles.updateStyles}></code>
    
</section>


<section id=manageGlobalTypes>

    <div class=actions>

        <label>Global Styles</label>

        <select id=global-style-select @input=${styles.updateCurrentGlobalType}>

            <optgroup label=Layout>
            ${depthNames.map(depthName => html`
                <option
                value=${depthName}
                ?selected=${depthName == State.now.selected.globalType?.name}>
                    ${depthName}s
                </option>
            `)}
            </optgroup>

            <optgroup label=Elements>
                ${Object.values(globalTypeNames).map(globalTypeName => html`
                    <option 
                    label=${globalTypeName}
                    value=${globalTypeName}
                    ?selected=${globalTypeName == State.now.selected.globalType?.name}>
                        ${globalTypeName}s
                    </option>
                `)}
            </optgroup>
        </select>

    </div>

    <code
    spellcheck=false
    id=global_type_styles
    class=language-css
    contenteditable=true
    @focusout=${styles.formatCSS}
    @keyup=${styles.updateStyles}></code>

</section>
`;