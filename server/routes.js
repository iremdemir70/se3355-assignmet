const express = require('express');
const router = express.Router();
const db = require('./db');

// Quick Links
router.get('/quick-links', (req, res) => {
  db.all('SELECT * FROM quick_links', (err, rows) => {
    if (err) {
      console.error('Quick links hata:', err.message);
      return res.status(500).json({ error: 'Veri alınamadı' });
    }
    res.json(rows);
  });
});

// Slider Items
router.get('/slider', (req, res) => {
  db.all('SELECT * FROM slider_items', (err, rows) => {
    if (err) {
      console.error('Slider hata:', err.message);
      return res.status(500).json({ error: 'Veri alınamadı' });
    }
    res.json(rows);
  });
});

// Electronic Deals
router.get('/elektronik', (req, res) => {
  db.all('SELECT * FROM elektronik_items', (err, rows) => {
    if (err) {
      console.error('Elektronik hata:', err.message);
      return res.status(500).json({ error: 'Veri alınamadı' });
    }
    res.json(rows);
  });
});

// Recommendations
router.get('/recommendations', (req, res) => {
  db.all('SELECT * FROM recommendations', (err, rows) => {
    if (err) {
      console.error('Recommendations hata:', err.message);
      return res.status(500).json({ error: 'Veri alınamadı' });
    }
    res.json(rows);
  });
});

module.exports = router;
