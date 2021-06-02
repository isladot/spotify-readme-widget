const router = require('express').Router();

// Spotify controllers.
const nowPlayingController = require('../controllers/now-playing');

router.get('/spotify/now', nowPlayingController);

module.exports = router;
