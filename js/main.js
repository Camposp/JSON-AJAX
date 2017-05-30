"use strict";

var inputName = document.querySelector(".form-name");
var btnMenu = document.querySelector(".btn-menu");
var nameBack = document.querySelector(".nameBack");
var foto = document.querySelector(".fotoBack");
var numeroDeRepositorios = document.querySelector(".repoBack");


function sendBack(event) {
  event.preventDefault();

  var request = new XMLHttpRequest();
  request.open("GET", "https://api.github.com/users/" + inputName.value, true);

  request.onload = function() {
    console.log('foo');
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      nameBack.innerHTML = data.name;
      foto.innerHTML = '<img src ="' + data.avatar_url + '">';
      numeroDeRepositorios.innerHTML = data.public_repos;

    } else {
      console.log("Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor");
    }

  };

  request.onerror = function() {
    console.log("Error al tratar de conectarse con el servidor");
  };

  request.send();

}
btnMenu.addEventListener("click", sendBack);
