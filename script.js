const url = "https://api.openweathermap.org/data/2.5/"
const key = "99f854b4ee152b8fccf2afb1c5f75c7a"



const setQuery = (e) =>{
  if(e.keyCode == '13')
    getResult(searchInput.value); 
}

const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("keypress", setQuery)

const getResult = (cityName) =>{
  searchInput.value = "";
  //console.log(cityName) 
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
  fetch(query)
  .then(weather =>  weather.json())
  .then(displayResult)
}

const displayResult = (result) =>{

  console.log(result);

  let city = document.querySelector(".city")
  city.innerText = `${result.name.toUpperCase()}, ${result.sys.country}`
  let temp = document.querySelector(".temp")
  temp.innerText = `${Math.round(result.main.temp)}°C `
  let desc = document.querySelector(".desc")
  desc.innerText = `${result.weather["0"].description}`
  let minmax = document.querySelector(".minmax")
  minmax.innerText =`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click",()=>{
  getResult(searchInput.value);
})


const formatTime= (unit) => {
  return unit < 10 ? `0${unit}` : unit;
}

const updateClock = () =>{
const now = new Date()
const hours = formatTime(now.getHours());
const minutes = formatTime(now.getMinutes());
const seconds = formatTime(now.getSeconds());
const time = document.querySelector("#time")
time.innerText = `${hours}:${minutes}:${seconds}`
}
setInterval(updateClock,1000);  