let listaDeNome = []; 
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    if(nome!== '' ){
        listaDeNome.push(nome);
        input.value = '';
    }
}
function sortearAmigo() {
    if(listaDeNome.length == 0){;
        return null;
    }else {       
        let nomeAleatorio = Math.floor(Math.random()* listaDeNome.length);
        let amigoSorteado = listaDeNome[nomeAleatorio];
        let resultado = document.querySelector('ul');
        resultado.innerHTML = `Nome Sorteado é ${amigoSorteado}`;
    }
}