const https = require('https');

async function searchWiki(query) {
  return new Promise((resolve) => {
    https.get(`https://bn.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(query)}&pithumbsize=500`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const pages = parsed.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId != '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch(e) { resolve(null); }
      });
    });
  });
}

searchWiki('কৃষ্ণপক্ষ (উপন্যাস)').then(console.log);
searchWiki('দেবী (উপন্যাস)').then(console.log);
searchWiki('দারুচিনি দ্বীপ (উপন্যাস)').then(console.log);
searchWiki('শঙ্খনীল কারাগার').then(console.log);
