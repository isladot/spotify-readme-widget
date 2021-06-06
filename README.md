<p align="center">
  <h2 align="center">Spotify Readme Widget</h2>
  <p align="center">Get current playing Spotify widget on GitHub readme!</p>
</p>

## Features

- [Now Playing Card](#now-playing-card)
- [Themes](#themes)
- [Deploy](#deploy)

## Now Playing Card

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

