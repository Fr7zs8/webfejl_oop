/** Definiáltunk egy person tipust, és a callbacknek is egy tipust
 * @typedef {{nev:String, eletkor:Number}} Person
 * 
 * @callback UpdateCallBack
 * @param {Person[]} Persons
 * @returns {void}
 * 
 * Vagy igy csinálod vagy egy sorba igy: param {funcion(Person):boolean}
 * @callback FilterCallBack
 * @param {Person} person
 * @returns {boolean}
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

    /**
     * 
     * @param {FilterCallBack} {
        
     }}  
     */
    filter(filterCb){
        const filteredPersons = [];
        for(let i = 0; i<this.#array.length; i++){
            if(filterCb(this.#array[i])){
                filteredPersons.push(this.#array[i]);
            }
        }
        this.#updateCallback(filteredPersons);
    }

    /**
     * 
     * @param {Person[]} compareFunction 
     * @returns {Person[]}
     */
    order(compareFunction){
        const tempArray = this.#array.slice();
        tempArray.sort(compareFunction);
        return tempArray;
    }

    /**
     * 
     * @param {Person[]} persons 
     */
    orderByAge(){
        return this.order((a,b) => b.eletkor - a.eletkor);
    }

    /**
 * 
 * @param {Person[]} persons
 */
    orderByName() {
        return this.order((a,b) => b.nev.localeCompare(a.nev));
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

        const thead = document.createElement("thead");
        const tr = document.createElement("tr");

        const nameHeader = document.createElement("th");
        nameHeader.innerHTML = "Név";
        nameHeader.addEventListener("click", () => {
            
            const sorted = datamanager.orderByName();
            this.#renderTable(sorted);
            

        })
        tr.appendChild(nameHeader);

        const ageHeader = document.createElement("th");
        ageHeader.innerHTML = "Életkor";
        ageHeader.addEventListener("click", () => {
            const sorted = datamanager.orderByAge();
            this.#renderTable(sorted);
        })
        tr.appendChild(ageHeader);

        thead.appendChild(tr);
        table.appendChild(thead);
        
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

datamanager.filter((person) => person.eletkor === 17);

const fileinput = document.createElement("input");
fileinput.type = "file";
document.body.appendChild(fileinput);

fileinput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        const content = reader.result;
        const lines = content.split("\n");

        for(const line of lines){
            const [nev, eletkor] = line.split(';');
            const person = {
                nev: nev.trim(),
                eletkor: Number(eletkor.trim())
            };
            datamanager.add(person);
        }
    };
    reader.readAsText(file);
});