let ipNota = document.querySelector('#ipNota');
let btPassei = document.querySelector('#btPassei');

function passarAno(){
    let nota = Number(ipNota.value);

    if (nota >= 6){
        alert('Aprovado');
    } else if (nota > 4 && nota < 6){
        alert('precisa fazer prova substitutiva');
    } else {
        alert('reprovado');
    }
   
}

btPassei.onclick = function(){
    passarAno();
}