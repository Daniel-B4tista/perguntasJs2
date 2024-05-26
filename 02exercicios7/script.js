let ipUm = document.querySelector('#ipUm');
let ipDois = document.querySelector('#ipDois');
let btComparar = document.querySelector('#btComparar');

function comparar(){
    let numero1 = Number(ipUm.value);
    let numero2 = Number(ipDois.value);

    if (numero1 > numero2){
        alert('primeiro número é maior')
    } else if (numero1 = numero2){
        alert('Os dois tem o mesmo valor')
    } else{
        alert('O segundo número é o maior')
    }
}

btComparar.onclick = function(){
    comparar();
}