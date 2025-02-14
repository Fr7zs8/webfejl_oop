/**
 * @callback NextQuestionCallBack
 * @param {string} kerdes A kérdés szövegét tartalmazza
 * 
 * @callback NextAnswerCallBack
 * @param {string[]} valaszok A válaszokat tartalmazza
 * 
 * @callback FinihCallBack
 * @param {string} result a végeredmény szöveget tartalmazza
 */
class Manager{
    /**
     * A kérdéseket tartalmazza
     * @type {Question[]}
     */
    #array;

    /**
     * Aktuális kérdés számát tartalmazza
     * @type {Number}
     */
    #currentQuestionNumber;

    /**
     * A kérdés számonként eltárolt változokat tartalmazza
     * @type {Object}
     */
    #selectedAnswer;

    /**
     * @type {NextQuestionCallBack}
     */
    #nextQuestionCallBack;

    /**
     * @type {NextAnswerCallBack}
    */
   #nextAnswersCallBack;

   /**
    * @type {FinihCallBack}
    */
   #finishCallBack;

   /**
    * 
    * @param {Question[]} array kérdéstömb
    */
   constructor(array=[]){
    this.#array = array;
    this.#currentQuestionNumber = 0;
    this.#selectedAnswer = {};

   }

   /**
    * Beállíja a következő kérdés betöltésekor a kérdéshez tartozó logikát
    * @param {NextQuestionCallBack} callback Tartalmazza a fuggvényt ami akkor fut le amikor a következő kérdésre lépünk
    */
   setNextQuestionCallBack(callback){
    this.#nextQuestionCallBack = callback;
   }

   /**
    * Beállíja a következő válaszok betöltésekor a válaszokhoz tartozó logikát
    * @param {NextAnswerCallBack} callback Tartalmazza a fuggvényt ami akkor fut le amikor a következő válaszokra lépéskor
    */
   setNextAnswerCallBack(callback){
    this.#nextAnswersCallBack = callback;
   }

   /**
    * Beállitja az eredmény kiérékeléséez szükséges függvényt
    * @param {FinihCallBack} callback  tartalmazza a függvényt ami lefut amikor végigmegyünk a kérdéseken
    */
   setNextFinishCallBack(callback){
    this.#finishCallBack = callback;
   }

   nextQusetion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer //tároljuk a válasz értékét
        this.#currentQuestionNumber++;
        if(this.#currentQuestionNumber < this.#array.length){ //VAn e még kérdés
            const nextQusetion = this.#array[this.#currentQuestionNumber];
            this.#nextQuestionCallBack(nextQusetion.questionText);
            this.#nextAnswersCallBack(nextQusetion.answers);
        }
        else{
            let counter = 0;
            for(const index in this.#array){
                if(this.#array[index].rightAnswers === this.#selectedAnswer[index]){
                    counter++; //Akkor nő a counter ha a rightanswer megegyezik a tárolt adattal
                }
            }
            const result = "A kérdéssor véget ért: " + this.#array.length + "/" + counter;
            this.#finishCallBack(result);
        }
    
   }

/**
 * Megjeleniti az első kérdést és a válaszokat
 */
   start(){
    this.#nextQuestionCallBack(this.#array[0].questionText);
    this.#nextAnswersCallBack(this.#array[0].answers);
   }

}