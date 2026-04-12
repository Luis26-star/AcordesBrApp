const songs = ["canto_ossanha"];

const voices = ["sopran","alt","tenor","bass"];

const container = document.getElementById("song-list");

songs.forEach(song => {

  let block = document.createElement("div");

  block.style.marginBottom = "30px";

  let title = document.createElement("h3");
  title.innerText = song.replace("_"," ");

  block.appendChild(title);

  voices.forEach(v => {

    let btn = document.createElement("button");

    btn.innerText = "▶ " + v;

    btn.style.margin = "5px";
    btn.style.padding = "8px 14px";
    btn.style.borderRadius = "20px";
    btn.style.border = "none";
    btn.style.background = "#2e7d32";
    btn.style.color = "white";
    btn.style.cursor = "pointer";

    btn.onclick = () => {

      let audio = new Audio(`audio/${song}/${v}.mp3`);
      audio.play();

    };

    block.appendChild(btn);

  });

  container.appendChild(block);

});
