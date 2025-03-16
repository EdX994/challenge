let listaAmigos =[];
let mostrarAmigos = document.getElementById("listaAmigos");
const pattern = new RegExp('^[A-Z]+$', 'i')

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    let nombreAmigoVal = validarNombre(nombreAmigo);
    if (nombreAmigoVal == "" || !pattern.test(nombreAmigoVal) || !isNaN(nombreAmigoVal) ) {
        alert("Por favor, ingrese un nombre válido.");
    } 
    else if (listaAmigos.includes(nombreAmigoVal)){
        alert("¡Error! Este nombre ya existe");
        limpiarCaja();
        
    } else {
        listaAmigos.push(nombreAmigoVal);
        mostrarAmigos.innerHTML += `<li>${nombreAmigoVal}</li>`;
        limpiarCaja();
    }        
}

function sortearAmigo() {
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    let ganadorSorteo = listaAmigos[amigoSorteado];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto sorteado es: " + ganadorSorteo;
    mostrarAmigos.innerHTML = ""
}

function limpiarCaja(){
    document.querySelector('#amigo').value = "";
    return;
}

function validarNombre(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}