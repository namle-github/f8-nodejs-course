const { application } = require("express");

class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('HELLO NAM');
    }
}

module.exports = new NewsController;