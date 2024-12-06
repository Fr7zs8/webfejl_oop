class Factory{ // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manok = new Array(); // egyenlő []

    }
    addMano(egymano) {
        this.manok.push(egymano);
        createRow(egymano);
    }
    createId(){
        return this.manok.length;
    }
 
}

class Companion{// TODO 5
    constructor(id, keresztnev, vezeteknev, reszleg){
        this.id = id;
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.products = new Array();
    }
    addproduct(product){
        this.products.push(product);
    }

    getName(){
        return this.vezeteknev + " " + this.keresztnev
    }
 
}
let mano = new Companion(1, "Kristály", "Szép", "Sátor");
console.log(mano.getName())