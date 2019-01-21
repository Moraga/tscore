import express from 'express';

import { PageBackend } from './components/page/backend';
import { ArticleBackend } from './components/article/backend';


let ac = new ArticleBackend();

let page = new PageBackend();

let response = '';


page.init(ac).then(a => {
    page.render().then(success => {
        response = success;
        console.log(response);
    })
});


const app = express();

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
    res.end(response);
});

app.listen(8080, () => {
    console.log('testing');
});
