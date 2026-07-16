const https = require('https');

async function search(title) {
  return new Promise((resolve) => {
    https.get(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.docs && parsed.docs.length > 0) {
            const doc = parsed.docs.find(d => d.cover_i);
            if (doc) {
                resolve(`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`);
            } else resolve(null);
          } else {
            resolve(null);
          }
        } catch(e) { resolve(null); }
      });
    });
  });
}

search('শঙ্খনীল কারাগার').then(console.log);
search('দেবী হুমায়ূন আহমেদ').then(console.log);
search('Daruchini Dwip').then(console.log);
