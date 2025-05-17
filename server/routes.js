const express = require('express');
const router = express.Router();
const db = require('./db');

// Quick Links
router.get('/quick-links', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM quick_links').all();
    res.json(rows);
  } catch (err) {
    console.error('Quick links hata:', err.message);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
});

// Slider Items
router.get('/slider', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM slider_items').all();
    res.json(rows);
  } catch (err) {
    console.error('Slider hata:', err.message);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
});

// Electronic Deals
router.get('/elektronik', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM elektronik_items').all();
    res.json(rows);
  } catch (err) {
    console.error('Elektronik hata:', err.message);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
});

// Recommendations
router.get('/recommendations', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM recommendations').all();
    res.json(rows);
  } catch (err) {
    console.error('Recommendations hata:', err.message);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
});

module.exports = router;
