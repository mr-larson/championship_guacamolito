class Wrestler {
    constructor(name){
        this.name = name
        this.attack = 0
        this.defense = 0
        this.stamina = 0
        this.victory = 0
        this.champion = false
    }
    
}
// Create wrestler
let Mufasaa = new Wrestler ("Mufasaa")

// Create P
let p = document.createElement("p")


let Coding = document.querySelector("#Coding")
Coding.appendChild(p)


// Affichage du nom
p.innerText = Mufasaa.name

console.log (p)