import { State } from "../State.js";
import { renderContentEditor, renderPreview } from "./render.js";


export let $ = id => document.getElementById(id);


export function listen({
    perform,
    when = ['click'],
    on = [document.documentElement],
}) {
    for (let event of when) {
        for (let elem of on) {
            elem.addEventListener(event, perform)
        }
    }
}


export function REM() {
    return parseInt(
        getComputedStyle(document.documentElement).fontSize.replace('px', '')
    )
}


export function random() {
    return Math.round(new Date().getTime() * Math.random())
}


export function escapeSelector(string = '') {
    return string.replace(/\W+|[-_]/g, '-');
}


export function* walkSections(sections, parent) {
    for (let section of sections) {
        yield { section, parent }
        if (section.children) {
            yield* walkSections(section.children, section);
        }
    }
}


export function getSectionID(elem) {
    let section = elem.closest('section');
    return parseInt(section.id);
}


export function getFieldID(elem) {
    let field = elem.closest('.field');
    return parseInt(field.id);
}


export function findByID(id) {

    let match;

    for (let { section, parent } of walkSections(State.now.children)) {
        if (section.id == id) {
            match = section;
            break;
        }
    }

    return match;
}


export function getSectionDepth(elem) {

    let section = elem.closest('section');
    let depth = section.getAttribute('data-section-depth');

    return parseInt(depth);
}


// THESE UTILITY FUNCTIONS HAVE SIDE EFFECTS

export function moveUp(parentObject, lookupChildren, index) {

    let arr = parentObject[lookupChildren] || [];
    let targetObject = arr[index];

    arr.splice(index, 1);
    arr.splice(index - 1, 0, targetObject);

    renderContentEditor();
    renderPreview();

    State.hasChanged = true;
    document.activeElement.blur();

    try {
        document.querySelector(`[id="${targetObject.id}"] .moveUp`)?.focus();
    } catch (e) { }

}


export function moveDown(parentObject, lookupChildren, index) {

    let arr = parentObject[lookupChildren] || [];
    let targetObject = arr[index];

    arr.splice(index, 1);
    arr.splice(index + 1, 0, targetObject);

    renderContentEditor();
    renderPreview();

    State.hasChanged = true;
    document.activeElement.blur();

    try {
        document.querySelector(`[id="${targetObject.id}"] .moveDown`)?.focus();
    } catch (e) { }

}


export function relinkStringifiedObjects() {

    State.now.fieldTypes = State.now.selected.template.fieldTypes || [];
    State.now.globalTypes = State.now.selected.template.globalTypes || State.now.globalTypes;

    State.now.selected.fieldType = State.now.fieldTypes?.[0] || {};
    State.now.selected.globalType = State.now.globalTypes?.[0] || {};

    for (let { section, parent } of walkSections(State.now.children)) {

        if (!section.fields.length) continue;

        section.fields.map(
            field => {
                field.type = State.now.fieldTypes.find(t => t.id == field.type?.id) || State.now.fieldTypes?.[0];
            }
        );

    }
}