const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.resolve(__dirname, 'data.sqlite'));
console.log('SQLite bağlantısı başarılı (better-sqlite3) ✅');

// QUICK LINKS
db.prepare(`
  CREATE TABLE IF NOT EXISTS quick_links (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    subtitle TEXT
  )
`).run();

const quickLinksCount = db.prepare('SELECT COUNT(*) AS count FROM quick_links').get().count;

if (quickLinksCount === 0) {
  const stmt = db.prepare('INSERT INTO quick_links (title, subtitle) VALUES (?, ?)');
  const quickLinksData = [
    ['.', 'image/quick/format-webp-2.jpeg'],
    ['.', 'image/quick/format-webp-2.webp'],
    ['.', 'image/quick/format-webp-3.jpeg'],
    ['.', 'image/quick/format-webp-3.webp'],
    ['.', 'image/quick/format-webp-4.jpeg'],
    ['.', 'image/quick/format-webp.jpeg'],
    ['.', 'image/quick/format-webp.webp'],
    ['.', 'image/quick/format-webp1.jpeg'],
  ];
  quickLinksData.forEach(([title, subtitle]) => stmt.run(title, subtitle));
  console.log('8 kampanya quick_links tablosuna eklendi');
} else {
  console.log('quick_links tablosunda zaten veri var');
}

// SLIDER
db.prepare(`
  CREATE TABLE IF NOT EXISTS slider_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL
  )
`).run();

const sliderCount = db.prepare('SELECT COUNT(*) AS count FROM slider_items').get().count;

if (sliderCount === 0) {
  const stmt = db.prepare('INSERT INTO slider_items (title, image) VALUES (?, ?)');
  const sliderData = [
    ['Yeni Sezon Ürünleri', 'image/slider/format-webp-7.webp'],
    ['Haftanın İndirimi', 'image/slider/format-webp-.jpeg'],
    ['Çok Satanlar', 'image/slider/format-webp-3.webp'],
    ['Teknoloji Fırsatları', 'image/slider/format-webp-4.webp'],
    ['Kampanya 5', 'image/slider/format-webp-5.webp'],
    ['Kampanya 6', 'image/slider/format-webp-6.webp'],
    ['Kampanya 7', 'image/slider/format-webp-8.jpeg'],
    ['Kampanya 8', 'image/slider/format-webp-9.jpeg'],
    ['Kampanya 9', 'image/slider/format-webp-10.jpeg'],
    ['Kampanya 10', 'image/slider/format-webp-11.jpeg'],
  ];
  sliderData.forEach(([title, image]) => stmt.run(title, image));
  console.log('slider_items içine veri eklendi');
}

// ELEKTRONİK
db.prepare(`
  CREATE TABLE IF NOT EXISTS elektronik_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    rating REAL
  )
`).run();

const elektronikCount = db.prepare('SELECT COUNT(*) AS count FROM elektronik_items').get().count;

if (elektronikCount === 0) {
  const stmt = db.prepare('INSERT INTO elektronik_items (title, price, image, rating) VALUES (?, ?, ?, ?)');
  const products = [
    ['Süpürge', '29.999', 'image/electronic/format-webp-4.webp', 4.5],
    ['Gaming Bilgisayar', '19.999', 'image/electronic/format-webp-5.webp', 4.5],
    ['Halı Süpürgesi', '14.999', 'image/electronic/format-webp-6.webp', 4.5],
  ];
  products.forEach(p => stmt.run(...p));
  console.log('elektronik_items içine 3 ürün eklendi');
}

// RECOMMENDATIONS
db.prepare(`
  CREATE TABLE IF NOT EXISTS recommendations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    rating REAL
  )
`).run();

const recommendationsCount = db.prepare('SELECT COUNT(*) AS count FROM recommendations').get().count;

if (recommendationsCount === 0) {
  const stmt = db.prepare('INSERT INTO recommendations (title, price, image, rating) VALUES (?, ?, ?, ?)');
  const products = [
    ['Sabun', '179', 'image/product/format-webp.webp', 4.5],
    ['Güneş Kremi', '89', 'image/product/format-webp-5.webp', 3],
    ['Masa', '129', 'image/product/format-webp-4.webp', 4],
    ['Süpürge', '1.599', 'image/product/format-webp-3.webp', 5],
    ['Çikolata Sosu', '249', 'image/product/format-webp-2.webp', 3.5],
    ['Termos', '249', 'image/product/format-webp-6.webp', 3.5],
    ['Adaptör', '549', 'image/product/format-webp-7.webp', 3.5],
    ['Peçete', '299', 'image/product/format-webp-8.webp', 3.5],
  ];
  products.forEach(p => stmt.run(...p));
  console.log('recommendations içine 8 ürün eklendi');
}

module.exports = db;
