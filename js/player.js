const songs = ["canto_ossanha"];

const voices = ["sopran","alt","tenor","bass"];

const container = document.getElementById("song-list");

songs.forEach(song => {

  let block = document.createElement("div");

  block.innerHTML = "<h3>" + song + "</h3>";

  voices.forEach(v => {

    let btn = document.createElement("button");

    btn.innerText = v + " ▶";

    btn.onclick = () => {

      let audio = new Audio("audio/" + song + "/" + v + ".mp3");

      audio.play();

    };

    block.appendChild(btn);

  });

  container.appendChild(block);

});
