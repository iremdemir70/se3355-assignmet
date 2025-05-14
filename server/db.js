const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, 'data.sqlite'), (err) => {
  if (err) return console.error('DB bağlantı hatası:', err.message);
  console.log('SQLite bağlantısı başarılı ✔️');
});

//  : quick_links
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS quick_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      subtitle TEXT
    )
  `, (err) => {
    if (err) {
      console.error('quick_links tablosu oluşturulamadı ❌', err.message);
    } else {
      console.log('quick_links tablosu hazır ✅');
    }
  });
});

db.serialize(() => {
  db.all('SELECT COUNT(*) as count FROM quick_links', (err, rows) => {
    if (err) return console.error('Sorgu hatası ❌', err.message);

    const count = rows[0].count;
    if (count === 0) {
      const stmt = db.prepare('INSERT INTO quick_links (title, subtitle) VALUES (?, ?)');

      const quickLinksData = [
        ['.' ,'image/quick/format-webp-2.jpeg'],
        ['.' ,'image/quick/format-webp-2.webp'],
        ['.' ,'image/quick/format-webp-3.jpeg'],
        ['.' ,'image/quick/format-webp-3.webp'],
        ['.' ,'image/quick/format-webp-4.jpeg'],
        ['.' ,'image/quick/format-webp.jpeg'],
        ['.' ,'image/quick/format-webp.webp'],
        ['.' ,'image/quick/format-webp1.jpeg'],
      ];

      quickLinksData.forEach(([title, subtitle]) => {
        stmt.run(title, subtitle);
      });

      stmt.finalize(() => {
        console.log('8 kampanya quick_links tablosuna eklendi ✅');
      });
    } else {
      console.log('quick_links tablosunda zaten veri var, ekleme yapılmadı 🟡');
    }
  });
});


//SLIDER
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS slider_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      image TEXT NOT NULL
    )
  `, (err) => {
    if (err) console.error('slider_items oluşturulamadı ❌', err.message);
    else console.log('slider_items tablosu hazır ✅');
  });

  db.all('SELECT COUNT(*) as count FROM slider_items', (err, rows) => {
    if (err) return console.error(err.message);
    if (rows[0].count === 0) {
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
      stmt.finalize(() => {
        console.log('slider_items içine özel görseller eklendi ✅');
      });
    }
  });
});



//ELECTRONIC

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS elektronik_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      price TEXT NOT NULL,
      image TEXT NOT NULL,
      rating REAL
    )
  `, (err) => {
    if (err) console.error('elektronik_items oluşturulamadı ❌', err.message);
    else console.log('elektronik_items tablosu hazır ✅');
  });

  db.all('SELECT COUNT(*) as count FROM elektronik_items', (err, rows) => {
    if (err) return console.error(err.message);
    if (rows[0].count === 0) {
      const stmt = db.prepare('INSERT INTO elektronik_items (title, price, image, rating) VALUES (?, ?, ?, ?)');
      const products = [
        ['Süpürge', '29.999', 'image/electronic/format-webp-4.webp', 4.5],
        ['Gaming Bilgisayar', '19.999', 'image/electronic/format-webp-5.webp', 4.5],
        ['Halı Süpürgesi', '14.999', 'image/electronic/format-webp-6.webp', 4.5],
      ];
      products.forEach(p => stmt.run(...p));
      stmt.finalize(() => {
        console.log('elektronik_items içine 3 ürün eklendi ✅');
      });
    }
  });
});

//RECOMMEND

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS recommendations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      price TEXT NOT NULL,
      image TEXT NOT NULL,
      rating REAL
    )
  `, (err) => {
    if (err) console.error('recommendations oluşturulamadı ❌', err.message);
    else console.log('recommendations tablosu hazır ✅');
  });

  db.all('SELECT COUNT(*) as count FROM recommendations', (err, rows) => {
    if (err) return console.error(err.message);
    if (rows[0].count === 0) {
      const stmt = db.prepare('INSERT INTO recommendations (title, price, image, rating) VALUES (?, ?, ?, ?)');
      const products = [
        ['Sabun ', '179', 'image/product/format-webp.webp', 4.5],
        ['Güneş Kremi', '89', 'image/product/format-webp-5.webp', 3],
        ['Masa', '129', 'image/product/format-webp-4.webp', 4],
        ['Süpürge', '1.599', 'image/product/format-webp-3.webp', 5],
        ['Çikolata Sosu', '249', 'image/product/format-webp-2.webp', 3.5],
        ['Termos', '249', 'image/product/format-webp-6.webp', 3.5],
        ['Adaptör', '549', 'image/product/format-webp-7.webp', 3.5],
        ['Peçete', '299', 'image/product/format-webp-8.webp', 3.5],
      ];
      
      products.forEach(p => stmt.run(...p));
      stmt.finalize(() => {
        console.log('recommendations içine 5 ürün eklendi ✅');
      });
    }
  });
});

module.exports = db;
