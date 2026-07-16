const https = require('https');

async function searchBing(query) {
  return new Promise((resolve) => {
    https.get('https://www.bing.com/images/search?q=' + encodeURIComponent(query), {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const matches = data.matchAll(/class="iusc"[^>]*m="([^"]+)"/g);
        for (const match of matches) {
          try {
            const json = JSON.parse(match[1].replace(/&quot;/g, '"'));
            if (json.murl && (json.murl.includes('rokomari') || json.murl.includes('book') || json.murl.endsWith('.jpg'))) {
              resolve(json.murl);
              return;
            }
          } catch(e) {}
        }
        resolve(null);
      });
    });
  });
}

const books = [
  'পদ্মজা', 'প্রিয়তমা', 'প্রণয়িনী', 'মেঘবালিকা', 'অবন্তিকা',
  'নীল অপরাজিতা', 'মায়াবিনী', 'এক ফালি রোদ', 'শেষটা সুন্দর',
  'তুমি নামক প্রাপ্তি', 'অপেক্ষা', 'কৃষ্ণপক্ষ হুমায়ূন আহমেদ',
  'দেবী হুমায়ূন আহমেদ', 'দারুচিনি দ্বীপ হুমায়ূন আহমেদ',
  'শঙ্খনীল কারাগার হুমায়ূন আহমেদ', 'অবরুদ্ধ নিশীথ', 'অর্ধেক পিছুটান',
  'কাঠ গোলাপ', 'বৃষ্টিবিলাস', 'অর্ধাঙ্গিনী'
];

async function run() {
  const results = {};
  for (const book of books) {
    const img = await searchBing(book + ' বই rokomari');
    results[book] = img;
  }
  console.log(JSON.stringify(results, null, 2));
}
run();
