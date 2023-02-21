const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')
const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVidasEnemigos = document.getElementById('vidas-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let kimetsuyis = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeKimetsuyis
let inputTanjiro
let inputInosuke
let inputZenitsu
let personajeJugador
let personajeJugadorObjeto
let ataquesKimetsuyis
let ataqueKimetsuyiEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mapaV2.jpg'

class Kimetsu {
    constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 70 
        this.alto = 80
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

let tanjiro = new Kimetsu('Tanjiro', './assets/tanjiro.png', 5, './assets/TCABEZA.png')

let inosuke = new Kimetsu('Inosuke', './assets/inosuke.png', 5, './assets/ICABEZA.png')

let zenitsu = new Kimetsu('Zenitsu', './assets/zenitsu.png', 5, './assets/ZCABAEZA2.png')

let tanjiroEnemigo = new Kimetsu('Tanjiro', './assets/tanjiro.png', 5, './assets/TCABEZA.png', 90, 120)

let inosukeEnemigo = new Kimetsu('Inosuke', './assets/inosuke.png', 5, './assets/ICABEZA.png', 280, 40)

let zenitsuEnemigo = new Kimetsu('Zenitsu', './assets/zenitsu.png', 5, './assets/ZCABAEZA2.png', 210, 195)

tanjiro.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'}
)

inosuke.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'}
)

zenitsu.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'}
)

kimetsuyis.push(tanjiro, inosuke, zenitsu)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'    
    sectionVerMapa.style.display = 'none'

    kimetsuyis.forEach((kimetsu) => {
        opcionDeKimetsuyis = `
        <input type="radio" name="personaje" id=${kimetsu.nombre} />
        <label class="tarjeta-de-kimetsu" for=${kimetsu.nombre}>
            <p>${kimetsu.nombre}</p>
            <img src=${kimetsu.foto} alt=${kimetsu.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeKimetsuyis

        inputTanjiro = document.getElementById('Tanjiro')
        inputInosuke = document.getElementById('Inosuke')
        inputZenitsu = document.getElementById('Zenitsu')
    })
    
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
        
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPersonajeJugador() {
    
    sectionSeleccionarPersonaje.style.display = 'none'
    //sectionSeleccionarAtaque.style.display = 'flex'

    if (inputTanjiro.checked) {
        spanPersonajeJugador.innerHTML = inputTanjiro.id
        personajeJugador = inputTanjiro.id
    }
    else if (inputInosuke.checked) {
        spanPersonajeJugador.innerHTML = inputInosuke.id
        personajeJugador = inputInosuke.id
    }
    else if (inputZenitsu.checked) {
        spanPersonajeJugador.innerHTML = inputZenitsu.id
        personajeJugador = inputZenitsu.id
    }
    else {
        alert('Selecciona un personaje ._.')
    }

    extraerAtaques(personajeJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    seleccionarPersonajeEnemigo()
}

function extraerAtaques(personajeJugador) {
    let ataques 
    for (let i = 0; i < kimetsuyis.length; i++) {
        if (personajeJugador === kimetsuyis[i].nombre) {
                ataques = kimetsuyis[i].ataques
        }
    }

    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesKimetsuyis = `
        <button id=${ataque.id} class="boton-de-ataque BAtaques">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesKimetsuyis
    })

     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra') 
     botones = document.querySelectorAll('.BAtaques')     
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#C3ACD0'
                boton.disabled = true
            }
            else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#C3ACD0'
                boton.disabled = true
            }
            else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#C3ACD0'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(0, kimetsuyis.length -1)

    spanPersonajeEnemigo.innerHTML = kimetsuyis[personajeAleatorio].nombre
    ataqueKimetsuyiEnemigo = kimetsuyis[personajeAleatorio].nombre

    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataqueKimetsuyiEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
        ataqueEnemigo.push('FUEGO')
    }
    else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    }
    else {
        ataqueEnemigo.push('TIERRA')      
    }

    console.log(ataqueEnemigo)
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
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
        }
        else if (ataqueJugador[index] === 'FUEGO' &&  ataqueEnemigo[index] == 'TIERRA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === 'AGUA' &&  ataqueEnemigo[index] == 'FUEGO') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] == 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }
        else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigos.innerHTML = victoriasEnemigo
        }
}
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('EMPATASTE 😶‍🌫️')
    }
    else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('GANASTE ☘️')
    }
    else {
        crearMensajeFinal(('PERDISTE 😣'))
    }
}

function crearMensaje(resultado) { 
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    // ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    // ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'    
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio( min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min) 
}

function pintarCanva() {

    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    personajeJugadorObjeto.pintarKimetsuyi()
    tanjiroEnemigo.pintarKimetsuyi()
    inosukeEnemigo.pintarKimetsuyi()
    zenitsuEnemigo.pintarKimetsuyi()
}

function moverDerecha() {
    personajeJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
    personajeJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    personajeJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    personajeJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
    personajeJugadorObjeto.velocidadX = 0
    personajeJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo() 
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa() {
    mapa.width = 700
    mapa.height = 500
    personajeJugadorObjeto = obtenerObjetosPersonajes(personajeJugador)
    intervalo = setInterval(pintarCanva, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetosPersonajes() {
    for (let i = 0; i < kimetsuyis.length; i++) {
        if (personajeJugador === kimetsuyis[i].nombre) {
                return kimetsuyis[i]
        }
    }
}

window.addEventListener('load', iniciarJuego)