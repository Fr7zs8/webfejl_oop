class FormController{
    /**
     * @type {Array}
     */
    #formFieldArray;

    /**
     * @type {Manager}
     */
    #manager
    
    /**
     * 
     * @param {{id: string, label: string, type: string, optional?: boolean}[]} fieldConfigurations 
     */
    constructor(fieldConfigurations, manager){
        this.#formFieldArray = [];
        this.#manager = manager;

        const form = document.createElement("form");
        form.addEventListener("submit", (e) => this.#submitEvenetListener(e));
        for(const field of fieldConfigurations){
            const formField = new FormField(field.id, field.label, field.type, field.optional);
            this.#formFieldArray.push(formField);
            form.appendChild(formField.getFieldDiv()) 
        }
        const button = document.createElement("button");
        form.appendChild(button);
        button.textContent = "Küldés"
        document.body.appendChild(form);
        

    }

    /**
     * 
     * @returns {boolean}
     */
    #validateAllFields(){
        for(const field of this.#formFieldArray){
            field.error = "";
            if(!field.optional){
                if(field.value === ""){
                    field.error = "A mező kitöltése kötelező!"
                    return false;
                }
            }
            return true;
        }
    }

    /**
     * 
     * @returns {{studentname: string, studentaverage: string, studentcomment: string, studentbad: boolean}}
     */
    getValueObject(){
        const result = {}
        for(const field of this.#formFieldArray){
            result[field.id] = field.value;
        }
        return result;
    }

    #submitEvenetListener(e){
        e.preventDefault();
        if(this.#validateAllFields()){
            const value = this.getValueObject();
            const answer = [];
            const student = new Student(value.studentname, value.studentaverage, value.studentcomment, value.studentbad);
            this.#manager.add(student);
            e.target.reset();
        }
    }
 
}

class FormField{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {string}
     */
    #type
    /**
     * @type {boolean}
     */
    #optional
    /**
     * @type {HTMLInputElement}
     */
    #inputField
    /**
     * @type {HTMLSpanElement}
     */
    #errorField
    /**
     * @type {HTMLLabelElement}
     */
    #labelElement

    /**
     * 
     * @param {string} id 
     * @param {string} labelContent 
     * @param {string} type 
     * @param {boolean} optional 
     */
    constructor(id, labelContent, type, optional = false){
        this.#id = id;
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id, labelContent);
        this.#inputField = Gomszab.makeInput(id, type);
        this.#errorField = Gomszab.makeErrorField();
    }

    /**
     * 
     * @returns {HTMLDivElement}
     */
    getFieldDiv(){
        return Gomszab.makeDiv([this.#labelElement, this.#inputField, this.#errorField])
    }

    /**
     * @returns {string}
     */
    get id(){
        return this.#id;
    }

    /**
     * @returns {string}
     */
    get optional(){
        return this.#optional;
    }

    /**
     * @returns {string | boolean}
     */
    get value(){
        if(this.#type === "checked"){
            return this.#inputField.checked;
        }
        return this.#inputField.value;
    }

    /**
     * @returns {string}
     */
    set error(value){
        this.#errorField.textContent = value;
    }
}