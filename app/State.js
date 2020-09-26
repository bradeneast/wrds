import { GlobalType } from './Classes.js';
import { $ } from './functions/utils.js';

// Variables
const depthNames = ['Chapter', 'Section', 'Block'];
const globalTypeNames = {
    h1: 'Lvl 1 Heading',
    h2: 'Lvl 2 Heading',
    h3: 'Lvl 3 Heading',
    h4: 'Lvl 4 Heading',
    h5: 'Lvl 5 Heading',
    h6: 'Lvl 6 Heading',
    hr: 'Horizontal Rules',
    p: 'Paragraph',
    blockquote: 'Block Quote',
    ul: 'Unordered List',
    ol: 'Ordered List',
    li: 'List Item',
    a: 'Link',
    strong: 'Bolded Text',
    em: 'Italic Text',
    code: 'Code',
    img: 'Image',
};

const DOM = {
    previewPane: $('preview'),
    toolbar: $('toolbar'),
    contentEditorPane: $('content_editor'),
    styleEditorPane: $('style_editor'),
    modal: $('modal'),
    customStyles: $('custom_styles'),
    walkThroughDialogue: $('walkthrough_dialogue'),
    mobileNav: $('mobile_nav'),
};
const options = {
    throttle: 60,
    mobileBreakpoint: 960,
    saveInterval: 2000,
    zoom: {
        min: .5,
        max: 2,
        interval: .1,
    }
}


// Recover Saved Data
let recoveredState;
try {
    recoveredState = JSON.parse(localStorage.getItem('State'));
} catch (e) {
    console.log("No previous data found.");
}

// State
const State = recoveredState || {
    now: {
        children: [],
        fieldTypes: [],
        globalTypes: depthNames
            .map(depthName => new GlobalType(depthName))
            .concat(Object
                .values(globalTypeNames)
                .map(globalTypeName => new GlobalType(globalTypeName))
            ),
        selected: {
            fieldType: {},
            globalType: {},
        },
        editing: {},
    },
    nowIndex: 0,
    settings: {
        zoom: 1,
        darkMode: false,
        advancedUI: false,
        messagesShown: false,
    },
    walkthroughIndex: 0,
    history: [],
    hasChanged: false,
    isNewUser: true,
    isMobile: innerWidth <= options.mobileBreakpoint,
    lastSaved: new Date(),
    forExport: '',
};


export {
    depthNames,
    globalTypeNames,
    options,
    DOM,
    State,
}