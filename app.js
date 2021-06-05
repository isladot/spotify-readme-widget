// Express app.
const app = require('express')();
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

// Api.
const spotify = require('./api/spotify');

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(compression());
app.use(helmet());

// Api registration.
app.use('/api', spotify);

// 404.
app.get('*', (_, res) => res.status(404).json({ error: 'not found.' }));

module.exports = app;
