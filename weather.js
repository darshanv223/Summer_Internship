// const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=London&appid=a0b670b3ffac6054a36805836faf89c6&units=metric";
const city=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={api_id}&units=metric`);
    var data =await response.json();
    document.querySelector(".weather").style.display = "none";
    console.log(response.status);
    if(response.status === 404){
        document.querySelector(".box").style.background = `linear-gradient(120deg, rgb(200, 100, 70), rgb(200, 180, 80))`;
        alert("Enter valid city name");
    }
    else
    {
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
        document.querySelector(".wind").innerHTML=data.wind.speed + " KM/H";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";

        if(data.weather[0].main == 'Clear'){
            weatherIcon.src="/images/clear.png"
        }
        else if(data.weather[0].main == 'Clouds'){
            weatherIcon.src="/images/clouds.png"
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src="/images/drizzle.png"
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src="/images/mist.png"
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src="/images/rain.png"
        }
        else if(data.weather[0].main == 'Snow'){
            weatherIcon.src="/images/snow.png"
        }
        document.querySelector(".weather").style.display = "block"
    }
    
}

btn.addEventListener("click",()=>{
    
    checkWeather(city.value);
});

