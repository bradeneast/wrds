import { html } from "../libraries/lit-html/lit-html.js";
import { customTypes } from "../functions/actions.js";
import { State } from "../State.js";
import { renderModal } from "../functions/render.js";
import { FieldType } from "../Classes.js";


export default (type, existing) => {

    if (!type) return '';

    if (type == 'field type') {
        State.now.editing = existing ? State.now.selected.fieldType : new FieldType();
    }

    return html`
    <div class=content>
    
        <div class=heading>
            ${State.now.editing.type} Editor
            <span tabindex=0 data-tooltip=${"This pane is for renaming or editing your " + State.now.editing.type + " ."}>
            </span>
        </div>
    
        <input name=name @input=${customTypes.updateType} type=text placeholder=${"Name your " + State.now.editing.type + '...'} value=${existing ? State.now.editing.name : ''} />
        
            <div class=actions>
        
                <button @click=${existing ? renderModal.bind(this, null) : customTypes.saveNewType.bind(this,
            State.now.editing.type)}>
                    Done
                </button>
        
                ${existing ? html`
                <button class=remove @click=${customTypes.removeType.bind(this, State.now.editing.type)}>
                    Delete ${State.now.editing.type}
                </button>` : ''}
        
                <button class=cancel @click=${renderModal.bind(this, null)}>
                    Cancel
                </button>
        
            </div>
        
        </div>`;
}