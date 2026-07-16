const https = require('https');

async function searchGR(title) {
  return new Promise((resolve) => {
    https.get(`https://www.goodreads.com/search?q=${encodeURIComponent(title)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        // Look for the first book cover image in search results
        const match = data.match(/<img[^>]+class="bookCover[^>]+src="([^">]+)"/);
        if (match) resolve(match[1]);
        else resolve(null);
      });
    });
  });
}

searchGR('পদ্মজা').then(console.log);
searchGR('দেবী হুমায়ূন আহমেদ').then(console.log);
