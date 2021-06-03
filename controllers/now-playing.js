const SpotifyClient = require('../client/spotify-client');

const getNowPlaying = async (_, res) => {
  const client = new SpotifyClient();

  const response = await client.getNowPlaying();

  const {
    name,
    artists,
    album: { images },
    external_urls: { spotify }
  } = response.data.item;

  const image = await client.getAlbumImage(images[1].url);

  res.render('../templates/now-playing-template.ejs', {
    trackName: name,
    artistName: artists[0].name,
    albumCover: image,
    trackUrl: spotify
  });
};

module.exports = getNowPlaying;
