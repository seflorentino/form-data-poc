let fs = require('fs'),
  express = require('express'),
  multer = require('multer'),
  app = express(),
  storage = multer.memoryStorage(),
  upload = multer({
    dest: 'uploads/',
    storage: storage
  });

app.use('/', express.static('client'));

let cpUpload = upload.fields([{
  name: 'payload',
  maxCount: 1
}]);
app.post('/upload', cpUpload, function(req, res) {
  let payload = req.files['payload'];
  if (payload && payload.length > 0) {
    let file = payload[0];
    res.status(200).send('File: ' + file.originalname + ' (' + file.size + ' bytes)');
  } else {
    res.status(400).send('Must upload file');
  }
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
