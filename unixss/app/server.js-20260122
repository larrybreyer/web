const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hello World endpoint
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Express server is running. Try /hello endpoint.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
