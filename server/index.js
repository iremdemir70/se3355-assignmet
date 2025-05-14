const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use('/api', routes); // tüm rotaları /api/ altında topla

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Backend çalışıyor http://localhost:${PORT}`);
});
