import { State } from '../../../State.js';
import { renderAll } from '../../render.js';
import { relinkStringifiedObjects } from '../../utils.js';

export default (event) => {

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onerror = function () { console.error(this.error) }
    reader.onload = function () {
        let parsed = JSON.parse(this.result);
        Object.keys(State).map(key => State[key] = parsed[key]);
        relinkStringifiedObjects();
        renderAll();
    }

    document.body.classList.add('importing');
    reader.readAsText(file);
}