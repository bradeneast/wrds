import { html } from '../libraries/lit-html/lit-html.js';
import { State } from '../State.js';
import NavigateHistory from '../NavigateHistory.js';
import { misc } from '../functions/actions.js';

export default () => {

    let settings = State.settings;

    return html`
    <!-- Undo/Redo -->
    <div class=configuration id=undo_redo>
        <button data-icon title=Undo ?disabled=${State.nowIndex==0} @click=${NavigateHistory.bind(this, -1)}>
        </button>
        <button data-icon title=Redo ?disabled=${State.nowIndex>= State.history.length - 1}
            @click=${NavigateHistory.bind(this, 1)}>
        </button>
    </div>
    
    <!-- Zoom -->
    <div class=configuration id=zoom>
        <button data-icon title="Zoom Out" @click=${misc.zoom.bind(this, 'out' )}>
        </button>
        <button data-icon title="Zoom In" @click=${misc.zoom.bind(this, 'in' )}>
        </button>
        <label>${'(' + Math.round(settings.zoom * 100) + '%)'}</label>
    </div>
    
    <!-- Toggle Dark Mode -->
    <div class=configuration>
        <button data-icon title=${"You're in " + (settings.darkMode ? 'Dark' : 'Light') + " Mode"}
            ?aria-pressed=${settings.darkMode} @click=${misc.toggleDarkMode} id=dark_mode_toggle>
        </button>
    </div>
    
    <!-- Toggle Advanced UI -->
    <div class=configuration id=advancedUI_toggle>
        <button data-icon id="advanced_toggle" ?aria-pressed=${settings.advancedUI} title=${(settings.advancedUI ? 'Disable'
            : 'Enable' ) + " Advanced UI" } @click=${misc.toggleAdvancedUI}>
        </button>
    </div>
    
    <!-- Print Document -->
    <div class=configuration id=printDocument>
        <button data-icon title=Print @click=${misc.printDocument}>
        </button>
    </div>
    
    <!-- Import and Export Data -->
    <div class=configuration id=import_export>
        <input aria-hidden="true" id=importData type=file accept=.json @input=${misc.importData}>
        <label data-icon title="Import Data" class="fileInput secondary" for=importData>
        </label>
        <a class="button primary" data-icon title="Export Data" id=exportData .href=${State?.forExport} download=${`My Data
            (${new Date(State.lastSaved).toLocaleDateString()}).json`}>
        </a>
        <!-- Clear Data -->
        <button data-icon title="Clear Data" class=destructive @click=${misc.clearData}>
        </button>
    </div>
    
    <!-- Last Saved -->
    <div class=configuration id=savedIndicator>
        Saved: ${new Date(State?.lastSaved || '').toLocaleTimeString('en-us', { timeStyle: 'short' })}
    </div>`;
}