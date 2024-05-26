let ipnum1 = document.querySelector('#ipnum1')
let ipnum2 = document.querySelector('#ipnum2')
let btoperacoes = document.querySelector('#btoperacoes')
let soma = document.querySelector('#soma')
let sub = document.querySelector('#sub')
let multi = document.querySelector('#multi')
let divi = document.querySelector('#divi')

function operações(){
    let num1 = Number(ipnum1.value);
    let num2 = Number(ipnum2.value);


    let adicao = num1 + num2;
    soma.textContent = String(adicao);

    let subtra = num1 - num2;
    sub.textContent = String(subtra);

    let multiplicacao = num1 * num2;
    multi.textContent = String(multiplicacao);

    let divisao = num1 / num2;
    divi.textContent = String(divisao);
}

btoperacoes.onclick = function(){
    operações();
}