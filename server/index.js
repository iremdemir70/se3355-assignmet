const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, '0.0.0.0', () => {
  console.log(` Backend http://localhost:${PORT}`);
});
