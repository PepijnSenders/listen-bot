import fs from 'fs';

export default class Ingredient {

    constructor(name) {
        this.name = name;
    }

    get filePath() {
        return `./ingredients/${this.name}.json`;
    }

    get file() {
        return fs.readFileSync(this.filePath).toString();
    }

    fetch() {
        if (fs.existsSync(this.filePath)) {
            return JSON.parse(this.file);
        } else {
            throw new Error(`${this.filePath} doesn't exist.`);
        }
    }
}
