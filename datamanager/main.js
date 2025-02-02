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
            if(this.#array[i].nev.toLowerCase().includes(name.toLowerCase())){
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
        this.#tbody = document.createElement("tbody");
        table.appendChild(this.#tbody);

        datamanager.setUpdateCallback((persons) => {
            this.#renderTable(persons);
        })
    }
    /**
     * @type {HTMLTableSectionElement}
     */
    #tbody;


    /**
     * 
     * @param {Person[]} persons 
     */
    #renderTable(persons){
        this.#tbody.innerHTML = "";
            for(let person of persons){
                const tr = document.createElement("tr");
                this.#tbody.appendChild(tr);

                const tdname = document.createElement("td");
                tdname.innerHTML = person.nev;
                tr.appendChild(tdname);

                const tdage = document.createElement("td");
                tdage.innerHTML = person.eletkor;
                tr.appendChild(tdage);
            }
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

const label = document.createElement("label");
label.innerHTML = "Név alapján szűrés:";
document.body.appendChild(label);

const inputnev = document.createElement("input");
document.body.appendChild(inputnev);

const br = document.createElement("br");
document.body.appendChild(br);

const labelage = document.createElement("label");
labelage.innerHTML = "Kor alapján szűrés:";
document.body.appendChild(labelage);

const inputage = document.createElement("input");
document.body.appendChild(inputage);

inputnev.addEventListener("input", (event) => {
    datamanager.filterName(event.target.value);
})

inputage.addEventListener("input", (event) => {
    datamanager.filterAge(Number(event.target.value));
    console.log(event.target.value);
})