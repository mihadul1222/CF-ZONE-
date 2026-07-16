const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.youtube.com/@cfzone_shop', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)">/);
    if (match) console.log(match[1]);
    else console.log("not found");
  });
});
