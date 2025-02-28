class Area {
     #div;
     get div(){
         return this.#div;
     }

     constructor(cssclass,manager){
        const container = this.#getContainer()
        this.#div = document.createElement('div');
        this.#div.className = cssclass;
        container.appendChild(this.#div);
        manager.setFinishCallback(result => {
            container.innerHTML = '';
            const div = document.createElement('div');
            div.className = 'result';
            div.textContent = result;
            container.appendChild(div);
        })
     }
 
     #getContainer(){
         let container = document.querySelector('.container')
         if(!container){
             container = document.createElement('div');
             container.className = 'container';
             document.body.appendChild(container);
         }
         return container;
     }
}

class DeckArea extends Area{

    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setNextCardCallback(answer => {
            this.div.innerHTML = '';
            const skip = document.createElement('button');
            skip.addEventListener('click', () => {
                manager.nextCard();
            })
            skip.textContent = 'skip';
            this.div.appendChild(skip);
            const cardElement = document.createElement('div');
            cardElement.textContent = answer;
            cardElement.className = 'largecard';
            cardElement.addEventListener('click', () => {
                manager.nextCard(answer)
            })
            this.div.appendChild(cardElement);
        })
    }

}


class SolutionArea extends Area{

    constructor(cssClass, manager){
        super(cssClass, manager);
        manager.setAppendCardToSolutionCallback(answer => {
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = answer;
            this.div.appendChild(card);
        })
    }
}