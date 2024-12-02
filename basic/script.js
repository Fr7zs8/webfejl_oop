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


function Person(name){
    this.name = name;
}
Person.prototype.getname = function(){
    return this.name;
}

function Student(school, name){
    Person.call(this, name);
    this.school = school;
    this.name = name;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

let student1 = new Student("Bolyai", "Fruzsi");

console.log(student1.getname());
console.log(student1.school);