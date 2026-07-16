const https = require('https');

async function search(query) {
  return new Promise((resolve) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' book cover rokomari')}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
  });
}

search('পদ্মজা').then(html => {
  const matches = html.match(/<img[^>]+src="([^">]+)"/g);
  if (matches) {
     console.log(matches.slice(0, 10));
  }
});
