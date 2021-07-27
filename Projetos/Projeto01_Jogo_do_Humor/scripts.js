const imagem = document.getElementById('imagem')
const texto = document.getElementById('texto')
const botao = document.getElementById('botao')

function alterar(){
    if(botao.value == 'primeiro'){
        botao.value = 'segundo';
        texto.innerText = 'Nicolas Triste';
        imagem.src = 'img/triste.jpg';
    }
    else if(botao.value == 'segundo'){
        botao.value = 'terceiro';
        texto.innerText = 'Nicolas Apaixonado';
        imagem.src = 'img/apaixonado.jpg';
    }
    else if(botao.value == 'terceiro'){
        botao.value = 'quarto';
        texto.innerText = 'Nicolas Feliz';
        imagem.src = 'img/feliz.jpg';
    }
    else{
        botao.value = 'primeiro';
        texto.innerText = 'Super Nicolas Cage';
        imagem.src = 'img/superman.jpg'
    }
}