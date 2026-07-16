const https = require('https');

async function searchGR(title) {
  return new Promise((resolve) => {
    https.get(`https://www.goodreads.com/search?utf8=%E2%9C%93&q=${encodeURIComponent(title)}&search_type=books`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const match = data.match(/src="(https:\/\/images\.gr-assets\.com\/books\/[^"]+)"/);
        if (match) resolve(match[1]);
        else resolve(null);
      });
    });
  });
}

searchGR('পদ্মজা').then(console.log);
searchGR('দেবী').then(console.log);
