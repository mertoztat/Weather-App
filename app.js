const url = "https://api.openweathermap.org/data/2.5/"
const apiKey = "34a032ea57a7ff4f4aec3cf724d5c5d9"
const searchBar = document.getElementById("searchBar")



const setQuery = (e) => {
    // Press Enter Check
    if (e.keyCode == "13")
    getResult(searchBar.value)
}
// &appid=${apiKey}&units=metric&langs=tr` 
const getResult = (cityName) => {
    searchBar.value = "" 
    // Api request city,units,langs 
    let query = `${url}weather?q=${cityName}&appid=${apiKey}&units=metric&lang=tr` 
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector(".city")
    console.log(result);
    city.innerHTML = `${result.name}, ${result.sys.country}`
    let temp = document.querySelector(".temp")
    temp.innerHTML = `${Math.round(result.main.temp)}°C`
    let desc = document.querySelector(".desc")
    desc.innerHTML = result.weather[0].description.substring(0,1).toUpperCase() + result.weather[0].description.substring(1,result.weather[0].length);
    let minMax = document.querySelector(".minmax")
    minMax.innerHTML = `Min: ${Math.floor(result.main.temp_min)}°C / Max: ${Math.round(result.main.temp_max)}°C`

}

searchBar.addEventListener("keypress", setQuery)
