class ArrayList{
    #elemszam
    #allapot
    constructor(){
        this.#elemszam = 0;
        this.#allapot = {};
    }

    get Count(){
        return this.#elemszam;
    }

    Add(element){
        let hossz = this.#elemszam;
        this.#allapot[hossz] = element;
        this.#elemszam ++;
    }

    Clear(){
        this.#elemszam = 0;
        this.#allapot = {};
    }

}


const list = new ArrayList();

list.Add("Első teszt");
console.log("Elemszám:" + list.Count +", Állapot:", list);

list.Add("Második teszt");
console.log("Elemszám:" + list.Count +", Állapot:", list);

list.Clear();
console.log("Elemszám:" + list.Count +", Állapot:", list);