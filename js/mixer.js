function setTempo(speed){
document.getElementById("sopran").playbackRate = speed;
document.getElementById("alt").playbackRate = speed;
document.getElementById("tenor").playbackRate = speed;
document.getElementById("bass").playbackRate = speed;
}

let loopInterval;

function startLoop(){

let start = document.getElementById("loopStart").value;
let end = document.getElementById("loopEnd").value;

loopInterval = setInterval(function(){

let audio = document.getElementById("sopran");

if(audio.currentTime >= end){
audio.currentTime = start;
}

},200);

}

function stopLoop(){
clearInterval(loopInterval);
}
