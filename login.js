function login(){

let pass = document.getElementById("password").value;

if(pass === "acordes2024"){

document.querySelector(".login-box").style.display="none";
document.getElementById("members").style.display="block";

}else{

alert("Senha incorreta");

}

}
