var request = require("request");
var geourl = "https://geolocation-db.com/json";
var lat, long;


request({
    url: geourl,
    json: true
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        lat = body.latitude;
        long = body.longitude;
    } else {
      console.log(error);
    }
    console.log(lat,long);
});

/*
return new Promise(resolve => {
    request({
      url: geourl,
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
          resolve(body);
      } else {
          console.log(error);
        }
    })
}).then(value => {
  lat = value.latitude;
  long = value.longitude;
  console.log(lat,long);
})
*/
