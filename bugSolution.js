const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', async (req, res) => {
  const data = req.body;
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate asynchronous work
  //The below loop is replaced with an asynchronous operation
  // for (let i = 0; i < 1000000000; i++) {}; 
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));