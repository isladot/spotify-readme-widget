const router = require('express').Router();

// Spotify controller.
const spotify = require('../controller/spotify');

router.get('/spotify', (req, res) => {
  res.json(spotify());
});

module.exports = router;
