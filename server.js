// Express app.
const app = require('express')();
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

// Api.
const spotify = require('./api/spotify');

app.use(logger('dev'));
app.use(compression());
app.use(helmet());

// Api registration.
app.use('/', spotify);

const port = 8000;
app.listen(port, () => {
  console.log(`Express listening on port: ${port}`);
});
