const SpotifyClient = require('../client/spotify-client');

const getNowPlaying = async (_, res) => {
  const client = new SpotifyClient();

  //const response = await client.getNowPlaying();

  /* const {
    name,
    artists,
    album: { images },
    external_urls: { spotify }
  } = response.data.item; */

  /* res.render('../utils/spotify-card-template.ejs', {
    trackName: name,
    artistName: artists[0].name,
    albumCover: images[0].url,
    trackUrl: spotify
  }); */

  const response = await client.getAlbumImage(
    'https://i.scdn.co/image/ab67616d0000b27327ea1f903d1ecde825e378fa'
  );

  console.log(Buffer.from(response).toString('base64'));
};

module.exports = getNowPlaying;
