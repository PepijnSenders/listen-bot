import jQuery from 'jquery';

export default class Parser {

    constructor(document) {
        this.document = document;
    }

    getSections(section) {
        console.log(jQuery);
        return jQuery(this.document).find(section);
    }

}
