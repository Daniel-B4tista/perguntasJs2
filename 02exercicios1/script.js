let ipnumber = document.querySelector('#ipnumber')
let btcalcular = document.querySelector('#btcalcular')
let variacao1 = document.querySelector('#variacao1')
let variacao2 = document.querySelector('#variacao2')
let variacao5 = document.querySelector('#variacao5')
let variacao10 = document.querySelector('#variacao10')

function variações(){
    let dolar = Number(ipnumber.value);

    let um = dolar * (1/100) + dolar;
    variacao1.textContent = String(um)
    let dois = dolar * (2/100) + dolar;
    variacao2.textContent = String(dois)
    let cinco = dolar * (5/100) + dolar;
    variacao5.textContent = String(cinco)
    let dez = dolar * (10/100) + dolar;
    variacao10.textContent = String(dez)
    }

    btcalcular.onclick = function(){
        variações();
    }