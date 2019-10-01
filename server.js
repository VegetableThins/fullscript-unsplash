global.fetch = require('node-fetch');
const config = require("universal-config");
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

const unsplash = new Unsplash({
    applicationId: config.get('APPLICATION_ID'),
    secret: config.get('SECRET'),
    callbackUrl: config.get('CALLBACK_URL')
});

const app = express();

app.get('/api/photos/random', (req, res) => {
    unsplash.photos
    .getRandomPhoto({
        count: req.query.count,
        orientation: req.query.orientation || ''
    })
    .then(toJson)
    .then(json => res.json(json));
});

app.get('/api/stats/total', (req, res) => {
    unsplash.stats
            .total()
            .then(toJson)
            .then(json => res.json(json));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));