const router = require('express').Router();

// Spotify controller.
const controller = require('../controller/spotify');

router.get('/spotify', (req, res) => {
  res.json(controller());
});

module.exports = router;
