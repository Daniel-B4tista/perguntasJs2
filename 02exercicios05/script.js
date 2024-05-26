let ipNome1 = document.querySelector('#ipNome1');
let ipData1 = document.querySelector('#ipData1');
let ipNome2 = document.querySelector('#ipNome2');
let ipData2 = document.querySelector('#ipData2');
let ipNome3 = document.querySelector('#ipNome3');
let ipData3 = document.querySelector('#ipData3');
let btIdade = document.querySelector('#btIdade');
let primeiro = document.querySelector('#primeiro');
let segundo = document.querySelector('#segundo');
let terceiro = document.querySelector('#terceiro');


let um = (ipData1 - 2024);
let dois = (ipData2 - 2024);
let tres = (ipData3 - 2024);

function maisVelho(){
    if (um > dois && um > tres){
        primeiro.textContent = ipNome1;
    } else if (dois > um && dois > tres){
        primeiro.textContent = ipNome2;
    } else if (tres > um && tres > dois){
        primeiro.textContent = ipNome3;
    }
}
function segundoVelho(){
    if (um > dois && um > tres){
        segundo.textContent = ipNome1;
    } else if (dois > um && dois > tres){
        segundo.textContent = ipNome2;
    } else if (tres > um && tres > dois){
        segundo.textContent = ipNome3;
    }
}
function terceiroVelho(){
    if (um > dois && um > tres){
        terceiro.textContent = ipNome1;
    } else if (dois > um && dois > tres){
        terceiro.textContent = ipNome2;
    } else if (tres > um && tres > dois){
        terceiro.textContent = ipNome3;
    }
}

btIdade.onclick = function(){
    maisVelho();
    segundoVelho();
    terceiroVelho();
}

