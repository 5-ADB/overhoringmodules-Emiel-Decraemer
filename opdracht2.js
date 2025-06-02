// schrijf op 2 verschillende manieren een constructor voor onderstaande object

const factuur = {
    id: 1,
    klant: "Jos Joskens",
    producten: [
        appel, peer, banaan
    ],
    betaald: false
}

// een factory
function factuurAanmaken(id, klant, producten, betaald) {
    const factuur = {
        id : id,
        klant : klant,
        producten : producten,
        betaald : betaald
    }
    return factuur
}

// een constructor

function FactuurAanmaken(id, klant, producten, betaald) {
    this.id = id,
    this.klant = klant,
    this.producten = producten,
    this.betaald = betaald
}