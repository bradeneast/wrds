import { State } from "./State.js";
import { renderToolbar } from "./functions/render.js";
import { $ } from "./functions/utils.js";

/** @module Save */
/**Asynchronously save the current State object to `localStorage`
 * @param {boolean}force - save even if `State` hasn't changed
*/
export default async function Save(force = false) {

    if (!State.hasChanged && !force) return;

    // Relink templates
    State.templates.map((template, i) => {
        let temp = JSON.parse(template);
        let isSelected = temp.id == State.now.selected.template.id;
        if (isSelected) {
            State.templates.splice(i, 1, JSON.stringify(State.now.selected.template));
        }
    })

    // Write to localStorage
    localStorage.setItem('State', JSON.stringify(State));

    // Push state to history
    State.history.push(JSON.stringify(State.now));
    State.nowIndex = State.history.length - 1;
    if (State.history.length > 250) State.history.splice(0, 1);

    // Update last saved
    State.hasChanged = false;
    State.lastSaved = new Date().getTime();

    $('savedIndicator').classList.add('paused');
    setTimeout(() => $('savedIndicator').classList.remove('paused'), 100);

    // Prepare export data
    let json = JSON.stringify(State, (key, value) =>
        key == 'history' ? [] : value
    );
    let data = new Blob([json], { type: 'application/json' });
    let jsonFile = URL.createObjectURL(data);

    State.forExport = jsonFile;
    renderToolbar();
}