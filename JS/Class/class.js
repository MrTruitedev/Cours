class Imc {
    constructor(nom, taille, poids) {
        this.nom = nom,
        this.taille = taille,
        this.poids = poids;
        this.imc = this.calculImc();
    }
    calculImc() {
        return (this.poids / (this.taille * this.taille)).toFixed(2);
    }
    display() {
        console.log(this.nom, this.taille, this.poids, this.calculImc())
    }
}
// progr principal -> injection des données
let list = [
    new Imc("Sébastien Chabal", 1.90, 135),
    new Imc("Escaladeuse Ultra Svelte", 1.70, 45),
    new Imc("JOJO ", 2, 300),
];

let getNom = document.querySelector('#inputNom');
let getTaille = document.querySelector('#inputTaille');
let getPoids = document.querySelector('#inputPoids');
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let addToList = new Imc(getNom.value, getTaille.value, getPoids.value)
    list.push(addToList);
    list.forEach(uneCase => uneCase.display());
});

//Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach(uneCase => uneCase.display());