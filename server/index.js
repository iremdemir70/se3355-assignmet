const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());

// API rotaları
app.use('/api', routes);

// React build klasörü
app.use(express.static(path.join(__dirname, '../client/build')));

// API dışındaki tüm yollar React'e gitsin
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Port
const PORT = process.env.PORT || 5050;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend http://localhost:${PORT}`);
});
