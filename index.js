require('dotenv').config();
const app = require('./app');

const PORT = 8000;

app.listen(PORT, () =>
  console.log(`Express server listening on port: ${PORT}`)
);
