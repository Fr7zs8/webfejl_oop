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

        Object.defineProperty(this, hossz, {
            get: function() {
                return this.#allapot[hossz];
            },
            set: function(value){
                return this.#allapot[hossz] = value;
            },
            configurable: true,
            enumerable: true
        })

        this.#elemszam ++;


    }

    Clear(){
        
        for(let key in this){
            delete this[key];
        }
        this.#elemszam = 0;
        this.#allapot = {};
    }

    Contains(elem){
        for(let i = 0; i< this.#elemszam; i++){
            if(this.#allapot[i] == elem){
                return true;
            }
        }
        return false;
    }

}


const list = new ArrayList();

list.Add("Első teszt");
console.log("Elemszám:" + list.Count +", Állapot:", list);
console.log(list[0]);

list.Add("Második teszt");
console.log("Elemszám:" + list.Count +", Állapot:", list);

console.log(list[1]);
console.log(list.Contains("Első elem."));
console.log(list.Contains("Első teszt"));

list.Clear();
console.log("Elemszám:" + list.Count +", Állapot:", list);


const tmp = {};
Object.defineProperty(tmp, 'nev', {
    value : "Ferenc",
    writable: true,
    enumerable: true

});

console.log(tmp.nev);