require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT || 3000, process.env.HOST || '::', (err) => {
  if (err) throw err;
  console.log(`Server listening on ${app.server.address().port}`);
});
