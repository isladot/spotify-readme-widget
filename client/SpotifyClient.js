const axios = require('axios');
const fetch = require('node-fetch');

const REFRESH_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL =
  'https://api.spotify.com/v1/me/player/currently-playing';

class SpotifyClient {
  #getBase64Client() {
    return Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString('base64');
  }

  async #getToken() {
    const res = await axios({
      method: 'post',
      url: REFRESH_TOKEN_URL,
      headers: {
        Authorization: `Basic ${this.#getBase64Client()}`,
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: {
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
      }
    });

    try {
      return res.data['access_token'];
    } catch (e) {
      console.error('Error while getting Spotify token: ', e);
    }
  }

  async getNowPlaying() {
    const token = await this.#getToken();

    const res = await axios({
      method: 'get',
      url: NOW_PLAYING_URL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.status == 204) return {};
    return res.data.item;
  }

  async getAlbumImage(URL) {
    const res = await fetch(URL);
    const buff = await res.arrayBuffer();

    return Buffer.from(buff).toString('base64');
  }
}

module.exports = SpotifyClient;
