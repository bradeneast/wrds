import { html } from "../libraries/lit-html/lit-html.js";
import { sections, fields } from "../functions/actions.js";
import { State, depthNames } from "../State.js";
import fieldEditor from "./fieldEditor.js";
import { moveDown, moveUp } from "../functions/utils.js";

export default function contentEditor(section, parent, index) {

    let count = State.now.children.length;
    let depth = section.depth;
    let maxDepth = depth == depthNames.length - 1;

    return html`
    <section 
    id=${section.id} 
    data-section-depth=${section.depth}>

        <div class=fields>
            ${section.fields.map((f, i) => fieldEditor(f, section, i))}
        </div>

        <textarea 
        id="${section.id}-text"
        placeholder=${"Write something for this " + depthNames[depth].toLowerCase() + "..."} 
        @input=${sections.updateSection} 
        .value=${section.text}>
        </textarea>

        <div class=actions>

            <button 
            data-icon=add_another
            title=${"Add " + depthNames[depth]}
            @click=${sections.addSiblingSection}>
            </button>

            ${maxDepth ? '' : html`
            <button 
            data-icon=add_sub
            title=${"Add " + depthNames[depth + 1]}
            @click=${sections.addChildSection}>
            </button>`}

            <button 
            class=add
            data-icon
            title="Add Field"
            @click=${fields.addField}>
            </button>

            ${count > 1 || depth ? html`
            <button 
            class=remove
            @click=${sections.removeSection}>
            Remove
            </button>` : ''}

            ${parent.children.length > 1 ? html`

            <button 
            class="move moveDown" 
            data-icon
            title="Move Down"
            ?disabled=${index >= parent.children.length - 1} 
            @click=${moveDown.bind(this, parent, 'children', index)}>
            </button>

            <button 
            class="move moveUp"
            data-icon
            title="Move Up"
            ?disabled=${!index} 
            @click=${moveUp.bind(this, parent, 'children', index)}>
            </button>
            
            ` : ''}

        </div>

        ${section.children.length ? section.children.map((s, i) => contentEditor(s, section, i)) : ''}

    </section>`
};