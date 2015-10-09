import phantom from 'phantom';

const SUCCESS = 'success';

export default class Visitor {

    static create() {
        return new Promise((resolve, reject) => {
            phantom.create(function(ph) {
                if (ph) {
                    resolve(ph);
                } else {
                    reject(new Error('Cannot get ph.'));
                }
            });
        });
    }

    static createPage(ph) {
        return new Promise((resolve, reject) => {
            ph.createPage(function(page) {
                if (page) {
                    resolve(page);
                } else {
                    reject(new Error('Cannot get page.'));
                }
            });
        });
    }

    static open(page, url) {
        return new Promise((resolve, reject) => {
            console.log(`Opening: ${url}`);
            page.open(url, function(status) {
                console.log(`Finished opening: ${url}`);
                if (status === SUCCESS) {
                    resolve(page);
                } else {
                    reject(`Visiting ${url} failed, status: ${status}`);
                }
            });
        });
    }

    static getContent(page) {
        return new Promise((resolve, reject) => {
            page.evaluate(() => {
                return document;
            }, (result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject('Cannot get document.');
                }
            });
        });
    }

}
