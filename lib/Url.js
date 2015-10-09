export default class Url {

    constructor(config = {}) {
        this.config = config;
    }

    get new() {
        return `${this.config.base}${this.config.new}`;
    }

}
