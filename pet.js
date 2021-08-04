
const buttonSubmit = document.querySelector('button');
buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let petName = document.getElementById("name").value;
    document.querySelector("h1").innerHTML = ` ${petName}`;
})

const feed = document.querySelector("#feed")
const lights = document.querySelector("#lights")
const play = document.querySelector("#play")

const healthbar = document.querySelector("#healthbar")
healthbar.style.width = "0%"
healthbar.style.height = "100%"
healthbar.style.backgroundColor = "blue"

const tiredbar = document.querySelector("#tiredbar")

const activitybar = document.querySelector("#boredombar")


class Pet {
    constructor () {
        this.name = petName
        this.age = 0
        this.health = 1
        this.energy = 10
        this.activity = 10
        this.on = true
        this.timer = 0
    }
    feedPet = () => {
        const counter = setInterval(function (){
            this.health--
            if (feed.addEventListener("click")) {
                this.health++;
                healthbar.style.width = (this.health++).toString() = "%"
            }
            else if (this.health = 0)
                alert ("Your Creature has run out of life. Game Over")
        })
    };
    lightSwitch = () => {

     lights.addEventListener ("click").style.backgroundImage = "url(https://i.imgur.com/q7pMoyL.jpg)"
        }
    }




const newPet = new Pet () 

lightSwitch ()
