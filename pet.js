
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
        this.name = petName
        this.age = 0
        this.health = 10
        this.energy = 10
        this.activity = 10
        this.timer = 0
        this.light = true
    }
    hungryPet = () => {
       this.health--
       health.innerHTML = `${this.health}`
       if (this.health <= 5) {
           health.style.color = "red";
       }
       if (this.health === 0) {
           alert (`${petName}`+ "has died from hunger");
       }
     };
     agePet = () => {
         this.age++
         document.querySelector("#age") = "Age: " `${this.age}`
     };
     sleepyPet = () => {
         this.energy--
         energy.innerHTML = `${this.energy}`
         if (this.energy <= 5) {
            energy.style.color = "red";
        }
        if (this.energy === 0) {
            alert (`${petName}`+ "has died from lack of sleep");
        }
     };
     boredPet = () => {
         this.activity--
         activity.innerHTML = `${this.activity}`
         if (this.activity <= 5) {
            activity.style.color = "red";
        }
        if (this.activity === 0) {
            alert (`${petName}`+ "has died from boredom");
        }
     };
     morphPet = () => {
         if (age >= 30) {
             document.querySelector(".creature").image = ("src", "https://i.imgur.com/UBfoCcq.png")
         }
     }
    }

const startGame = {
    myPet: null,
    intervalID: null,
    time: 0,
    lightsON: false,
    light: false,

    start () {
        const newCreature = new Pet ()
        this.startTimer ()
    },
    startTimer () {
        this.timer++
    },
    feedPet () {
        this.health++ 
        health.innerHTML = `${this.health}`
    },
    playPet () {
        this.activity++
        activity.innerHTML = `${this.activity}`
    },
    lightSwitch () {
        const light = document.querySelector("body")
        if (this.light === true) {
            light.style.backgroundImage = "url (https://i.imgur.com/dL69sEo.jpg)"
        }
        else if (
            lights.style.backgroundImage = "url (https://i.imgur.com/q7pMoyL.jpg)"
        )
    }
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
    start()
})