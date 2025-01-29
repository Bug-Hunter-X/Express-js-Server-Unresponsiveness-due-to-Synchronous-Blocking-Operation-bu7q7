const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process data synchronously - this blocks the event loop
  for (let i = 0; i < 1000000000; i++) {};
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));