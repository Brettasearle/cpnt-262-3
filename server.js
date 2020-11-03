const express = require('express');
const path = require('path');

const app = express();
// console.log(app);

app.use(express.static(path.join(__dirname, 'codepen-init')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
