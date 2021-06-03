const themes = require('../themes/themes');

function getCardColors({
  wave_color,
  text_color,
  icon_color,
  bg_color,
  theme,
  standard = 'material-palenight'
}) {
  const standard_theme = themes['material-palenight'];
  const current_theme = themes[theme] || standard_theme;
}
