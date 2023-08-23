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

Change `<RENDER_INSTANCE_NAME>` with the name of your personal instance. 

```html
<img src="https://<RENDER_INSTANCE_NAME>.onrender.com/api/spotify/now" />
```

### Themes

You can customize the look of the card using pre-built themes.

Add `?theme=THEME_NAME` like so:

```html
<img src="https://<RENDER_INSTANCE_NAME>.onrender.com/api/spotify/now?theme=vue-dark" />
```

## 📤 Deploy

To make this app work it is necessary to provide data that changes from user to user, thus making it mandatory to create your own instance.

Of course, everything will be **completely free**, thanks to [Render](https://render.com/), but it will take a few minutes to set up.

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
  <summary>Render Setup</summary>

  ### Instructions for deploying to Render

  1. Sign in to [Render](https://dashboard.render.com/) or create a new account [here](https://dashboard.render.com/register?next=%2F).
  2. Click on New Web Service.
  3. Connect your GitHub account by clicking "configure account" and installing Render for GitHub. [Guide](https://render.com/docs/github)
  4. Connect your repo.
  5. Fill the form, remember to specify `npm install` instead of `yarn` as Build Command.
  8. Once the app is deployed, click on the app to go to the dashboard.
  9. Go to the **"Environment"** tab and add the following env vars.
      * `SPOTIFY_CLIENT_ID`: Your Spotify Application **Client ID**
      * `SPOTIFY_CLIENT_SECRET`: Your Spotify Application **Client Secret**
      * `SPOTIFY_REFRESH_TOKEN`: Your Spotify Refresh Token.
</details>

---

Made with Javascript, EJS and ❤️
