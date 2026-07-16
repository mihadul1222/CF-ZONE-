const https = require('https');

async function searchBing(query) {
  return new Promise((resolve) => {
    https.get('https://www.bing.com/images/search?q=' + encodeURIComponent(query), {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const match = data.match(/class="iusc"[^>]*m="([^"]+)"/);
        if (match) {
          try {
            const json = JSON.parse(match[1].replace(/&quot;/g, '"'));
            resolve(json.murl);
          } catch(e) { resolve(null); }
        } else {
          resolve(null);
        }
      });
    });
  });
}

async function run() {
  const q1 = await searchBing('rokomari book cover পদ্মজা');
  console.log('q1', q1);
  const q2 = await searchBing('rokomari book cover দেবী হুমায়ূন আহমেদ');
  console.log('q2', q2);
}
run();
