import { State } from '../../../State.js';
import { relinkStringifiedObjects } from '../../utils.js';
import { renderContentEditor, renderToolbar, renderPreview, renderStyleEditor, renderStyles } from '../../render.js';

export default (event) => {

    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onerror = function () { console.error(this.error) }
    reader.onload = function () {
        let parsed = JSON.parse(this.result);
        Object.keys(State).map(key => State[key] = parsed[key]);
        relinkStringifiedObjects();
        renderContentEditor();
        renderToolbar();
        renderPreview();
        renderStyleEditor();
        renderStyles();
    }

    document.body.classList.add('importing');
    reader.readAsText(file);
}