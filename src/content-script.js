function getFavicon(previousFavicon) {
  const { hostname } = window.location;

  switch (hostname) {
    case 'twitter.com':
      return 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
    default:
      return previousFavicon;
  }
}

/** @type {HTMLLinkElement} */
const favicon = document.querySelector("link[rel*='icon']")
  || document.querySelector("link[rel*='shortcut']")
  || document.querySelector("link[rel*='shortcut icon']")
  || document.createElement('link');
favicon.type = 'image/x-icon';
favicon.rel = 'shortcut icon';
favicon.href = getFavicon(favicon.href);
document.getElementsByTagName('head')[0].appendChild(favicon);
