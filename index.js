const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const articles = [{title: 'Example'}, {title: 'Example2'}, {title: 'Example3'}];

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/articles', (req, res, next) => {
    // res.send(` Articles all: ${articles.length}`);
    res.send(articles);
});

app.post('/articles', (req, res, next) => {
    const article = {title: req.body.title};
    articles.push(article);
    res.send(article);
});

app.get('/articles/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('Fetching: ', id);
    res.send(articles[id]);
});

app.delete('/articles/:id', (req, res) => {
    const id = req.params.id;
    console.log('Deleting:', id);
    delete articles[id];
    res.send({message: 'Deleted'});
});


app.listen(app.get('port'), () => {
    console.log(`Express web app available at http://localhost:${app.get('port')}`);
});

module.exports = app;