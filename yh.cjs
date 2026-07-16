const https = require('https');
const cheerio = require('cheerio');

async function searchYahoo(query) {
  return new Promise((resolve) => {
    https.get('https://images.search.yahoo.com/search/images?p=' + encodeURIComponent(query), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const $ = cheerio.load(data);
          const imgs = [];
          $('img').each((i, el) => {
            const src = $(el).attr('data-src') || $(el).attr('src');
            if (src && src.startsWith('http') && !src.includes('clear.gif')) imgs.push(src);
          });
          resolve(imgs[0] || null);
        } catch(e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

const books = [
  'পদ্মজা', 'প্রিয়তমা', 'প্রণয়িনী', 'মেঘবালিকা', 'অবন্তিকা',
  'নীল অপরাজিতা', 'মায়াবিনী', 'এক ফালি রোদ', 'শেষটা সুন্দর',
  'তুমি নামক প্রাপ্তি', 'অপেক্ষা', 'কৃষ্ণপক্ষ হুমায়ূন আহমেদ',
  'দেবী হুমায়ূন আহমেদ', 'দারুচিনি দ্বীপ হুমায়ূন আহমেদ',
  'শঙ্খনীল কারাগার', 'অবরুদ্ধ নিশীথ', 'অর্ধেক পিছুটান',
  'কাঠ গোলাপ', 'বৃষ্টিবিলাস', 'অর্ধাঙ্গিনী'
];

async function run() {
  const results = {};
  for (const book of books) {
    const img = await searchYahoo(book + ' book cover');
    results[book] = img;
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
