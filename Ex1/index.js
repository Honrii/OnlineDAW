var arrayNumeros = [];
var arrayPares = [];
var arrayImpares = [];
var result = 0;

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
    // restaTotal();
    result = sumarPar() - sumarImpar();   
    console.log("Resultado Final "+ result)
    document.getElementById("result").value = result;
    cargarNumeros();
}
function sumarPar(){

    const sumaPar = arrayPares.reduce(function(a, b){return parseInt(a) + parseInt(b);},);
    console.log(sumaPar);
    return parseInt(sumaPar);
}
function sumarImpar(){

    const sumaImpar = arrayImpares.reduce(function(a, b){return parseInt(a) + parseInt(b);});
    console.log(sumaImpar);
    return parseInt(sumaImpar);
}

//TAREA #2

function cargarNumeros(){
    document.getElementById('selectNum').innerHTML = "";
    for (var i in arrayNumeros){
        document.getElementById('selectNum').innerHTML += "<option value=='"+arrayNumeros[i]+"'>"+arrayNumeros[i]+"</option>";
    } 
}

function borrarNumero(){
    var arrayActua =[];
    let num = document.getElementById('selectNum').value;
    console.log("numerosSelct"+num);
    // parseInt(num);
    console.log("parseao: "+num);
    var defNum  = num.split(/(\d)/);
    var defdefNUM = defNum[1]
    

   

   console.log(defdefNUM);
    
    
    // let num2 = parseInt(num);
    // console.log(num2);

    var index = arrayNumeros.indexOf(defdefNUM);
    console.log(index);
    arrayActua = arrayNumeros.splice(index, 1);
    
    console.log(arrayNumeros);
   
  cargarNumeros()  
}

