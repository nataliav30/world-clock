function updateTime(){

//Bogota
let bogotaElement = document.querySelector("#bogota");
let bogotaDateElement = bogotaElement.querySelector(".date");
let bogotaTimeElement = bogotaElement.querySelector(".time");
let bogotaTime = moment().tz("America/Bogota");

bogotaDateElement.innerHTML = bogotaTime.format ("MMMM Do YYYY");
bogotaTimeElement.innerHTML = bogotaTime.format( "HH:mm:ss");

//Frankfurt
let frankfurtElement = document.querySelector("#frankfurt");
let frankfurtDateElement = frankfurtElement.querySelector(".date");
let frankfurtTimeElement = frankfurtElement.querySelector(".time");
let frankfurtTime = moment().tz("Europe/Berlin");

frankfurtDateElement.innerHTML = frankfurtTime.format ("MMMM Do YYYY");
frankfurtTimeElement.innerHTML = frankfurtTime.format( "HH:mm:ss");


//Hong Kong

let hongKongElement = document.querySelector("#hong-kong");
let hongKongDateElement = hongKongElement.querySelector(".date");
let hongKongTimeElement = hongKongElement.querySelector(".time");
let hongKongTime = moment().tz("Asia/Hong_Kong");

hongKongDateElement.innerHTML = hongKongTime.format ("MMMM Do YYYY");
hongKongTimeElement.innerHTML = hongKongTime.format( "HH:mm:ss");
}

function updateCity(event){
let cityTimeZone=event.target.value;
if (cityTimeZone ==="current"){
    cityTimeZone = moment.tz.guess();
}
let cityName= cityTimeZone.replace("_"," ").split("/")[1];
let cityTime= moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");

citiesElement.innerHTML=

 `<div class ="city">
<div>
    <h2>${cityName}</h2>
    
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
   
    </div>
   
    <div class="time">${cityTime.format("HH:mm:ss")} </div>
    </div>
 </div>
 <a href="/">All cities</a>
 `
}

updateTime();
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);