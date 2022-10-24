var arrayNumeros = [];

function getNum() {
    var numero = document.getElementById("num").value;
    if(!arrayNumeros.includes(numero)){

        console.log("");
        arrayNumeros.push(numero);
        for(let i = 0; i<arrayNumeros.length; i++){
            document.getElementById("numbersToSum").innerHTML = arrayNumeros;
       }
    }else{
        console.log("REPETIDO");
    }
   
    console.log(arrayNumeros);
    // console.log(numero);
}
var arrayPares = [];
var arrayImpares = [];

function getResult() {
    var num;
    for (let i = 0; i < arrayNumeros.length; i++){
        
        // console.log(arrayNumeros[i]);
        num = arrayNumeros[[i]]
        // console.log("el num es: "+ num);
        if(num%2==0){
            arrayPares.push(num);
        
        }else{
            arrayImpares.push(num);
           
        }
        console.log("Pares: "+arrayPares);
        console.log("Impares: "+arrayImpares);
    }
    sumarPar();
    sumarImpar();
    restaTotal();
    
}
function sumarPar(){

    const sumaPar = arrayPares.reduce(function(a, b){return parseInt(a) + parseInt(b);},);
    console.log(sumaPar);
}
function sumarImpar(){

    const sumaImpar = arrayImpares.reduce(function(a, b){return parseInt(a) + parseInt(b);});
    console.log(sumaImpar);
}
function restaTotal( sumaPar, sumaImpar){
    console.log(sumaPar);
    console.log(sumaImpar);
    
    resta = parseInt(sumaPar) - parseInt(sumaImpar)
    console.log("Reault total"+parseInt(resta));
}
