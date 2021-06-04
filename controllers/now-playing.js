const SpotifyClient = require('../client/SpotifyClient');
const { getCardColors, ellipseText } = require('../common/utils');

const getNowPlaying = async (req, res) => {
  const client = new SpotifyClient();
  const { theme } = req.query;

  res.header('Content-Type', 'image/svg+xml');

  try {
    const {
      name,
      artists,
      album: { images },
      external_urls: { spotify }
    } = await client.getNowPlaying();

    const image = await client.getAlbumImage(images[1].url);

    const { wave_color, icon_color, text_color, bg_color } =
      getCardColors(theme);

    res.render('../templates/now-playing-template.ejs', {
      // Track Name.
      trackName: ellipseText(name),
      // Artist Name.
      artistName: ellipseText(artists[0].name),
      // Album Image B64.
      albumCover: image,
      // Track URL.
      trackUrl: spotify,
      // Theme
      waveColor: wave_color,
      iconColor: icon_color,
      textColor: text_color,
      bgColor: bg_color
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = getNowPlaying;
