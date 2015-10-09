import Visitor from './Visitor';
import Url from './Url';
import Parser from './Parser';
import Post from './Post';

export default class Bot {
    constructor(config) {
        this.config = config;
    }

    getNewPosts() {
        var url = new Url(this.config.url);
        var post = new Post(this.config.post);

        return Visitor.create()
            .then((ph) => {
                return Visitor.createPage(ph);
            })
            .then((page) => {
                return Visitor.open(page, url.new);
            })
            .then(function(page) {
                return Visitor.getContent(page);
            })
            .then(function(document) {
                console.log('Loaded document');
                var parser = new Parser(document);

                console.log(parser.getSections(post.identifier).text());
            })
            .catch((e) => {
                throw new Error(e.message);
            });
    }
}
