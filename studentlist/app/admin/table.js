class Table{
    /**
     * @type {Manager}
     */
    #manager

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager){
        this.#manager = manager;
        const fejlec = ["Diák név", "Diák átlag", "Diák komment", "Rossz-e"];
        const tbody = Gomszab.makeTableWithHeader(fejlec);
        manager.setaddAdminCallBack(student => {
            console.log("hello")
            console.log(student);
            
            const tr = document.createElement("tr");
            tbody.appendChild(tr);
            Gomszab.makeCellToRow(tr, student.name);
            Gomszab.makeCellToRow(tr, student.average);
            Gomszab.makeCellToRow(tr, student.comment);
            Gomszab.makeCellToRow(tr, student.bad ? "Igen": "Nem");
        });
    }
}
