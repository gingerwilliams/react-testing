const express = require('express');

const app = express();

app.set('view engine', 'jsx');

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index');
});

app.listen('3000', console.log('Express listening on port 3000...'))