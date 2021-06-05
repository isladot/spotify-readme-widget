const SpotifyClient = require('../client/SpotifyClient');
const { getCardColors, ellipseText } = require('../common/utils');

const getNowPlaying = async (req, res) => {
  const client = new SpotifyClient();
  const { theme } = req.query;

  res.header('Content-Type', 'image/svg+xml');

  const { wave_color, icon_color, text_color, bg_color } = getCardColors(theme);

  try {
    const { name, artists, album, external_urls } =
      await client.getNowPlaying();

    if (name !== undefined) {
      const image = await client.getAlbumImage(album.images[1].url);

      res.render('../templates/now-playing-template.ejs', {
        // Track Name.
        trackName: ellipseText(name),
        // Artist Name.
        artistName: ellipseText(artists[0].name),
        // Album Image B64.
        albumCover: image,
        // Track URL.
        trackUrl: external_urls.spotify,
        // Theme
        waveColor: wave_color,
        iconColor: icon_color,
        textColor: text_color,
        bgColor: bg_color
      });
    } else {
      res.render('../templates/no-playing-template.ejs', {
        // Theme
        iconColor: icon_color,
        textColor: text_color,
        bgColor: bg_color
      });
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = getNowPlaying;
