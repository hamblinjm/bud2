
var key = "f9db8acf7c05571f9822550bbb412c20";

document.getElementById("loginSubmit").addEventListener
                                ("click", function(event){
  event.preventDefault();
  const value = document.getElementById("email").value;
  if(value === "")
    return;
  console.log(value);

//fetches the current weather conditions
var url = "https://apilayer.net/api/check?access_key=" + key + "&email=" + value + "&format=1";

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      /*let results = "";
      results += '<h2>Weather today in ' + json.name + "</h2>";
      for (let i = 0; i < json.weather.length; i++) {
	       results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2> Feels like: ' + (json.main.feels_like).toFixed(0) + ' &deg;F </h2>';
      results += '<p>Current Temperature: ' + (json.main.temp).toFixed(0) + "  &deg;F</p>";
      results += '<p>Wind Speed: ' + (json.wind.speed).toFixed(0) + " mph</p>";

      results += "<p> Description: ";
      for (let i=0; i < json.weather.length; i++) {
	       results += json.weather[i].description;
	        if (i !== json.weather.length - 1){
	           results += ", ";
          }
      }
      results += "</p>";
      //console.log(results);
      document.getElementById("weatherResults").innerHTML = results;
      document.getElementById("weatherResults").style.fontFamily = "Impact,Charcoal,sans-serif";*/
    });
});
