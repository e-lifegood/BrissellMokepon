const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }

    asignarKimetsu(kimetsu) {
        this.kimetsu = kimetsu
    }

}

class Kimetsu {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/kimetsu/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.kimetsu || ""
    const kimetsu = new Kimetsu(nombre)

    const jugadorIndex =  jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarKimetsu(kimetsu)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
})