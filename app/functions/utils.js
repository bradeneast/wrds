import { State } from "../State.js";
import { renderContentEditor, renderPreview } from "./render.js";


/**Shortcut for `getElementByID`
 * @param {string}id
 */
export let $ = id => document.getElementById(id);


/**Gets the id of the closest `section` element
 * @param {HTMLElement}elem - The DOM element to start from (uses the `closest()` method)
 */
export let getSectionID = elem => parseInt(elem.closest('section').id);


/**Gets the id of the closest `field` element
 * @param {HTMLElement}elem - The DOM element to start from (uses the `closest()` method)
 */
export let getFieldID = elem => parseInt(elem.closest('.field').id);


/**Generates a pseudo-random number */
export let random = () => Math.round(new Date().getTime() * Math.random());


/**Converts a pixel value into a REM value */
export let REM = () => parseFloat(
    getComputedStyle(document.documentElement)
        .fontSize.replace('px', '')
);


/**Shortcut for `addEventListener`
 * @param {object}options
 * @param {function}options.perform - the callback to run when the event is fired
 * @param {any[string]|string}options.when - the event(s) to listen for when
 * @param {any[HTMLElement]|HTMLElement}options.on - the DOM element to which the event listener is added
 */
export function listen({
    perform,
    when = 'click',
    on = document.documentElement,
}) {
    when = Array.isArray(when) ? when : [when];
    on = Array.isArray(on) ? on : [on];
    for (let event of when)
        for (let elem of on)
            elem.addEventListener(event, perform);
}


/**Replaces non-alphanumeric characters in a string with dashes
 * @param {string}string
 */
export let dashify = string => string.replace(/\W+|[-_]/g, '-');


/**Generator function that yields a section and its parent
 * @generator
 * @param {Object[]} sections - The sections to iterate over
 * @param {string} sections[].children - The children of a section
 * @param {object}parent - The parent of the sections at the current depth
 */
export function* walkSections(sections, parent) {
    for (let section of sections) {
        yield { section, parent }
        if (section.children) {
            yield* walkSections(section.children, section);
        }
    }
}


/**Searches all current sections in the State for a section with the matching ID
 * @param {number}id
 */
export function findByID(id) {
    let match;
    for (let { section, parent } of walkSections(State.now.children))
        if (section.id == id) {
            match = section;
            break;
        }
    return match;
}


/**Gets the depth of an element's section in the Content Editor tree
 * @param {HTMLElement}elem - The DOM element to start from (uses the `closest()` method)
 */
export function getSectionDepth(elem) {
    let section = elem.closest('section');
    let depth = section.getAttribute('data-section-depth');
    return parseInt(depth);
}


// THESE UTILITY FUNCTIONS HAVE SIDE EFFECTS

/**Moves a field or section up in the Content Editor and updates the UI
 * @param {object}parentObject - The parent of the current field or section
 * @param {string}key - The key used to access the children of the parent object
 * @param {number}index - The index of the child object being moved
 */
export function moveUp(parentObject, key, index) {

    let arr = parentObject[key] || [];
    let targetObject = arr[index];

    arr.splice(index, 1);
    arr.splice(index - 1, 0, targetObject);

    renderContentEditor();
    renderPreview();

    State.hasChanged = true;
    document.activeElement.blur();
    document.querySelector(`[id="${targetObject.id}"] .moveUp`)?.focus();
}


/**Moves a field or section down in the Content Editor and updates the UI
 * @param {object}parentObject - The parent of the current field or section
 * @param {string}key - The key used to access the children of the parent object
 * @param {number}index - The index of the child object being moved
 */
export function moveDown(parentObject, key, index) {

    let arr = parentObject[key] || [];
    let targetObject = arr[index];

    arr.splice(index, 1);
    arr.splice(index + 1, 0, targetObject);

    renderContentEditor();
    renderPreview();

    State.hasChanged = true;
    document.activeElement.blur();
    document.querySelector(`[id="${targetObject.id}"] .moveDown`)?.focus();
}


/**Serializes `JSON.stringified()` data back into the current State*/
export function relinkStringifiedObjects() {
    State.now.fieldTypes = State.now.selected.template.fieldTypes || [];
    State.now.globalTypes = State.now.selected.template.globalTypes || State.now.globalTypes;

    State.now.selected.fieldType = State.now.fieldTypes?.[0] || {};
    State.now.selected.globalType = State.now.globalTypes?.[0] || {};

    for (let { section, parent } of walkSections(State.now.children)) {
        if (!section.fields.length)
            continue;
        section.fields
            .map(field => {
                field.type = State.now.fieldTypes.find(t => t.id == field.type?.id) || State.now.fieldTypes?.[0];
            });
    }
}