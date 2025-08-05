let listaDeNome = []; 
function adicionarAmigo() {
    let input = document.getElementById('amigo')
    let nome = input.value.trim();
    if(nome!== '' ){
        listaDeNome.push(nome);
        input.value = '';
    }
}
function sortearAmigo() {
    if(listaDeNome.length == 0){
        alert('Lista está vazia!');
        return null;
    }
    let nomeAleatorio = Math.floor(Math.random()* listaDeNome.length);
    let amigoSorteado = listaDeNome[nomeAleatorio];
    console.log(amigoSorteado);
    return amigoSorteado;
} 