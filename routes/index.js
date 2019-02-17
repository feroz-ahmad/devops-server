const express = require('express');
const router = express.Router();
const request = require('request');
const api_key = process.env.OPENWEATHERMAP_KEY

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {weather: null, error: null});
});

router.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
    request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

module.exports = router;
