const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs'); 

app.use(express.static('public'));

app.get('/log', (req, res) => {

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('Received IP address:', ip);
  res.send(ip);





  fs.appendFile('ips.txt', ip + '\n', (err) => {
    if (err) {
      console.error('Error saving IP address:', err);
    }
  });


});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
