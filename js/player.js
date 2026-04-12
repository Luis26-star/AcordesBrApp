const songs = [
  {
    title: "Canto de Ossanha",
    folder: "canto_ossanha"
  }
];

const voices = [
  {name:"Sopran",file:"sopran.mp3"},
  {name:"Alt",file:"alt.mp3"},
  {name:"Tenor",file:"tenor.mp3"},
  {name:"Bass",file:"bass.mp3"}
];

const container = document.getElementById("player");

songs.forEach(song => {

  const card = document.createElement("div");
  card.style.marginBottom = "25px";

  const title = document.createElement("h3");
  title.innerText = "🎵 " + song.title;

  card.appendChild(title);

  voices.forEach(v => {

    const btn = document.createElement("button");

    btn.innerText = "▶ " + v.name;

    btn.style.margin = "5px";
    btn.style.padding = "10px 16px";
    btn.style.borderRadius = "20px";
    btn.style.border = "none";
    btn.style.background = "#1db954";
    btn.style.color = "white";
    btn.style.fontSize = "14px";
    btn.style.cursor = "pointer";

    btn.onclick = () => {

      const audio = new Audio(
        "audio/" + song.folder + "/" + v.file
      );

      audio.play();

    };

    card.appendChild(btn);

  });

  container.appendChild(card);

});
