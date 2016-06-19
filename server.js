const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_SECRET);
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT;
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(bodyParser.urlencoded({extended: false}))

app.post("/call", (req, res) => {
  twilio.makeCall({
      to: req.body.number || '',
      from: '+18058769341',
      url: 'https://jelly-flasher.hyperdev.space/ring.xml'
  
  }, function(err, responseData) {
    if(err) {
      console.error('An error occurred:');
      console.error(err);
      res.status(500).send('An error occurred');
    } else {
      res.send('Calling...');
    }
  });
});

// listen for requests :)
app.listen(PORT, () => console.log('Listening on ' + PORT));
