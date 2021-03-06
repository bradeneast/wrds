import { renderAll } from './functions/render.js';
import { State, options } from './State.js';
import Save from './Save.js';
import { relinkStringifiedObjects } from './functions/utils.js';
import { Section } from './Classes.js';

if (State.isNewUser && !State.now.children.length) {
    State.now.children.push(new Section());
    Save(true);
}

relinkStringifiedObjects();
renderAll();

setInterval(Save, options.saveInterval);

document.body.classList.remove('loading');
State.isMobile = innerWidth < options.mobileBreakpoint;

for (let icon of document.querySelectorAll('[data-icon]')) {
    icon.setAttribute('aria-hidden', true);
}