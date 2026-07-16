const https = require('https');

async function searchYahoo(title) {
  return new Promise((resolve) => {
    https.get(`https://images.search.yahoo.com/search/images?p=${encodeURIComponent(title + ' বই')}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const match = data.match(/<img src='([^']+)'/);
        if (match) resolve(match[1]);
        else {
          const match2 = data.match(/src="([^"]+)"/);
          if (match2) resolve(match2[1]);
          else resolve(null);
        }
      });
    });
  });
}

searchYahoo('পদ্মজা').then(console.log);
searchYahoo('দেবী হুমায়ূন আহমেদ').then(console.log);
