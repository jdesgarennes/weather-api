var searchCity = document.querySelector("#sButton");
var cityInput = document.querySelector("#textBox");
var apiKey = '1324b076d7d8ed0b45bf5b20fdc67fb8';
var city='Murrieta';

// momnet Time current and days for five day
const date = moment();
const day1 = moment().add(1,'days');
const day2 = moment().add(2,'days');
const day3 = moment().add(3,'days');
const day4 = moment().add(4,'days');
const day5 = moment().add(5,'days');

// Create fetch for API to get weather
function getWeather(DATA) {
  var city = cityInput.value;
  var requestUrl ='https://api.openweathermap.org/data/2.5/weather?q=';
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
  cityIcon=data.weather[0].icon;
  console.log(data);
  console.log(cityIcon);
   

  // Create html values in box
var cName = document.querySelector('#cardbodyCity');
var cTemp = document.querySelector('#cardbodyTemp');
var cWind = document.querySelector('#cardbodywind');
var cHumidity = document.querySelector('#cardbodyHumidity');
var cIcon = document.querySelector('#cardbodyIcon');

// CITY NAME
cName.innerText = "City: "+ cityName + " " +date.format("MM/DD/YYYY");
// CITY ICON
document.getElementById("cardbodyIcon").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon +'@2x.png');
// CITY TEMP
cTemp.innerText = "Current Temp: "+ cityTemp + " Fahrenheit";
// CITY WIND
cWind.innerText = "Wind: " + cityWind + " MPH";
// CITY Humidity
cHumidity.innerText = "Humidity: " + cityHumidity;

  });

}

function getWeatherFive(data5){
  city = cityInput.value;

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=1324b076d7d8ed0b45bf5b20fdc67fb8&units=imperial', { 
    }) 
  .then(response => {
   return response.json();
  })
  .then(function (data5){
  console.log(data5);
  cityName5= data5.city.name;
  cityTemp0=data5.list[2].main.temp;
  cityTemp1=data5.list[10].main.temp;
  cityTemp2=data5.list[18].main.temp;
  cityTemp3=data5.list[26].main.temp;
  cityTemp4=data5.list[34].main.temp;

  // Weather ICON API data
  cityIcon0=data5.list[2].weather[0].icon;
  cityIcon1=data5.list[10].weather[0].icon;
  cityIcon2=data5.list[18].weather[0].icon;
  cityIcon3=data5.list[26].weather[0].icon;
  cityIcon4=data5.list[34].weather[0].icon;

  // Weather Description API data
  cityDesc0=data5.list[2].weather[0].description;
  cityDesc1=data5.list[10].weather[0].description;
  cityDesc2=data5.list[18].weather[0].description;
  cityDesc3=data5.list[26].weather[0].description;
  cityDesc4=data5.list[34].weather[0].description;

  // Wind API data
  cityWind0=data5.list[2].wind.speed;
  cityWind1=data5.list[10].wind.speed;
  cityWind2=data5.list[18].wind.speed;
  cityWind3=data5.list[26].wind.speed;
  cityWind4=data5.list[34].wind.speed;

// City Name
  var fiveName0 = document.querySelector('.fiveDayCity0');
  var fiveName1 = document.querySelector('.fiveDayCity1');
  var fiveName2 = document.querySelector('.fiveDayCity2');
  var fiveName3 = document.querySelector('.fiveDayCity3');
  var fiveName4 = document.querySelector('.fiveDayCity4');
  fiveName0.innerText= cityName5 + ' '+ day1.format("MM/DD/YYYY");
  fiveName1.innerText= cityName5 + ' '+ day2.format("MM/DD/YYYY");
  fiveName2.innerText= cityName5 + ' '+ day3.format("MM/DD/YYYY");
  fiveName3.innerText= cityName5 + ' '+ day4.format("MM/DD/YYYY");
  fiveName4.innerText= cityName5 + ' '+ day5.format("MM/DD/YYYY");
// icon 5day
  document.getElementById("5dayIcon0").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon0 +'@2x.png');
  document.getElementById("5dayIcon1").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon1 +'@2x.png');
  document.getElementById("5dayIcon2").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon2 +'@2x.png');
  document.getElementById("5dayIcon3").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon3 +'@2x.png');
  document.getElementById("5dayIcon4").setAttribute('src', 'http://openweathermap.org/img/wn/'+ cityIcon4 +'@2x.png');

// Temp 5 day
var fivetemp0 = document.querySelector('.fiveDayTemp0');
var fivetemp1 = document.querySelector('.fiveDayTemp1');
var fivetemp2 = document.querySelector('.fiveDayTemp2');
var fivetemp3 = document.querySelector('.fiveDayTemp3');
var fivetemp4 = document.querySelector('.fiveDayTemp4');
fivetemp0.innerText='Temp:'+cityTemp0;
fivetemp1.innerText='Temp:'+cityTemp1;
fivetemp2.innerText='Temp:'+cityTemp2;
fivetemp3.innerText='Temp:'+cityTemp3;
fivetemp4.innerText='Temp:'+cityTemp4;

// Description 5 day

var fivedesc0 = document.querySelector('.descity0');
var fivedesc1 = document.querySelector('.descity1');
var fivedesc2 = document.querySelector('.descity2');
var fivedesc3 = document.querySelector('.descity3');
var fivedesc4 = document.querySelector('.descity4');
fivedesc0.innerText=cityDesc0;
fivedesc1.innerText=cityDesc1;
fivedesc2.innerText=cityDesc2;
fivedesc3.innerText=cityDesc3;
fivedesc4.innerText=cityDesc4;

// Wind 5 day
var fivewind0 = document.querySelector('.fiveDayWind0');
var fivewind1 = document.querySelector('.fiveDayWind1');
var fivewind2 = document.querySelector('.fiveDayWind2');
var fivewind3 = document.querySelector('.fiveDayWind3');
var fivewind4 = document.querySelector('.fiveDayWind4');
fivewind0.innerText='WIND '+cityWind0+' MPH';
fivewind1.innerText='WIND '+cityWind1+' MPH';
fivewind2.innerText='WIND '+cityWind2+' MPH';
fivewind3.innerText='WIND '+cityWind3+' MPH';
fivewind4.innerText='WIND '+cityWind4+' MPH';


});

}



searchCity.addEventListener('click', function(){
  getWeather();
  getWeatherFive();

});



// create document.createElement('') for each feild in box

