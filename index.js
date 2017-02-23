var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName);

app.put('/name', mainCtrl.changeName);
// app.put('/location', mainCtrl.updateLocation);

// app.post('/hobbies', mainCtrl.addHobbies);
// app.post('/occupations', mainCtrl.addOccupations);
// get.post('/family', mainCtrl.addFamily);
// app.post('/restaurants', mainCtrl.addRestaurants);

app.listen(3000, function() {
    console.log('Listening on port 3000.');
});