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
const elso = {nev: "Első teszt"}
list.Add(elso);
console.log(list.Contains(elso));

const masodik = {nev: "Második teszt"}
list.Add(masodik);
console.log(list.Contains(masodik));


list.Clear();

