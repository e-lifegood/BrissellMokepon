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
const anchoMaximoMapa  = 400

let jugadorId = null
let kimetsuyis = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDekimetsuyis
let inpuntTanjiro
let inputInosuke
let inputZenitsu
let prsnJugador
let personajeDelJugador
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
let pintarKimetsuyi
let lienzo = mapa.getContext("2d")
let intervalo 
let mapaBackground = new Image() 
mapaBackground.src = "../assets/mapa832x432.png" 
lienzo.scale(2, 1.7)
let alturaQueBusacamos
let anchoDelMapa = window.innerWidth - 20

if(anchoDelMapa > anchoMaximoMapa) {
    anchoDelMapa = anchoMaximoMapa - 20 
}

alturaQueBusacamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBusacamos

class Kimetsu {
    constructor(nombre, foto, vida, fotoMapa) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 45
        this.alto = 45
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarKimetsuyi() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let tanjiro = new Kimetsu('Tanjiro', './assets/tanjiro.png', 5, './assets/tanjiro.png')

let inosuke = new Kimetsu('Inosuke', './assets/inosuke.png', 5, './assets/inosuke.png')

let zenitsu = new Kimetsu('Zenitsu', './assets/zenitsuV2.png', 5, './assets/zenitsuV2.png')

const TANJIRO_ATAQUES = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' }
]
tanjiro.ataques.push(...TANJIRO_ATAQUES)

tanjiroEnemigo.ataques.push(TANJIRO_ATAQUES)

const INOSUKE_ATAQUES = [
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' }
]

inosuke.ataques.push(...INOSUKE_ATAQUES)

inosukeEnemigo.ataques.push(...INOSUKE_ATAQUES)

const ZENITSU_ATAQUES = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' }
]

zenitsu.ataques.push(...ZENITSU_ATAQUES)

zenitsuEnemigo.ataques.push(...ZENITSU_ATAQUES)

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

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text() 
                    .then(function (respuesta) {
                    console.log(respuesta)
                    jugadorId = respuesta
                })
            }
        })
}

function seleccionarPersonajeJugador() {    

    sectionSeleccionarPersonaje.style.display = "none"

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

    seleccionarKimetsu(prsnJugador)

    extraerAtaques(prsnJugador)
    iniciarMapa()
    sectionVerMapa.style.display = "flex"
}

function seleccionarKimetsu(prsnJugador) {
    fetch(`http://localhost:8080/kimetsu/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            kimetsu: prsnJugador
        })
    })
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

function pintarCanva() {
    personajeDelJugador.x = personajeDelJugador.x + personajeDelJugador.velocidadX
    personajeDelJugador.y = personajeDelJugador.y + personajeDelJugador.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)

    lienzo.drawImage(
       mapaBackground,
       0,
       0,
       mapa.width,
       mapa.height
    )

    personajeDelJugador.pintarKimetsuyi()

    enviarPosicion(personajeDelJugador.x, personajeDelJugador.y)

    tanjiroEnemigo.pintarKimetsuyi()
    zenitsuEnemigo.pintarKimetsuyi()
    inosukeEnemigo.pintarKimetsuyi()

    if(
        obtenerPersonaje.velocidadX !== 0 || obtenerPersonaje.velocidadY !== 0
    ) {
        revisarColision(tanjiroEnemigo)
        revisarColision(inosukeEnemigo)
        revisarColision(zenitsuEnemigo)
    }
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/kimetsu/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.js()
                .then(function ({ enemigos }) {
                    console.log(enemigos)
                    enemigos.forEach(function (enemigo) {
                        let kimetsuyiEnemigo = null 
                        const kimetsuNombre = enemigo.kimetsu.nombre || ""
                        if (kimetsuNombre === "Tanjiro") {
                            kimetsuyiEnemigo = new Kimetsu('Tanjiro', './assets/tanjiro.png', 5, './assets/tanjiro.png')
                        }
                        else if (kimetsuNombre === "Inosuke") {
                            kimetsuyiEnemigo = new Kimetsu('Inosuke', './assets/inosuke.png', 5, './assets/inosuke.png')
                        }
                        else if (kimetsuNombre === "Zenitsu") {
                           kimetsuyiEnemigo = new Kimetsu('Zenitsu', './assets/zenitsuV2.png', 5, './assets/zenitsuV2.png')
                        }

                        kimetsuyiEnemigo.pintarKimetsuyi()
                    })
            })
        }
    })
}

function moverDerecha() {
    personajeDelJugador.velocidadX = 4
}

function moverIzquierda() {
    personajeDelJugador.velocidadX = -4
}

function moverAbajo() {
    personajeDelJugador.velocidadY = 4
}

function moverArriba() {
    personajeDelJugador.velocidadY = -4
}

function detenerMovimiento() {
    personajeDelJugador.velocidadX = 0
    personajeDelJugador.velocidadY = -0
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
    personajeDelJugador = obtenerPersonaje(prsnJugador)
    intervalo = setInterval(pintarCanva, 50)

    window.addEventListener("keydown", presionDeTecla)

    window.addEventListener("keyup", detenerMovimiento)
}

function obtenerPersonaje() {
    for (let i = 0; i < kimetsuyis.length; i++) {
        if (prsnJugador === kimetsuyis[i].nombre) {
            return kimetsuyis[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaPersonaje = obtenerPersonaje.y
    const abajoPersonaje = obtenerPersonaje.y + obtenerPersonaje.alto
    const derechaPersonaje = obtenerPersonaje.x + obtenerPersonaje.ancho
    const izquierdaPersonaje = obtenerPersonaje.x

    if(
        abajoPersonaje < arribaEnemigo ||
        arribaPersonaje > abajoEnemigo ||
        derechaPersonaje < izquierdaEnemigo ||
        izquierdaPersonaje > derechaEnemigo
    ) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = "none"
    sectionVerMapa.style.display = "flex"
    seleccionarPersonajeEnemigo()
}

window.addEventListener("load", iniciarJuego)