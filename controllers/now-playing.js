const { response } = require('express');
const SpotifyClient = require('../client/SpotifyClient');

const getNowPlaying = async (req, res) => {
  const client = new SpotifyClient();
  const { theme, title_color, icon_color, text_color, bg_color } = req.query;

  res.header('Content-Type', 'image/svg+xml');

  try {
    const {
      name,
      artists,
      album: { images },
      external_urls: { spotify }
    } = await client.getNowPlaying();

    const image = await client.getAlbumImage(images[1].url);

    res.render('../templates/now-playing-template.ejs', {
      // Track Name.
      trackName: name,
      // Artist Name.
      artistName: artists[0].name,
      // Album Image B64.
      albumCover: image,
      // Track URL.
      trackUrl: spotify
      // Text Color.
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = getNowPlaying;
