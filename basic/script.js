class Player{
    constructor(nickname){
        this.nickname = nickname,
        this.playedMatch = 0
    }
        
    play(){
        this.playedMatch++;
        console.log(this.nickname + " nevű játékos " + this.playedMatch + " számú játékot játszott.")
    };

    getTierLevel(){
        if (this.playedMatch <= 3){
            return "A";
        }
        else if (this.playedMatch <= 6){
            return "B";
        }
        else{
            return "C";
        }
    };
}





function printTierLevel(player) {
    console.log(`${player.nickname} a ${player.getTierLevel()} tier-ben van.`);
}

let player1 = new Player("Fruzsi");

player1.play();
player1.play();
printTierLevel(player1);

player1.play();
player1.play();
player1.play();
printTierLevel(player1);


player1.play();
player1.play();
player1.play();
printTierLevel(player1);


class Person{
    constructor(name){
        this.name = name;
    }
    getname() {
        return this.name;
    }
}


class Student extends Person{
    constructor(school, name){
        super(name);
        this.school = school;
    }
    
}


let student1 = new Student("Bolyai", "Fruzsi");

console.log(student1.getname());
console.log(student1.school);


class Animal{
    constructor(hang, name){
        this.hang = hang;
        this.name = name;
    }
    mitcsinal(){
        console.log("A(z) "+ this.name+ " " + this.hang+" hangot ad ki.")
    }
}

class Bird extends Animal{
    constructor(hang, name){
        super(hang, name);
        
    }
    mitcsinal(){
        console.log("A(z) "+ this.name+ " " + this.hang+" hangot ad ki és repül.");
    }
}

class Mammal extends Animal{
    constructor(hang, name){
        super(hang, name);
        
    }
    mitcsinal(){
        console.log("A(z) "+ this.name+ " " + this.hang+" hangot ad ki és jár.")
    
    }
}

let animal1 = new Animal("Buuu", "Tehén");
animal1.mitcsinal();

let animal2 = new Bird("Cip-Cip", "Cinege");
animal2.mitcsinal();

let animal3 = new Mammal("Huhu", "Mammal");
animal3.mitcsinal();
