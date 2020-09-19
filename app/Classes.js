import { random } from "./functions/utils.js";

/**@module Classes */

/**Represents a chapter, section, or block in the Content Editor*/
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

/**Represents a specific field in the Content Editor*/
class Field {
    constructor() {
        this.id = random();
        this.value = '';
        this.type = 0;
    }
}

/**Represents a global CSS ruleset in the Style Editor*/
class GlobalType {
    constructor(name) {
        this.id = random();
        this.name = name;
        this.css = '';
    }
}

/**Represents a Custom Object (Template | Field Type)*/
class Custom {
    constructor(name) {
        this.id = random();
        this.name = name;
    }
}

/**Represents a custom CSS ruleset*/
class FieldType extends Custom {
    constructor(name) {
        super(name);
        this.type = 'field type';
        this.css = '';
    }
}

/**Represents a custom set of Field Types and Global Types*/
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