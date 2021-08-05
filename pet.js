
const buttonSubmit = document.querySelector('button');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let petName = document.getElementById("name").value;
    document.querySelector("h1").innerHTML = ` ${petName}`;
})

const health = document.querySelector("#healthbar")
const energy = document.querySelector("#tiredbar")
const activity = document.querySelector("#boredombar")

const lightbulb = document.querySelector("body")

class Pet {
    constructor () {
        this.age = 1
        this.health = 20
        this.energy = 20
        this.activity = 20
        this.light = true
    }
    hungryPet = () => {
       this.health--
       health.innerText = `${this.health}`
       if (this.health <= 5) {
           health.style.color = "red";
       } 
     };
     agePet = () => {
         this.age++
         const petAge = document.querySelector("#age")
         petAge.innerText = "Age:" +  `${this.age}`
     };
     sleepyPet = () => {
         this.energy--
         energy.innerText = `${this.energy}`
         if (this.energy <= 5) {
            energy.style.color = "red";
        } 
     };
     boredPet = () => {
         this.activity--
         activity.innerText = `${this.activity}`
         if (this.activity <= 5) {
            activity.style.color = "red";
        } 
     };
     morphPet = () => {
         if (this.age >= 5) {
             const img = document.querySelector(".creature")
             img.style.width = "1000px"
         }
     };
     endGame = () => {
        if (this.health === 0 || this.energy === 0 || this.activity === 0) {
            alert ("Your creature has died from lack of proper care.")
            location.reload()
        }
    };
    }
    
const startGame = {
    creature: null,
    intervalID: null,
    time:0,

    start () {
        const creature2 = new Pet ();
        this.creature = creature2
        this.intervalID = setInterval(() => {
			
			this.time++
            this.creature.hungryPet()
	        this.creature.boredPet()
      	    this.creature.sleepyPet()
            this.creature.agePet()
            this.creature.morphPet()
            this.creature.endGame()
        }, 2000)
    },
    feedPet () {
        this.creature.health++ 
        health.innerText = `${this.creature.health}`
    },
    playPet () {
        this.creature.activity++
        activity.innerText = `${this.creature.activity}`
    },

    lightOn () {
        document.querySelector("body").style.backgroundImage = "url(https://i.imgur.com/dL69sEo.jpg)"
        this.creature.energy--
    },
    lightOff () {
        document.querySelector("body").style.backgroundImage = "url (https://i.imgur.com/q7pMoyL.jpg)"
        this.creature.energy++
    }
}


const feed = document.querySelector("#feed")
const lightsOn = document.querySelector("#lights-on")
const lightsOff = document.querySelector("#lights-off")
const play = document.querySelector("#play")

feed.addEventListener("click", (event) => {
    startGame.feedPet()
})

lightsOn.addEventListener("click", (event)=> {
    startGame.lightOn()
})

lightsOff.addEventListener("click", (event)=> {
    startGame.lightOff()
})

play.addEventListener("click", (event)=> {
    startGame.playPet()
})

const start = document.querySelector("#start")
start.addEventListener("click", (event)=> {
    startGame.start()
   
})
