let ip1 = document.querySelector('#ip1');
let ip2 = document.querySelector('#ip2');
let ip3 = document.querySelector('#ip3');
let ip4 = document.querySelector('#ip4');
let ip5 = document.querySelector('#ip5');
let vlTotal = document.querySelector('#vlTotal');
let btfinal = document.querySelector('#btfinal');

function valorfinal(){
    let vlpizza = 48;
    let refri = Number(ip5.value);
    let vlrefri = refri * 7;

    let total = vlpizza + vlrefri ;

    let sabor1 = String(ip1.textContent);
    let sabor2 = String(ip2.textContent);
    let sabor3 = String(ip3.textContent);
    let sabor4 = String(ip4.textContent);

    let sabores = sabor1 + sabor2 + sabor3 + sabor4;

    vlTotal.textContent = sabores;

}

btfinal.onclick = function(){
    valorfinal();
}
