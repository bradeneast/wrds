import { html } from "../libraries/lit-html/lit-html.js";
import { misc } from "../functions/actions.js";

export default () => html`

<button 
data-icon
title="Switch to Content Editor" 
@click=${misc.switchPane.bind(this, 'content_editor')}>
</button>

<button
data-icon
title="Switch to Preview"
@click=${misc.switchPane.bind(this, 'preview')}>
</button>

<button
data-icon
title="Switch to Style Editor"
@click=${misc.switchPane.bind(this, 'style_editor')}>
</button>

`;