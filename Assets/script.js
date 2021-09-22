var searchCity = document.querySelector("#sButton");
var cityInput = document.querySelector("#textBox");
var apiKey = '1324b076d7d8ed0b45bf5b20fdc67fb8';
var city='Murrieta';




// Create fetch for API to get weather
function getWeather(DATA) {
  var city = cityInput.value;
  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=';

  fetch(requestUrl + city +"&appid="+ apiKey+"&units=imperial", {
})  
.then(response => {
 return response.json();
})
.then (data =>{
  console.log(data)
})
.catch(err => {
console.error(err);
});
return DATA;
}






//getWeather();



searchCity.addEventListener('click', function(){
  getWeather();
});

