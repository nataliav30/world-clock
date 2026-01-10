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
}

updateTime();
setInterval(updateTime,1000);