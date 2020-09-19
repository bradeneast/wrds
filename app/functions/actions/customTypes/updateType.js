import { State } from "../../../State.js";
import { renderContentEditor, renderStyleEditor, renderToolbar, renderStyles } from "../../render.js";

export default (e) => {

    State.now.editing[e.target.name] = e.target.value;

    if (State.now.editing?.type == 'template') {

        State.templates.map((template, i) => {

            let temp = JSON.parse(template);
            let isSelected = temp.id == State.now.editing.id;

            if (isSelected) {
                State.templates.splice(i, 1, JSON.stringify(State.now.editing));
            }

        })

    }

    State.hasChanged = true;

    renderContentEditor();
    renderToolbar();
    renderStyleEditor();
    renderStyles();
}