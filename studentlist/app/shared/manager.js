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
        this.#addAdminStudentCallback(student);
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

    generateExportString(){
        const result = [];
        for (const student of this.#array){
            const badValue = student.bad ? '1':'0';
            const line = `${student.name};${student.average};${student.comment};${badValue}`;
            result.push(line)
        }
        return result.join('\n');
    }
}