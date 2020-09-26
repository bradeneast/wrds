import { render, html } from "../libraries/lit-html/lit-html.js";
import { State, DOM } from "../State.js";
import {
    contentEditor,
    preview,
    styleEditor,
    customStyles,
    toolbar,
    modalDialogue,
    mobileNav
} from '../components/_components.js';
import styles from "./actions/styles.js";


export async function renderAll() {
    renderContentEditor();
    renderToolbar();
    renderPreview();
    renderStyleEditor();
    renderStyles();
}


export async function renderPreview() {
    render(
        html`
        <div class=content>
            ${State.now.children.map(section => preview(section))}
        </div>`,
        DOM.previewPane
    );
}


export async function renderToolbar() {

    let root = document.documentElement;
    root.classList.toggle('dark_mode', State.settings.darkMode);
    root.classList.toggle('advanced', State.settings.advancedUI);

    render(
        toolbar(),
        DOM.toolbar
    );
}


export function renderStyles() {
    render(
        customStyles(),
        DOM.customStyles
    );
}


export function renderModal(type, existing = false) {

    DOM.modal.classList.toggle('open', type);

    render(
        modalDialogue(type, existing),
        DOM.modal
    );

    if (type) try {
        DOM.modal.querySelector('input').focus();
    } catch (e) { }

    if (!type) {
        State.now.editing = {};
        renderToolbar();
        renderStyleEditor();
        renderPreview();
    }
}


export function renderStyleEditor() {

    render(styleEditor(), DOM.styleEditorPane);

    for (let code of DOM.styleEditorPane.querySelectorAll('code')) {
        code.innerHTML = '';
        if (code.id.includes('field'))
            code.innerText = State.now.selected.fieldType?.css || '';
        if (code.id.includes('global'))
            code.innerText = State.now.selected.globalType?.css || '';
        styles?.formatCSS({ target: code });
    }
}


export function renderContentEditor() {
    render(
        html`
        <div class=heading>
            Content Editor
            <span tabindex=0
                data-tooltip="This pane is for editing the content of your document. Try nesting content blocks or adding custom fields to a section."></span>
        </div>
        
        ${State.now.children.map((section, index) =>
        contentEditor(section, State.now, index)
        )}
        `,
        DOM.contentEditorPane
    );
}


export function renderMobileNav() {
    render(
        mobileNav(),
        DOM.mobileNav
    )
}