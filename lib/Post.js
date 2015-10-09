export default class Post {

    constructor(config = {}) {
        this.config = config;
    }

    get identifier() {
        return this.config.identifier;
    }

}
