const https = require('https');

const books = [
  'পদ্মজা', 'প্রিয়তমা', 'প্রণয়িনী', 'মেঘবালিকা', 'অবন্তিকা',
  'নীল অপরাজিতা', 'মায়াবিনী', 'এক ফালি রোদ', 'শেষটা সুন্দর',
  'তুমি নামক প্রাপ্তি', 'অপেক্ষা', 'কৃষ্ণপক্ষ হুমায়ূন আহমেদ',
  'দেবী হুমায়ূন আহমেদ', 'দারুচিনি দ্বীপ হুমায়ূন আহমেদ',
  'শঙ্খনীল কারাগার', 'অবরুদ্ধ নিশীথ', 'অর্ধেক পিছুটান',
  'কাঠ গোলাপ', 'বৃষ্টিবিলাস', 'অর্ধাঙ্গিনী'
];

async function searchBook(title) {
  const url = `https://www.rokomari.com/search?term=${encodeURIComponent(title)}`;
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const imgMatch = data.match(/<img[^>]+src="(https:\/\/ds\.rokomari\.store\/[^"]+)"/);
        if (imgMatch) {
          resolve(imgMatch[1]);
        } else {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  const results = {};
  for (const book of books) {
    try {
      const img = await searchBook(book);
      results[book] = img;
    } catch(e) {
      results[book] = null;
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

run();
