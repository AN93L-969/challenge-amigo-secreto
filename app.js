// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //Esta varibale alamecenara los nombres de los amigos que ingresara el ususario.

/* 
La siguiente función tiene como objetivo agregar el nombre que ingrese el usuario
al array "amigos", y a su vez valida que el campo no este vacio antes
de dar click en el boton "Añadir", al finalizar se limpia el campo de texto.
*/
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    
    if (amigo == "") {  
        //Mostrara un mensaje de alerta si el campo esta vacio      
        alert("Por favor, ingrese un nombre.");

    } else {
        //Sino, se agregara el nombre al array.
        amigos.push(amigo);
        actualizarLista(amigos); //Se implementa la función para actualizar la lista en el HTML.
        document.getElementById("amigo").value = "";
    }
}

/* 
El objetivo de la siguiente función es actualizar la lista de los amigos
cada vez que el usuario ingrese un nuevo nombre, para ello se recorre el array
y se va agregando cada nombre a la lista en el HTML.
*/
function actualizarLista(lista) {
    let contenidoLista = document.getElementById("listaAmigos");
    contenidoLista.innerHTML = ""; //Se limpia la lista antes de actuañizar para evitar redundancias.

    for (let i = 0; i < lista.length; i++) {
        contenidoLista.innerHTML += `<li>${lista[i]}</li>`;
    }
}

/* 
El objetivo de la siguiente función es sortear de manera aletoria
uno de los nombres que contiene el array "amigos", con de la función
math.random() y math.floor() se generara un número aleatorio el cual
se lo asignaremos a un indice del array para luego mostrar el nombre
sorrteado en el HTML.
*/
function sortearAmigo() {
    //Validamos que el array no este vacio.
     if (amigos.length == 0) {
        alert("No hay amigos listados para sortear.");
     }else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
     }
}