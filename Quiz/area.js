class Area{ //Ős osztály konténert hoz létre amiben minden benne van 2 oszálya lesz
    /**
     * @type {HTMLDivElement}
     */
    #div;

    /**
     * @returns {HTMLDivElement} Vissaztér az aktuális területtel
     */
    get div(){
        return this.#div
    }

    /**
     * @param {Manager} manager
     * @param {string} cssClass 
     */
    constructor(cssClass, manager){
        const container = this.#getContainer();
        this.#div = document.createElement("div");
        this.#div.className = cssClass;
        container.appendChild(this.#div);
        manager.setNextFinishCallBack(resultText => {
            container.innerHTML = "";
            const resultDiv = document.createElement("div");
            resultDiv.textContent = resultText;
            resultDiv.className = "result";
            container.appendChild(resultDiv);
        })
    }

    /**
     * Létrehozza a container classal rendelkező eleet amelyen belül a div lesz megtalálhato, Ha már létezik akkor a már létezöt adja vissza
     * 
     * @returns {HTMLDivElement}
     */
    #getContainer(){
        let container = document.querySelector(".container");
        if(!container){
            container = document.createElement("div");
            container.className = 'container';
            document.body.appendChild(container);
        }
        return container;
    }
}

/**
 * Ez a terület fogja tartalmazni a questiont
 */
class QuestionArea extends Area{ //Leszárnazunk az area osztályból
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager); //AZ ös class konstruktorát hivja meg
        manager.setNextQuestionCallBack((kerdes) => {
            this.div.innerHTML = '';
            const questionCard = document.createElement("div");
            questionCard.textContent = kerdes;
            this.div.appendChild(questionCard);
        })
    }

}

/**
 * Ez a terület fogja tartalmazni a válaszokat
 */
class AnswerArea extends Area{
    /**
     * 
     * @param {string} cssClass 
     * @param {Manager} manager 
     */
    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setNextAnswerCallBack((valaszok) => {
            this.div.innerHTML = '';
            for (const valasz of valaszok){
                const answerCard = document.createElement("div");
                answerCard.className = "item";
                answerCard.textContent = valasz;
                answerCard.addEventListener("click", ()=>{
                    manager.nextQusetion(valasz);
                })
                this.div.appendChild(answerCard);
            }
        })
    }
}