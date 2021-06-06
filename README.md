<p align="center">
  <h2 align="center">Spotify Readme Widget</h2>
  <p align="center">Dynamically generated Spotify widgets for GitHub readme!</p>
</p>

## Table of Contents

- [✨ Now Playing Card](#-now-playing-card)
- [🎨 Themes](#-themes)
- [📤 Deploy](#-deploy)

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

### Instructions
1. Sign in to [Heroku](https://signup.heroku.com/) or create a new account at https://signup.heroku.com/
2. Press the Deploy button below:  
  <a href="https://heroku.com/deploy">
    <img src="https://www.herokucdn.com/deploy/button.svg" title="Deploy to Heroku" alt="Deploy"/>
  </a>


---

Made with Javascript, EJS and ❤️

<a href="https://heroku.com/"><img alt="Powered by Heroku" title="Powered by Heroku" src="https://img.shields.io/badge/-Powered%20by%20Heroku-6567a5?style=for-the-badge&logo=heroku&logoColor=white"/></a>