
let personajeActual = "normal"; //Variable para poder determinar las máscaras
//Cada vez que se encarne una raza, se cambiará para que el personaje actual coincida. Si se vuelve a seleccionar la máscara, entonces la verificación hace que se active la función desencarnar, regresando a Link a su estado original.
//Cada función encarnar es para una raza, modificando la apariencia del personaje y el fondo. 

function encarnarDeku() {
  if (personajeActual === "deku") {
    desencarnar();
    return;
  }

  document.getElementById("personaje").src = "img/Link/Deku.webp";
    document.getElementById("personaje").style.width = "30vh";
  document.querySelector(".background").style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/Fondo/DekuPalace.webp')";
  personajeActual = "deku";
}

function encarnarGoron() {
  if (personajeActual === "goron") {
    desencarnar();
    return;
  }

  document.getElementById("personaje").src = "img/Link/Goron.png";
    document.getElementById("personaje").style.width = "30vh";
  document.querySelector(".background").style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/Fondo/SnowHead.webp')";
  personajeActual = "goron";
}

function encarnarZora() {
  if (personajeActual === "zora") {
    desencarnar();
    return;
  }

  document.getElementById("personaje").src = "img/Link/Zora.png";
  document.getElementById("personaje").style.width = "60vh";
  document.querySelector(".background").style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/Fondo/GreatBay.webp')";
  personajeActual = "zora";
}

function encarnarFieraDeidad() {
  if (personajeActual === "fiera") {
    desencarnar();
    return;
  }

  document.getElementById("personaje").src = "img/Link/Fiera_Deidad.webp";
    document.getElementById("personaje").style.width = "30vh";
  document.querySelector(".background").style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/Fondo/Moon.jpg')";
  personajeActual = "fiera";
}

function desencarnar() {
  document.getElementById("personaje").src = "img/Link/Link.png";
  document.getElementById("personaje").style.width = "30vh";
  document.querySelector(".background").style.backgroundImage =
    "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/Fondo/ClockTown.webp')";
  personajeActual = "normal";
}
