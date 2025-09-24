import "bootstrap";
import "./style.css";

window.onload= function () {
const picas = "assets/img/picas-removebg-preview.png";
const corazones = "assets/img/corazones-removebg-preview.png";
const rombos = "assets/img/rombos-removebg-preview.png";
const trebol = "assets/img/trebol-removebg-preview.png";

const numeroCarta = document.getElementsByClassName("numero");
const paloArriba = document.querySelector(".paloArriba img");
const paloAbajo = document.querySelector(".paloAbajo img");
const btnAleatorio = document.getElementById("btnAleatorio");
const btnTemporizador = document.getElementById("btnTemporizador");
const temporizadorSegundos = document.getElementById("temporizador");
const inputAlto=document.getElementById("estableceAlto");
const inputAncho=document.getElementById("estableceAncho");
const carta=document.querySelector(".tarjeta");
let intervalo;



function paloAleatorio() {
    let palosArr = [picas, corazones, rombos, trebol];
    let num = Math.floor(Math.random() * 4)
    paloArriba.src = palosArr[num];
    paloAbajo.src = palosArr[num];
}
function valorCartaAleatorio() {
    let valorCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let num = Math.floor(Math.random() * valorCarta.length);
    numeroCarta[0].textContent = valorCarta[num]


}

function todoAleatorio() {
    valorCartaAleatorio();
    paloAleatorio();

}

function iniciarTemporizador() {
    let seconds = 10;

    clearInterval(intervalo);

    intervalo = setInterval(() => {
        if (seconds === 0) {
            todoAleatorio();
            seconds = 10;
            clearInterval(intervalo)
        }
        else { seconds-- }
        temporizadorSegundos.textContent = seconds;

    }, 1000);

}


function cambiarAncho(e) {
   if (e.key=="Enter") carta.style.width= e.target.value+"px";
    
}
function cambiarAlto(e) {
   if (e.key=="Enter") carta.style.height= e.target.value+"px";
    
}


btnAleatorio.addEventListener('click', todoAleatorio);
btnTemporizador.addEventListener('click', iniciarTemporizador);
inputAncho.addEventListener('keydown', cambiarAncho)
inputAlto.addEventListener('keydown', cambiarAlto)

}

