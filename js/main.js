const menu = document.querySelector(".menu");
const menuToggle = document.querySelector("#mobile-menu");

menuToggle.addEventListener("click", () => {

menu.classList.toggle("active");

});



/* Countdown */

const concertDate = new Date("June 15, 2026 19:30:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();
const distance = concertDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;

},1000);
