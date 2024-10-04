function recebeDadoDeLogin() {
    // Obtém todos os elementos com a classe 'boxLog'
    let inputs = document.querySelectorAll('.boxLog');

    // Pega os valores dos inputs
    let email = inputs[0].value;
    let senha = inputs[1].value;

    //retorna os dados adicionados no input
    console.log(`usuario: ${email} senha: ${senha}`);

    // Define os valores esperados
    const emailEsperado = "funfa";
    const senhaEsperada = "prf";

    // Verifica se os valores são os esperados
    if (email === emailEsperado && senha === senhaEsperada) {
        // Redireciona para a nova página desejada
        window.location.href = "feed.html"; // Substitua "nova_pagina.html" pelo caminho da nova página
    } else {
        // Exibe uma mensagem de erro
        alert("Usuário ou senha incorretos!");
    }
}

/*
let postagem = {
    titulo: 'a',
    mesangem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios : [
        { autor: 'a',mesangem:'b' },
        { autor: 'a', mesangem:'b'}
    ],
    estaAoVivo:true
}
*/
//console.log(postagem);

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem)