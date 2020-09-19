import { random } from "./functions/utils.js";

// Classes
class Section {
    constructor(depth = 0) {
        this.id = random();
        this.depth = depth;
        this.text = '';
        this.html = '';
        this.children = [];
        this.fields = [];
    }
}

class Field {
    constructor() {
        this.id = random();
        this.value = '';
        this.type = 0;
    }
}

class GlobalType {
    constructor(name) {
        this.id = random();
        this.name = name;
        this.css = '';
    }
}

class Custom {
    constructor(name) {
        this.id = random();
        this.name = name;
    }
}

class FieldType extends Custom {
    constructor(name) {
        super(name);
        this.type = 'field type';
        this.css = '';
    }
}

class Template extends Custom {
    constructor(name) {
        super(name);
        this.type = 'template';
        this.fieldTypes = [];
        this.globalTypes = [];
    }
}

export {
    Section,
    Field,
    FieldType,
    Template,
    GlobalType,
}