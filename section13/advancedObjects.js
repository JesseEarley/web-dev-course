class Player {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}.`)
    }

}

class Wizard extends Player {
    constructor(name,type,spell){
        super(name,type);
        this.spell = spell;
    }
    play(){
        console.log(`Weeee I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Jesse',"Healer","All Heal");
const wizard2 = new Wizard('Meghan',"Soul Stealer","The Black Death");


let Jesse = new Player("Jesse", "Human");
