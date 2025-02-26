//Crear una función llamada "suma", que reciba como parámetros dos números enteros y devuelva como resultado
//otro número entero que sea la suma de ambos.

const botonesDiv = document.getElementById('botones');
const resultadoDiv = document.getElementById('resultado');


function suma(){
    let num1= parseFloat(prompt("ingrese un numero"));
    let num2= parseFloat(prompt("ingrse otro numero"));
    let resultado= num1+num2;
    resultadoDiv.innerHTML= "Este es el resultado:"+ resultado;
}

//Crear una función llamada "division", que reciba como parámetros dos números enteros y devuelva como
//resultado un número real, que sea el resultado de dividir el primer número entre el segundo (con decimales). 

const dividendoDiv = document.getElementById('dividendo'); 
const divisorDiv = document.getElementById('divisor');

function division(){
    let num1= parseFloat(prompt("Ingrese un numero"));
    let num2= parseFloat(prompt("ingrese otro numero"));
    let resultado= num1/num2;
    resultadoDiv.innerHTML= "Este es el resultado:"+ resultado;
}

//Crear una función llamada "letraRepetida", que reciba como parámetros una letra y un número, y escriba en
//pantalla esa letra repetida en pantalla varias veces (tantas como indique el número), sin devolver ningún valor. 

const caracterDiv = document.getElementById('caracter');
const vecesDiv = document.getElementById('veces');

function caracterRepetida(){
    let caracter = prompt("ingrese una letra:");
    let veces = parseInt(prompt("ingrese la cantidad de veces que se repita:"));
    resultadoDiv.innerHTML = ""; 
    for (let i = 1; i <= i < veces; i++){
    resultadoDiv.innerHTML= "Este es el resultado:"+ caracter;   
    }

}

botonesDiv.innerHTML += `
    <button class="btn btn-primary mt-2 mb-2" onclick="suma()">Funcion Suma</button>
    <button class="btn btn-primary mt-2 mb-2" onclick="division()">Funcion Division</button>
    <button class="btn btn-primary mt-2 mb-2" onclick="caracterRepetida()">Funcion Repetida</button>
`;
