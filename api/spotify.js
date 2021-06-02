const router = require('express').Router();

router.get('/spotify', (req, res) => {
  res.send('Hello World.');
});

module.exports = router;
