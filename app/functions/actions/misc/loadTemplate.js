import { State } from "../../../State.js";
import { renderStyleEditor, renderStyles, renderToolbar, renderContentEditor, renderPreview } from "../../render.js";
import { relinkStringifiedObjects } from "../../utils.js";

export default (e) => {
    if (!confirm('Are you sure you want to load this template?')) return;

    for (let template of State.templates) {

        let temp = JSON.parse(template);

        if (temp.id == e.target.value) {
            State.now.selected.template = temp;
            relinkStringifiedObjects();
            renderContentEditor();
            renderToolbar();
            renderPreview();
            renderStyleEditor();
            renderStyles();

            State.hasChanged = true;
            break;
        }
    }
}