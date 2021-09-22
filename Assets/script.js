var searchCity = document.querySelector("#sButton");
var cityInput = document.querySelector("#textBox");
var apiKey = '1324b076d7d8ed0b45bf5b20fdc67fb8';
var city='Murrieta';
const date = moment();

// Create fetch for API to get weather
function getWeather(DATA) {
  var city = cityInput.value;
  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=';
  //var cityHumidity =[];
  fetch(requestUrl + city +"&appid="+ apiKey+"&units=imperial", {
})  
.then(response => {
 return response.json();
})
  .then(function (data){
  cityName= data.name;
  cityTemp=data.main.temp;
  cityHumidity=data.main.humidity;
  cityWind=data.wind.speed;
  console.log(cityWind);
  console.log(data);


  // Create html values in box
var cName = document.querySelector('#cardbodyCity');
var cTemp = document.querySelector('#cardbodyTemp');
var cWind = document.querySelector('#cardbodywind');
var cHumidity = document.querySelector('#cardbodyHumidity');
//cName.document.createElement('h1');
// CITY NAME
cName.innerText = "City: "+ cityName + " " +date.format("MM/DD/YYYY");

// CITY TEMP
cTemp.innerText = "Current Temp: "+ cityTemp + " Fahrenheit";
// CITY WIND
cWind.innerText = "Wind: " + cityWind + " MPH";
// CITY Humidity
cHumidity.innerText = "Humidity: " + cityHumidity;



  });






}






//getWeather();



searchCity.addEventListener('click', function(){
  getWeather();
});



// create document.createElement('') for each feild in box

