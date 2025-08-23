// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; //Esta varibale alamecenara los nombres de los amigos que ingresara el ususario.

/* 
La siguiente función tiene como objetivo agregar el nombre que ingrese el usuario
al array "amigos", y a su vez valida que el campo no este vacio antes
de dar click en el boton "Añadir", al finalizar se limpia el campo de texto.
*/
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    
    if (amigo == "") {        
        alert("Por favor, ingrese un nombre.");

    } else {
        listaAmigos.push(amigo);
        document.getElementById("amigo").value = "";
    }
}