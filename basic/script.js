class Player{
    constructor(nickname){
        this.nickname = nickname,
        this.playedMatch = 0
    }
        
}

Player.prototype.play = function(){
    this.playedMatch++;
    console.log(this.nickname + " nevű játékos " + this.playedMatch + " számú játékot játszott.")
};

Player.prototype.getTierLevel = function(){
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


function Person(){
    this.name = "Géza";
}
Person.prototype.getname = function(){
    return this.name;
}

function Student(school){
    Person.call(this);
    this.school = school;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

let student1 = new Student("Bolyai");

console.log(student1.getname());
console.log(student1.school);