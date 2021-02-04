const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const path = require('path');
const webPush = require('web-push');
require('dotenv').config();

const red = "\x1b[31m";

const privateKey  = fs.readFileSync('./cert/server.key', 'utf8');
const certificate = fs.readFileSync('./cert/server.crt', 'utf8');
const credentials = { 
  key: privateKey, 
  cert: certificate 
};
const httpsServer = https.createServer(credentials, app);
const port = 8000;

const { GCM_API_KEY, PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY } = process.env; 
//webPush.setGCMAPIKey(GCM_API_KEY); // Use GCM for older browsers
webPush.setVapidDetails('mailto:truetochukz@gmail.com', PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello service worker!');
});

app.post('/subscribe', (req, res, next) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({title: 'Push Test Init', body: 'Web Push Test'});
  setTimeout(() => {
    webPush.sendNotification(subscription, payload)
           .then(result => {
             //console.log('sent notification: ', result)
           })
           .catch(err => {
             console.error(red, err.stack);
           });
  }, 3000);
});
  
app.post('/sendNotification', (req, res) => {
  const {subscription, data} = req.body;
  const payload = JSON.stringify({title: 'Push Test', body: data.message});
  setTimeout(function() {
    webPush.sendNotification(subscription, payload)
    .then(function() {
      res.sendStatus(201);
    }).catch(err => {
      console.error(red, err);
    });
  }, 1000);
});

/*Using HTTPS */
// httpsServer.listen(port, function () {
//   console.log('App listening on port ' + port);
// });

/**Using HTTP */
app.listen(port, () => console.log('App listening on port ' + port));
