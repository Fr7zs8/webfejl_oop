class ArrayList{
    #elemszam
    #allapot
    #arraytable
    constructor(array = undefined){
        this.#elemszam = 0;
        this.#allapot = {};
        this.#arraytable = array;
    }

    get Count(){
        return this.#elemszam;
    }

    Add(element){
        let hossz = this.#elemszam;
        this.#allapot[hossz] = element;

        Object.defineProperty(this, hossz, {
            get: () => {
                return this.#allapot[hossz];
            },
            set: (value) => {
                return this.#allapot[hossz] = value;
            },
            configurable: true,
            enumerable: true
        })

        this.#elemszam ++;
        this.#arraytable.addPersonrow(element);


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

class TableHTMLArray extends HTMLElement{ //Kiterjeszti az elementet
    //Default konstruktor. Mindenkinek van akár irunk akár nem. Leszármazás miatt kötelező a super
    #tbody
    constructor(){
        super()
    }
    connectedCallback(){
        const table = document.createElement("table");
        this.appendChild(table);
        const thead = document.createElement("thead");
        table.appendChild(thead);
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);
    }
    /**
     * 
     * @param {{nev: String, eletkor: Number}} person Ez a nevet és az életkort tárolja
     */
    addPersonrow(person){
        const trow = document.createElement("tr");
        this.#tbody.appendChild(trow);
        const tdnev = document.createElement("td");
        tdnev.innerHTML = person.nev;
        trow.appendChild(tdnev);
        const tdeletkor = document.createElement("td");
        tdeletkor.innerHTML = person.eletkor;
        trow.appendChild(tdeletkor);
    }
}

customElements.define("array-table", TableHTMLArray);
const tablearray = new TableHTMLArray();
document.body.appendChild(tablearray);
tablearray.addPersonrow({nev: "Fruzsi", eletkor: 17});


const list = new ArrayList(tablearray);
const elso = {nev: "Első teszt", eletkor:12}
list.Add(elso);
console.log(list.Contains(elso));

const masodik = {nev: "Második teszt", eletkor:21}
list.Add(masodik);
console.log(list.Contains(masodik));


list.Clear();

