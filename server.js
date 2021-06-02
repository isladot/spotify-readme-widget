// Express app.
const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

// Api.
const spotify = require('./api/spotify');

const app = express();
const port = 8000;

app.use(logger('dev'));
app.use(compression());
app.use(helmet());

// Api registration.
app.use('/', spotify);

app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
