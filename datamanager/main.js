/** Definiáltunk egy person tipust, és a callbacknek is egy tipust
 * @typedef {{nev:String, eletkor:Number}} Person
 * 
 * @callback UpdateCallBack
 * @param {Person[]} Persons
 * @returns {void}
 */

//Closure

class DataManager{
    /** A typedef tipusdefiniciójára mutat felhasznál egy tipust
     * @type {Person[]}
     */
    #array
    /**
     * @type {UpdateCallBack}
     */
    #updateCallback

    /**
     * Constructor bemeneti parametere
     * @param {Person[]} array 
     */
    constructor(array = []){
        this.#array = array;
        this.#updateCallback = () => {};
    }

    /**
     * 
     * @param {UpdateCallBack} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback;
        this.#updateCallback(this.#array);
    }

    /**
     * 
     * @param {Person} person 
     */
    add(person){
        this.#array.push(person);
        this.#updateCallback(this.#array);
    }

    /**
     * Bemeneti paraméterek alapján megnézi ugyan az e, filter name
     * @param {String}
     */
    filterName(name){
        const personsname = []; 
        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].nev.includes(name)){
                personsname.push(this.#array[i]);
            }
        }
        
        this.#updateCallback(personsname);
    }

    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){
        const personage = [];
        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].eletkor === age){
                personage.push(this.#array[i]);
            }
        }
        
        this.#updateCallback(personage);

    }
}

class DataTable{
    /**
     * 
     * @param {DataManager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement("table");
        document.body.appendChild(table);
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        datamanager.setUpdateCallback((persons) => {
            tbody.innerHTML = "";
            for(let person of persons){
                const tr = document.createElement("tr");
                tbody.appendChild(tr);

                const tdname = document.createElement("td");
                tdname.innerHTML = person.nev;
                tr.appendChild(tdname);

                const tdage = document.createElement("td");
                tdage.innerHTML = person.eletkor;
                tr.appendChild(tdage);
            }
        })
    }
}


const people =  [
    {
        nev: "Józsi",
        eletkor: 17
    },
    {
        nev: "Teri",
        eletkor: 16
    },
    {
        nev: "Gábor",
        eletkor: 17
    }
]

const datamanager = new DataManager(people);
const datatable = new DataTable(datamanager);

