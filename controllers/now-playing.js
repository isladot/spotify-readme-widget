const SpotifyClient = require('../utils/spotify-client');

const getNowPlaying = async (_, res) => {
  const client = new SpotifyClient();

  const response = await client.getNowPlaying();

  console.log(response);
};

module.exports = getNowPlaying;
