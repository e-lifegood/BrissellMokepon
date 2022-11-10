const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonPersonajeJugador = document.getElementById("boton-personaje")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none"

const sectionSeleccionarPersonaje = document.getElementById("secleccionar-personaje")

let spanpersonajeJugador = document.getElementById("personaje-jugador")
let spanPersonajeEnemigo = document.getElementById("personaje-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigos = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let kimetsuyis = []
let ataqueJugador
let ataqueEnemigo
let opcionDekimetsuyis
let inpuntTanjiro
let inputInosuke
let inputZenitsu
let prsnJugador
let ataquesKimetsuyis
let botonTierra
let botonAgua 
let botonFuego 
let vidasJugador = 3
let vidasEnemigo = 3

class Kimetsu {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let tanjiro = new Kimetsu('Tanjiro', './assets/2tanjiro.jpg', 5)

let inosuke = new Kimetsu('Inosuke', './assets/inosuke.jpg', 5)

let zenitsu = new Kimetsu('Zenitsu', './assets/zenitsu.jpg', 5)

tanjiro.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: '"boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
)

inosuke.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
)

zenitsu.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

kimetsuyis.push(tanjiro,inosuke,zenitsu)

function iniciarJuego() {    
    sectionSeleccionarAtaque.style.display = "none"

    kimetsuyis.forEach( (Kimetsu) => {
        opcionDekimetsuyis = `
        <input type="radio" name="personaje" id=${Kimetsu.nombre} />
        <label class="tarjeta-de-mokepon" for=${Kimetsu.nombre}>
            <p>${Kimetsu.nombre}</p>
            <img src=${Kimetsu.foto} alt=${Kimetsu.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDekimetsuyis

          inpuntTanjiro = document.getElementById("Tanjiro")
          inputInosuke = document.getElementById("Inosuke")
          inputZenitsu = document.getElementById("Zenitsu")
    })

    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador)    
    console.log (seleccionarPersonajeJugador) 
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarPersonajeJugador() {    
    sectionSeleccionarPersonaje.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"

    if (inpuntTanjiro.checked) {
        spanpersonajeJugador = document.getElementById("personaje-jugador").innerHTML = inpuntTanjiro.id
        prsnJugador = inpuntTanjiro.id
    }
    else if (inputInosuke.checked) {
        spanpersonajeJugador = document.getElementById("personaje-jugador").innerHTML = inputInosuke.id
        prsnJugador = inputInosuke.id
    }
    else if (inputZenitsu.checked) {
        spanpersonajeJugador.innerHTML = inputZenitsu.id
        prsnJugador = inputZenitsu.id
    }
    else {
        alert("Selecciona un personaje")
        return false;
    }

    extraerAtaques(prsnJugador)
    seleccionarPersonajeEnemigo()
}

function extraerAtaques(prsnJugador) {
    let ataques 
    for (let i = 0; i < kimetsuyis.length; i++) {
        if (prsnJugador === kimetsuyis[i].nombre) {
                ataques = kimetsuyis[i].ataques
        }
    }
    mostrarataques(ataques)
}


function  mostrarataques(ataques) {
    ataques.forEach((ataque) => {
        ataquesKimetsuyis = `
        <button id=${ataque.id} class="boton-de-ataque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesKimetsuyis
    })

    botonTierra = document.getElementById("boton-tierra")
    botonAgua = document.getElementById("boton-agua")
    botonFuego = document.getElementById("boton-fuego")
    

    botonFuego.addEventListener("click", ataqueFuego)    

    botonAgua.addEventListener("click", ataqueAgua) 
    
    botonTierra.addEventListener("click", ataqueTierra) 
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(1,3)
            
    spanPersonajeEnemigo.innerHTML = kimetsuyis[personajeAleatorio].nombre
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    }
    else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    }
    else {
        ataqueEnemigo = "TIERRA"
    }

    combate()
}

function combate() {   
    
    if(ataqueEnemigo === ataqueJugador) {
        crearMensaje("EMPATE")
    }
    else if(ataqueJugador === "FUEGO" && ataqueEnemigo === "TIERRA") {
        crearMensaje("GANASTE")
        vidasEnemigo-- 
        spanVidasEnemigos.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador === "AGUA" && ataqueEnemigo === "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo-- 
        spanVidasEnemigos.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador === "TIERRA" && ataqueEnemigo === "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo-- 
        spanVidasEnemigos.innerHTML = vidasEnemigo
    } 
    else {
        crearMensaje("PERDISTE")
        vidasJugador-- 
        spanVidasJugador.innerHTML = vidasJugador
    }

    Revisarvidas()
}

function Revisarvidas() {
    if (vidasEnemigo === 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🤪")
    }
    else if (vidasJugador === 0) {
        crearMensajeFinal("Lo siento, perdistes ☹️")
    }
}

function crearMensaje(resultado) {
        
        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueDelEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = ataqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

        //let parrafo = document.createElement("p")
        //parrafo.innerHTML = "Tu personaje atacó con " + ataqueJugador + ", el personaje del enemigo atacó con " + ataqueEnemigo + "- " + resultado

        ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML =  resultadoFinal
    
    botonFuego.disabled = true

    botonAgua.disabled = true
    
    botonTierra.disabled = true
   
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}
   
function aleatorio(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min) 
}


window.addEventListener("load", iniciarJuego)