import { State } from "./State.js";
import { renderToolbar } from "./functions/render.js";

/** @module Save */
/**Asynchronously save the current State object to `localStorage`
 * @param {boolean}force - save even if `State` hasn't changed
*/
export default async function Save(force = false) {

    if (!State.hasChanged && !force) return;

    // Write to localStorage
    localStorage.setItem('State', JSON.stringify(State));

    // Prepare export data
    let json = JSON.stringify(State, (key, value) => {
        if (key == 'history') return [];
        else if (key == 'settings') return {};
        else return value;
    });

    // Push state to history
    State.history.push(JSON.stringify(State.now));
    State.nowIndex = State.history.length - 1;
    if (State.history.length > 250)
        State.history.splice(0, 1);

    // Update last saved
    State.hasChanged = false;
    State.lastSaved = new Date().getTime();
    State.forExport = URL.createObjectURL(
        new Blob([json], { type: 'application/json' })
    );

    renderToolbar();
}