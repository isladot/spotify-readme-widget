<p align="center">
  <h2 align="center">Spotify Readme Widget</h2>
  <p align="center">Dynamically generated Spotify widgets for GitHub readme!</p>
</p>

## Table of Contents

- [✨ Now Playing Card](#-now-playing-card)
- [📤 Deploy](#-deploy)
<!-- - [🎨 Themes](#-themes) -->

## ✨ Now Playing Card

Copy-paste this in your GitHub readme, and that's it!

Change `<HEROKU_INSTANCE_NAME>` with the name of your personal instance. 

```html
<img src="https://<HEROKU_INSTANCE_NAME>.herokuapp.com/api/spotify/now" />
```

### Themes

You can customize the look of the card using come pre-built themes.

Add `?theme=THEME_NAME` like so:

```html
<img src="https://<HEROKU_INSTANCE_NAME>.herokuapp.com/api/spotify/now?theme=vue-dark" />
```

## 📤 Deploy

To make this app work it is necessary to provide data that changes from user to user, thus making it mandatory to create your own instance.

Of course, everything will be **completely free**, thanks to [Heroku](https://heroku.com/), but it will take a few minutes to set up.

<details>
  <summary>Spotify Setup</summary>

  ### Spotify

  1. Create a [Spotify Application](https://developer.spotify.com/dashboard/applications).
  2. Take note of `Client ID` and `Client Secret`.
  3. Click on Edit Settings.
  4. Add `http://localhost/callback/` on **Redirect URIs** section.

  ### Refresh Token

  1. Navigate to the following URL:
      * Remember to replace `{SPOTIFY_CLIENT_ID}` with the `Client ID` of your newly created application.
      ```
      https://accounts.spotify.com/authorize?client_id={SPOTIFY_CLIENT_ID}&response_type=code&scope=user-read-currently-playing,user-read-recently-played&redirect_uri=http://localhost/callback/
      ```
  2. Log in, take note of the `{CODE}` portion from `http://localhost/callback/?code={CODE}`.
  3. Combine in a string `{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}` and encode into [Base64](https://www.base64encode.org/).
      * WARNING: `{SPOTIFY_CLIENT_ID}` and `{SPOTIFY_CLIENT_SECRET}` are actually separated by `:`.
  4. Run from Git Bash the following curl command:
      ```
      curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic {BASE64}" -d "grant_type=authorization_code&redirect_uri=http://localhost/callback/&code={CODE}" https://accounts.spotify.com/api/token
      ```
  5. Take note of the Refresh Token.
</details>

<details>
  <summary>Heroku Setup</summary>

  ### Instructions for deploying to Heroku

  1. Sign in to [Heroku](https://signup.heroku.com/) or create a new account at https://signup.heroku.com/
  2. Press the "Deploy to Heroku" button below:

  <p align="center">
    <a href="https://heroku.com/deploy">
      <img src="https://www.herokucdn.com/deploy/button.svg" title="Deploy to Heroku" alt="Deploy"/>
    </a>
  </p>

  3. Click **"Deploy App"** on the page that comes up, then wait for the app deploy.
  4. Once the app is deployed, click **"Manage App"** to go to the dashboard.
  5. Go to the **"Settings"** tab and click **"Reveal Config Vars"**.
  6. Add your personal data obtained from Spotify:
      * `SPOTIFY_CLIENT_ID`: Your Spotify Application **Client ID**
      * `SPOTIFY_CLIENT_SECRET`: Your Spotify Application **Client Secret**
      * `SPOTIFY_REFRESH_TOKEN`: Your Spotify Refresh Token.
  7. Check the **Domains** section to get the URL of your instance.
</details>

---

Made with Javascript, EJS and ❤️

<a href="https://heroku.com/"><img alt="Powered by Heroku" title="Powered by Heroku" src="https://img.shields.io/badge/-Powered%20by%20Heroku-6567a5?style=for-the-badge&logo=heroku&logoColor=white"/></a>