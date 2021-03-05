// Test Roster Automatiser
class Wrestler {
    constructor(name){
        this.name = name
        this.attack = Math.floor(Math.random()*10)
        this.defense = Math.floor(Math.random()*10)
        this.stamina = Math.floor(Math.random()*10)
        this.victory = 0
        this.champion = false
    }
    calculerScore(){
        return this.attack +this.defense +this.stamina
    }
}
// Create wrestler
let Mufasaa = new Wrestler ("Mufasaa")
let Bilal = new Wrestler ("Bilal")
let Gauthier = new Wrestler ("Gauthier")
let Said = new Wrestler ("Saïd")
let Antoine = new Wrestler ("Antoine")
let Elias = new Wrestler ("Elias")
let Mahad = new Wrestler ("Mahad")
let Abdel = new Wrestler ("Abdel")
let Amine = new Wrestler ("Amine")
let Salim = new Wrestler ("Salim")
let Cem = new Wrestler ("Cem")
let Ayoub = new Wrestler ("Ayoub")
let Yassin = new Wrestler ("Yassin")
let Laurie = new Wrestler ("Laurie")
let Camille = new Wrestler ("Camille")
let Yasmina = new Wrestler ("Yasmina")

// Tableau
let tableau = []
tableau.push(Cem)
tableau.push(Mufasaa)
tableau.push(Bilal)
tableau.push(Gauthier)
tableau.push(Said)
tableau.push(Antoine)
tableau.push(Mahad)
tableau.push(Elias)
tableau.push(Abdel)
tableau.push(Amine)
tableau.push(Salim)
tableau.push(Ayoub)
tableau.push(Yassin)
tableau.push(Laurie)
tableau.push(Camille)
tableau.push(Yasmina)

// Affichage du tableau
let Coding = document.querySelector("#Coding")
tableau.forEach(element => {
    let p = document.createElement("p")
    p.innerText = element.name
    Coding.appendChild(p)
})

// deroulement du combat
let i = 0
setInterval(element =>{
    if (tableau[i*2].calculerScore() > tableau[i*2+1].calculerScore()){
        console.log (`${tableau[i*2].name} à gagner`)
        if( i != 0){
            var temp = tableau[i*2-1]
            tableau[i*2-1] = tableau[i*2]
            tableau[i*2] = temp
        }
    }
    else{
        console.log(`${tableau[i*2+1].name} à gagner`)
        if (i == 0){
            let premier = tableau.shift()
            tableau.push(premier)
        }else{

        }
        var temp = tableau[i*2]
            tableau[i*2] = tableau[i*2+1]
            tableau[i*2+1] = temp
    }
    i++
    if(tableau.length /2 == i){
        let container = document.createElement("div");
        tableau.forEach(element => {
            let p = document.createElement("p")
            container.appendChild(p);
            p.innerText = element.name
            Coding.innerHTML = container.innerHTML
            
        })
           
        console.log (tableau)
        i = 0
    }

},2000)
//--------------------------------------------------------

// Ranking Roster AWA
