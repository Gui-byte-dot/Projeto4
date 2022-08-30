let qtdeCartas = Number(prompt('Quantas cartas você precisa?'));
let tiposdeimagem = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
let novo = ["bobrossparrot.gif", "bobrossparrot.gif", "explodyparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "metalparrot.gif", "revertitparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "tripletsparrot.gif", "unicornparrot.gif", "unicornparrot.gif"]
let baralho = document.querySelector('.cards');
let indice = 0;
let array = [];
let jogadas = 0;
let cartasviradas = 0;
let segundos = 0;
let minutos = 0;
let qtde = qtdeCartas / 2;
let imagens2 = [];

let time = setInterval(function () {
    segundos++;
    if (segundos == 60) {
        minutos++;
        segundos = 0;
        document.getElementById('minute').innerHTML = minutos
    }
    document.getElementById('second').innerHTML = segundos
}

    , 1000)


for(let j = 0; j < novo.length; j++){
    if(novo.indexOf(novo[j]) < qtdeCartas){
        imagens2.push(novo[j])}}

function comparador() {
    return Math.random() - 0.5;
}

let imagens3 = imagens2.sort(comparador);                 



while ((qtdeCartas < 4) || (qtdeCartas > 14) || isNaN(qtdeCartas) === true || (qtdeCartas % 2 !== 0)) {
    qtdeCartas = Number(prompt('Quantas cartas você precisa?'));
}

while (qtdeCartas > indice) {
    baralho.innerHTML +=
        `<li> 
                <div class="card" onclick="virarCarta(this)">
                    <img src="front1.png" class="ola"/>
                    <img src="${imagens3[indice]}" class="escondido"/>
                </div>
        </li>`;
    indice++;
}





function virarCarta(element) {
    element.children[1].classList.remove('escondido');
    element.children[0].classList.add('escondido');





    jogadas++;
    array.push(element);
    setTimeout(function () {
        if (jogadas % 2 === 0) {
            for (let k = 0; k < array.length; k++) {
                if (array[0].innerHTML !== array[1].innerHTML) {
                    console.log(array[0].children[1]);
                    console.log(array[1].children[1]);

                    array[0].children[0].classList.remove('escondido');
                    array[0].children[1].classList.add('escondido');
                    array[1].children[0].classList.remove('escondido');
                    array[1].children[1].classList.add('escondido');
                    array.splice(0, 2);

                } else {
                    array.splice(0, 2);
                    cartasviradas++;
                    console.log(cartasviradas);
                    if (cartasviradas === qtdeCartas / 2) {
                        clearInterval(time);
                        if (minutos === 0) {
                            alert(`Parabéns! Você concluiu em ${jogadas / 2} jogadas e em ${segundos} segundos`);
                        } else if (minutos === 1) {
                            alert(`Parabéns! Você concluiu em ${jogadas / 2} jogadas e em ${minutos} minuto e ${segundos} segundos`);
                        } else if (minutos > 1) {
                            alert(`Parabéns! Você concluiu em ${jogadas / 2} jogadas e em ${minutos} minutos e ${segundos} segundos`);
                        }
                        let pergunta = prompt('Gostaria de reiniciar a partida?')
                        if (pergunta === 'sim') {
                            location.reload();
                        }
                    }
                }
            }
        }
    }, 1000);

}



