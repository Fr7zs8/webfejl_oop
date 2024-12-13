const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(elem){
        this.firstname1 = elem.firstname1;
        this.firstname2 = elem.firstname2;
        this.lastname = elem.lastname;
    }
    render(tbody){
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const lastnametd = document.createElement("td");
        lastnametd.innerHTML = this.lastname;
        tr.appendChild(lastnametd);

        const firstname1td = document.createElement("td");
        firstname1td.innerHTML = this.firstname1;
        tr.appendChild(firstname1td);

        const firstname2td = document.createElement("td");
        firstname2td.innerHTML = this.firstname2;
        tr.appendChild(firstname2td);

        
    }
}

class FormController{
    #form
    get lastname(){
        const lastnameimput = this.#getimput("lastname");
        return lastnameimput.value;
    }

    get firstname1(){
        const firstname1imput = this.#getimput("firstname1");
        return firstname1imput.value;
    }

    get firstname2(){
        const firstname2imput = this.#getimput("firstname2");
        return firstname2imput.value;
    }

    constructor(form){
        this.#form = form; //kivulről nem lehet elérni
    }
    #getimput(id){
        return this.#form.querySelector('#' + id);
    }

}

function init(){
    const tbody = document.getElementById("tbodyId");
    const form = document.getElementById("form");
    const controller = new FormController(form);
    

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const obj = {
            lastname: controller.lastname,
            firstname1: controller.firstname1,
            firstname2: controller.firstname2
        };
        const person = new Person(obj);
        person.render(tbody);
        
    })

    for(const elem of array){
        const ember = new Person(elem);
        ember.render(tbody);
    }
}

init();

