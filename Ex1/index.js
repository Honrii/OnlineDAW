
//TAREA #1

var arrayNumeros = [];
var arrayPares = [];
var arrayImpares = [];
var result = 0;

function getNum() {
  var numero = document.getElementById("num").value;
  if (!arrayNumeros.includes(numero)) {
    console.log("");
    arrayNumeros.push(numero);
    for (let i = 0; i < arrayNumeros.length; i++) {
      document.getElementById("numbersToSum").innerHTML = arrayNumeros;
    }
  } else {
    console.log("REPETIDO");
  }

  console.log(arrayNumeros);
}

function getResult() {
  var num;
  for (let i = 0; i < arrayNumeros.length; i++) {
    num = arrayNumeros[[i]];

    if (num % 2 == 0) {
      arrayPares.push(num);
    } else {
      arrayImpares.push(num);
    }
    // console.log("Pares: "+arrayPares);
    // console.log("Impares: "+arrayImpares);
  }
  sumarPar();
  sumarImpar();
  result = sumarPar() - sumarImpar();
  console.log("Resultado Final " + result);
  document.getElementById("result").value = result;
  listNum();
}

function sumarPar() {
  const sumaPar = arrayPares.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  });
  return parseInt(sumaPar);
}

function sumarImpar() {
  const sumaImpar = arrayImpares.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  });
  return parseInt(sumaImpar);
}

//TAREA #2

function listNum() {
  document.getElementById("selector").innerHTML = "";
  for (var i in arrayNumeros) {
    document.getElementById("selector").innerHTML +=
      "<option value=='" +
      arrayNumeros[i] +
      "'>" +
      arrayNumeros[i] +
      "</option>";
  }
}

function deleteNum() {
  var arrayActua = [];
  let num = document.getElementById("selector").value;
  var defNum = num.split(/(\d)/);
  var defdefNUM = defNum[1];
  var index = arrayNumeros.indexOf(defdefNUM);
  arrayActua = arrayNumeros.splice(index, 1);
  console.log("Array Actualizado " + arrayNumeros);
  listNum();
}
