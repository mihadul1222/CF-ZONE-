const https = require('https');

async function searchWafi(query) {
  return new Promise((resolve) => {
    https.get('https://www.wafilife.com/search?q=' + encodeURIComponent(query), (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const match = data.match(/<img[^>]+src="([^">]+)"[^>]+class="attachment-woocommerce_thumbnail/);
        if (match) resolve(match[1]);
        else resolve(null);
      });
    });
  });
}

searchWafi('পদ্মজা').then(console.log);
searchWafi('দেবী').then(console.log);
