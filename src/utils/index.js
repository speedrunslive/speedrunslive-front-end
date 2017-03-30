export function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

export function createPage(html, state) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>SpeedRunsLive</title>
      <link rel="stylesheet" href="/bundle.css" />
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window.__REDUX_STATE__ = ${JSON.stringify(state).replace(/</g, '\\u003c')}</script>
      <script src="/bundle.js"></script>
    </body>
  </html>
  `
}

export function decodeHtmlEntities(text) {
	return text.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}