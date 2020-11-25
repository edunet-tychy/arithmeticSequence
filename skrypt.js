const btn = document.getElementById("btn");
const op = document.getElementsByName("opcja")
const form = document.getElementsByName("formularz");
const wy = document.getElementById("wy");

btn.onclick = function(e){

    e.preventDefault();

    wy.innerText="Ciąg arytmetyczny zawiera wyrazy:";

    let lb1 = form[0][0].value * 1;
    let lb2 = form[0][1].value * 1;
    let lb3 = form[0][2].value * 1;

    let wynik=lb1;
    wy.innerText += ` ${wynik}`;

    for(let i=1; i < lb3 ; i++){
        wynik=lb1 + lb2;
        wy.innerText += ` ${wynik}`;
        lb1=wynik;
    }
}
