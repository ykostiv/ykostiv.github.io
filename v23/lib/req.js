var request = require("request");
var geourl = "https://geolocation-db.com/json";
var lat;
var long;

request({
    url: geourl,
    json: true
}, function (error, response, json) {

    if (!error && response.statusCode === 200) {
        console.log(body);
        lat = json.latitude;
        long = json.longitude;
        console.log(lat,long);
    }
})
.then(function(result) {
  console.log(lat,long);
});
