"use strict"
function calcularImc() {
    var imc,peso, estatura = "";
    peso = document.getElementById("lpeso").value; 
    estatura = document.getElementById("lestatura").value;
    imc = (parseInt(peso) / (parseInt(estatura) * parseInt(estatura)));
    return imc; 
};

function calculoEstadoFisico() {
    var edad, imc, actividad  = "";
    edad = document.getElementById("ledad").value;
    actividad = document.getElementById("selector").value;
    imc = calcularImc();
    if (imc < 18.5) {
        alert("Imc: " + imc + "\n" + "Actividad: " + actividad + "\n" +
        "Se encuentra en bajo peso"); 
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Imc: " + imc + "\n" +  "Actividad: " + actividad + "\n" +
        "Se encuentra en peso normal");
    } else if (imc > 24.9 && imc <= 29.9) {
        alert("Imc: " + imc + "\n" +  "Actividad: " + actividad + "\n" +
        "Se encuentra en sobrepeso");
    } else if (imc >= 30 && imc <= 34.9) {
        alert("Imc: " + imc + "\n" + "Actividad: " + actividad + "\n" +
        "Se encuentra en obesidad tipo I");
    } else if (imc >= 35 && imc <= 39.9) {
        alert("Imc: " + imc + "\n" + "Actividad: " + actividad + "\n" +
        "Se encuentra en obesidad tipo II");
    } else {
        alert("Imc: " + imc + "\n" + "Actividad: " + actividad + "\n" + 
        "Se encuentra en obesidad tipo III");
    }
};