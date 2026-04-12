function loadSong(song){

const player = document.getElementById("player-"+song)

player.innerHTML = `

<button onclick="playAll('${song}')">▶ Alle Stimmen</button>
<button onclick="playVoice('${song}','soprano')">Sopran</button>
<button onclick="playVoice('${song}','alt')">Alt</button>
<button onclick="playVoice('${song}','tenor')">Tenor</button>
<button onclick="playVoice('${song}','bass')">Bass</button>
<button onclick="stopAll('${song}')">⏹ Stop</button>

<audio id="${song}-soprano" src="audio/${song}/soprano.mp3"></audio>
<audio id="${song}-alt" src="audio/${song}/alt.mp3"></audio>
<audio id="${song}-tenor" src="audio/${song}/tenor.mp3"></audio>
<audio id="${song}-bass" src="audio/${song}/bass.mp3"></audio>

`
}

function playAll(song){

document.getElementById(song+"-soprano").play()
document.getElementById(song+"-alt").play()
document.getElementById(song+"-tenor").play()
document.getElementById(song+"-bass").play()

}

function playVoice(song,voice){

stopAll(song)
document.getElementById(song+"-"+voice).play()

}

function stopAll(song){

["soprano","alt","tenor","bass"].forEach(v=>{
const audio=document.getElementById(song+"-"+v)
audio.pause()
audio.currentTime=0
})

}
function setVolume(voice, volume){

volume = Number(volume)

document.querySelectorAll("audio").forEach(audio=>{
if(audio.id.includes(voice)){
audio.volume = volume
}
})

}


function setTempo(speed){

speed = Number(speed)

document.querySelectorAll("audio").forEach(audio=>{
audio.playbackRate = speed
})

}


let loopInterval = null

function startLoop(){

const start = Number(document.getElementById("loopStart").value)
const end = Number(document.getElementById("loopEnd").value)

if(loopInterval){
clearInterval(loopInterval)
}

loopInterval = setInterval(()=>{

document.querySelectorAll("audio").forEach(audio=>{

if(audio.currentTime >= end){
audio.currentTime = start
}

})

},200)

}


function stopLoop(){

if(loopInterval){
clearInterval(loopInterval)
loopInterval = null
}

}


function updateProgress(){

const audio = document.querySelector("audio")
const progress = document.getElementById("progress")

if(!audio || !progress) return

audio.addEventListener("timeupdate", ()=>{

if(!audio.duration) return

const percent = (audio.currentTime / audio.duration) * 100
progress.value = percent

})

}


function seek(value){

const audio = document.querySelector("audio")

if(!audio || !audio.duration) return

audio.currentTime = (value / 100) * audio.duration

}


function focusVoice(voice){

const voices = ["soprano","alt","tenor","bass"]

document.querySelectorAll("audio").forEach(audio=>{

voices.forEach(v=>{

if(audio.id.includes(v)){

if(v === voice){
audio.volume = 1
}else{
audio.volume = 0.2
}

}

})

})

}
