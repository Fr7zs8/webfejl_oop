class Manager{
    #array;
    #selectCallback;
    #addCallback;
    #addAdminStudentCallback;

    constructor(){
        this.#array = [];
        this.#addAdminStudentCallback = () => {}
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    setSelectCallback(callback){
        this.#selectCallback=callback;
    }

    add(student){
        this.#array.push(student);
        this.setaddAdminCallBack();   
    }

    select(student){
        this.#selectCallback(student);
    }

    render(){
        for(const student of this.#array){
            this.#addCallback(student);
        }
    }
    setaddAdminCallBack(callback){
        this.#addAdminStudentCallback(callback);
    }
}