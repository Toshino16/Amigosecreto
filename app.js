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
    let nomeAleatorio = Math.floor(Math.random()* listaDeNome.length);
    return listaDeNome[nomeAleatorio];
} 
console.log(listaDeNome);