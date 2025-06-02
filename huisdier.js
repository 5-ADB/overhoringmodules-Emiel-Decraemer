function Huisdier(dier, naam, leeftijd) {
    this.dier = dier,
    this.naam = naam,
    this.leeftijd = leeftijd,
    function print(this) {
        return `mijn ${this.dier} ${this.naam} is ${this.leeftijd} jaar oud`
    }
}

module.exports = (Huisdier)