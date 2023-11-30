import {ref, onValue, set} from 'firebase/database';
import { basededatos } from './conexionBaseDatos';
let valores = document.querySelector(".valores");

const dbRef = ref(basededatos, 'Sensor');

onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    let colorValor = data.color;
    let fecha = new Date();
    let hora = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    let distanciaValor = data.distancia;
    let row = document.createElement("div");
    let pColor = document.createElement("p");
    pColor.textContent = "Color: " + (colorValor == 1 ? "Azul" : colorValor == 2 ? "Rojo" : "Verde");
    let pDistancia = document.createElement("p");
    pDistancia.textContent = "Distancia " + distanciaValor;
    let pHora = document.createElement("p");
    pHora.textContent = "Hora: " + hora;
    row.appendChild(pColor);
    row.appendChild(pDistancia);
    row.appendChild(pHora);
    valores.appendChild(row);
    //colorElement.textContent = colorElement.textContent + " " + (colorValor == 1 ? "Azul" : colorValor == 2 ? "Rojo" : "Verde");
    console.log(colorValor);
})