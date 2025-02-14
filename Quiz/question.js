/**
 * Ezzel az entitással fog dolozni dolgozni a manager
 * (A manager ezt fogja tartalmazni)
 */
class Question{
    /**
     * @type {string}
     */
    #questionText;

    /**
     * @type {string[]}
     */
    #answers

    /**
     * @type {string}
     */
    #rightAnswers;

    /**
     * @returns {string[]} a kérdésre adható válaszokat tartalmazza
     */
    get answers(){
        return this.#answers;
    }

    /**
     * @returns {string} A kérdés szöveget tartalmazza
    */
    get questionText(){
        return this.#questionText
    }

    /**
     * @returns {string} A jó válasz szövegét tartalmazza
    */
    get rightAnswers(){
        return this.#rightAnswers;
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {string} rightAnswers 
     */
    constructor(questionText, answers, rightAnswers){
        this.#answers = answers;
        this.#questionText = questionText;
        this.#rightAnswers = rightAnswers;
    }
}