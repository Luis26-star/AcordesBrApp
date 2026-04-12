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
