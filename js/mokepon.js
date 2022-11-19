const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonPersonajeJugador = document.getElementById("boton-personaje")
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = "none"

const sectionSeleccionarPersonaje = document.getElementById("secleccionar-personaje")

const spanPersonajeEnemigo = document.getElementById("personaje-enemigo")
const spanpersonajeJugador = document.getElementById("personaje-jugador")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigos = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

let kimetsuyis = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDekimetsuyis
let inpuntTanjiro
let inputInosuke
let inputZenitsu
let prsnJugador
let ataquesKimetsuyis
let ataquesKimetsuyiEnemigo
let botonTierra
let botonAgua 
let botonFuego 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo 

class Kimetsu {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
}

let tanjiro = new Kimetsu('Tanjiro', './assets/2tanjiro.jpg', 5)

let inosuke = new Kimetsu('Inosuke', './assets/inosuke.jpg', 5)

let zenitsu = new Kimetsu('Zenitsu', './assets/zenitsu.jpg', 5)

tanjiro.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
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
    sectionVerMapa.style.display = "none"

    kimetsuyis.forEach((kimetsu) => {
        opcionDekimetsuyis = `
        <input type="radio" name="personaje" id=${kimetsu.nombre} />
        <label class="tarjeta-de-kimetsu" for=${kimetsu.nombre}>
            <p>${kimetsu.nombre}</p>
            <img src=${kimetsu.foto} alt=${kimetsu.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDekimetsuyis

          inpuntTanjiro = document.getElementById("Tanjiro")
          inputInosuke = document.getElementById("Inosuke")
          inputZenitsu = document.getElementById("Zenitsu")
    })

    botonPersonajeJugador.addEventListener("click", seleccionarPersonajeJugador)    
    
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarPersonajeJugador() {    

    sectionSeleccionarPersonaje.style.display = "none"

    //sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "flex"
    iniciarMapa()

    if (inpuntTanjiro.checked) {
        spanpersonajeJugador.innerHTML = inpuntTanjiro.id
        prsnJugador = inpuntTanjiro.id
    }
    else if (inputInosuke.checked) {
        spanpersonajeJugador.innerHTML = inputInosuke.id
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
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataques) => {
        ataquesKimetsuyis = `
        <button id=${ataques.id} class="boton-de-ataque BAtaque">${ataques.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesKimetsuyis
    }) 

    botonTierra = document.getElementById("boton-tierra")
    botonAgua = document.getElementById("boton-agua")
    botonFuego = document.getElementById("boton-fuego")
    botones = document.querySelectorAll(".BAtaque")

    botonTierra.addEventListener("click", secuenciaAtaque)
    
    botonAgua.addEventListener("click", secuenciaAtaque) 

    botonFuego.addEventListener("click", secuenciaAtaque)    
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if (e.target.textContent === "🔥") {
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#6D9886"
                botonFuego.disabled = true
            } else if (e.target.textContent === "💧") {
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#6D9886"
                botonFuego.disabled = true
            } else {
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#6D9886"
                botonFuego.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}
    
function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(0, kimetsuyis.length -1)

    spanPersonajeEnemigo.innerHTML = kimetsuyis[personajeAleatorio].nombre
    ataquesKimetsuyiEnemigo = kimetsuyis[personajeAleatorio].nombre
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesKimetsuyiEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO")
    }
    else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA")
    }
    else {
        ataqueEnemigo.push("TIERRA")
    }

    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {   
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[index] === "FUEGO" && ataqueEnemigo[index] === "TIERRA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML  = victoriasJugador
        } else if (ataqueJugador[index] === "AGUA" && ataqueEnemigo[index] === "FUEGO") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML  = victoriasJugador
        } else if (ataqueJugador[index] === "TIERRA" && ataqueEnemigo[index] === "AGUA") {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML  = victoriasJugador 
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigos.innerHTML = victoriasEnemigo
        }
    }

    RevisarVictorias()
}

function RevisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("ESTO FUE UN EMPATE👺!!!")
    }
    else if (vidasJugador > victoriasEnemigo) {
        crearMensajeFinal("BUENA JUGADA, GANASTE👌")
    } else {
        crearMensajeFinal("MALAS ELEGIDAS, PERDISTE😑")
    }
}

function crearMensaje(resultado) {
        
        let nuevoAtaqueDelJugador = document.createElement("p")
        let nuevoAtaqueDelEnemigo = document.createElement("p")

        sectionMensajes.innerHTML = resultado
        nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
        nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

        //let parrafo = document.createElement("p")
        //parrafo.innerHTML = "Tu personaje atacó con " + ataqueJugador + ", el personaje del enemigo atacó con " + ataqueEnemigo + "- " + resultado

        ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
        ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML =  resultadoFinal

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}
   
function aleatorio(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min) 
}

function pintarPersonaje() {
    tanjiro.x = tanjiro.x + tanjiro.velocidadX
    tanjiro.y = tanjiro.y + tanjiro.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        tanjiro.mapaFoto,
        tanjiro.x,
        tanjiro.y,
        tanjiro.ancho,
        tanjiro.alto
    )
}

function moverDerecha() {
    tanjiro.velocidadX = 4
}

function moverIzquierda() {
    tanjiro.velocidadX = -4
}

function moverAbajo() {
    tanjiro.velocidadY = 4
}

function moverArriba() {
    tanjiro.velocidadY = -4
}

function detenerMovimiento() {
    tanjiro.velocidadX = 0
    tanjiro.velocidadY = 0
}

function presionDeTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break
        case "ArrowDown": 
            moverAbajo()
            break

        case "ArrowLeft":
            moverIzquierda()
            break
        
        case "ArrowRight":
            moverDerecha()
            break

        default:
            break;
    }
}

function iniciarMapa() {
    intervalo = setInterval(pintarPersonaje, 50)

    window.addEventListener("keydown", presionDeTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

window.addEventListener("load", iniciarJuego)