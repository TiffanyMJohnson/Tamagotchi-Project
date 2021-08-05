
const buttonSubmit = document.querySelector('button');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let petName = document.getElementById("name").value;
    document.querySelector("h1").innerHTML = ` ${petName}`;
})

const feed = document.querySelector("#feed")
const lights = document.querySelector("#lights")
const play = document.querySelector("#play")

const health = document.querySelector("#healthbar")
const energy = document.querySelector("#tiredbar")
const activity = document.querySelector("#boredombar")


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
       if (this.health === 0) {
           alert (`${petName}`+ "has died from hunger");
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
        if (this.energy === 0) {
            alert (`${petName}`+ "has died from lack of sleep");
        }
     };
     boredPet = () => {
         this.activity--
         activity.innerText = `${this.activity}`
         if (this.activity <= 5) {
            activity.style.color = "red";
        }
        if (this.activity === 0) {
            alert (`${petName}`+ "has died from boredom");
        }
     };
     morphPet = () => {
         if (age >= 10) {
             document.querySelector(".creature").image = ("src", "https://i.imgur.com/UBfoCcq.png")
         }
     }
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
        }, 1000)
    },
    feedPet () {
        this.creature.health++ 
        health.innerText = `${this.creature.health}`
    },
    playPet () {
        this.creature.activity++
        activity.innertext = `${this.creature.activity}`
    },
    lightSwitch () {
        const light = document.querySelector("body")
        if (this.creature.light === true) {
            light.style.backgroundImage = "url (https://i.imgur.com/dL69sEo.jpg)"
        }
        else {
            light.style.backgroundImage = "url (https://i.imgur.com/q7pMoyL.jpg)"
        }
        
    },
}

feed.addEventListener("click", (event) => {
    startGame.feedPet()
})

lights.addEventListener("click", (event)=> {
    startGame.lightSwitch
})

play.addEventListener("click", (event)=> {
    startGame.playPet
})

const start = document.querySelector("#start")
start.addEventListener("click", (event)=> {
    startGame.start()
})
