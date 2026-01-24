const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Hello World endpoint
app.get('/hello', (req, res) => {
  res.json({ 
    message: "Hello, World!",
    timestamp: new Date(),
    server: "unixss.com"
  });
});

// Root endpoint
app.get('/', (req, res) => {
  const isProxied = req.get('X-Forwarded-Host');
  const helloUrl = isProxied ? '/app/hello' : '/hello';
  res.send(`Express server is running. Try <a href="${helloUrl}">${helloUrl}</a> endpoint.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
