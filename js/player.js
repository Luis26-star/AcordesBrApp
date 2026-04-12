const songs = [
  "canto_ossanha",
  "agua_de_beber"
];

const voices = [
  {name:"Sopran",file:"sopran.mp3"},
  {name:"Alt",file:"alt.mp3"},
  {name:"Tenor",file:"tenor.mp3"},
  {name:"Bass",file:"bass.mp3"}
];

const container = document.getElementById("player");

songs.forEach(song => {

  const block = document.createElement("div");
  block.style.marginBottom = "30px";

  const title = document.createElement("h3");
  title.innerText = "🎵 " + song.replaceAll("_"," ");

  block.appendChild(title);

  voices.forEach(v => {

    const btn = document.createElement("button");

    btn.innerText = "▶ " + v.name;

    btn.style.margin = "5px";
    btn.style.padding = "10px 16px";
    btn.style.borderRadius = "20px";
    btn.style.border = "none";
    btn.style.background = "#1db954";
    btn.style.color = "white";
    btn.style.cursor = "pointer";

    btn.onclick = () => {

      const audio = new Audio(
        "audio/" + song + "/" + v.file
      );

      audio.play();

    };

    block.appendChild(btn);

  });

  container.appendChild(block);

});
