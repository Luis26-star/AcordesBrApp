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
function playVoice(voice){

stopAll();

document.getElementById(voice).play();

}

function stopAll(){

document.getElementById("sopran").pause();
document.getElementById("alt").pause();
document.getElementById("tenor").pause();
document.getElementById("bass").pause();

}
const songs = [

{
title: "Canto de Ossanha",
folder: "canto_ossanha"
},

{
title: "Choro Bandido",
folder: "choro_bandido"
}

];

const voices = ["sopran","alt","tenor","bass"];

const container = document.getElementById("songList");

songs.forEach(song => {

let block = document.createElement("div");

block.innerHTML = `<h3>🎵 ${song.title}</h3>`;

voices.forEach(v => {

let audio = document.createElement("audio");

audio.id = song.folder + "_" + v;

audio.src = "audio/" + song.folder + "/" + v + ".mp3";

container.appendChild(audio);

});

let playAll = document.createElement("button");

playAll.innerText = "▶ Alle Stimmen";

playAll.onclick = () => {

voices.forEach(v => {

document.getElementById(song.folder + "_" + v).play();

});

};

block.appendChild(playAll);

container.appendChild(block);

});
