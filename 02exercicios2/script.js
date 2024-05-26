let ippessoas = document.querySelector('#ippessoas');
let btIngredientes = document.querySelector('#btIngredientes');
let ingredientes = document.querySelector('#ingredientes');

function receita(){
    let pessoas = Number(ippessoas.value);
    
    let receita = (pessoas * 2) + 'ovos e ';

    let queijo = (pessoas * 50) + 'g de queijo ralado';

    ingredientes.textContent = String(receita + queijo);
    }

    btIngredientes.onclick = function(){
        receita();
    }