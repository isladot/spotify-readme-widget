const themes = require('../themes/themes');

function getCardColors(theme) {
  const default_theme = themes['material-palenight'];
  const current_theme = themes[theme] || default_theme;

  const wave_color = `#${current_theme.wave_color}`;
  const icon_color = `#${current_theme.icon_color}`;
  const text_color = `#${current_theme.text_color}`;
  const bg_color = `#${current_theme.bg_color}`;

  return {
    wave_color,
    icon_color,
    text_color,
    bg_color
  };
}

/**
 *
 * @param {string} string
 */
function ellipseText(string) {
  let escaped = escape(string);
  return escaped.length > 30 ? `${escaped.substring(0, 30)}...` : escaped;
}

/**
 *
 * @param {string} htmlStr
 */
function escape(htmlStr) {
  return htmlStr
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = {
  getCardColors,
  ellipseText
};
