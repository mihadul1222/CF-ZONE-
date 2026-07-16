const https = require('https');

async function searchBB(query) {
  return new Promise((resolve) => {
    https.get('https://www.boibazar.com/search?q=' + encodeURIComponent(query), (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const match = data.match(/<img[^>]+src="([^">]+)"/g);
        if (match) console.log(match.slice(0, 10));
        else console.log("null");
      });
    });
  });
}
searchBB('পদ্মজা');
