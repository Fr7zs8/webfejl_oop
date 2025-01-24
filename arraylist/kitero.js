function Fun(param){
    console.log(param.nev);
}

function FunA(){
    console.log(this.nev);
}
// FunB({nev: "Hello"}); Igy nem lehet meghívni felette
 
const FunB = function (param){ //Függvényeket constként fogjuk dekklarálni
    console.log(param.nev);
}

const FunC = (param) =>{ //Arrow funcion 
    console.log(param.nev);
}
//Arrow function mit tudunk: Nem lehet constructor function, Nincsen thises cucca a scopon, a nagyobb scoprol szedi, nincs bind, leggyakrabban használni. 

const object = {
    nev: "jános",
    szul_ev: 1923
};

Fun(object);
Fun({nev: "cirmi"});

const alma = Fun; //Hoisting meg a binding
alma({nev: "körte"});

const korte = FunA.bind({nev: "Cirmi"}); //A this-e lesz ez a nev
korte();

FunC({nev: "Károly"});

const obj ={
    fanA: (param) => {console.log(param.nev)},
    fanB: (param) => {console.log(param.eletkor)}
}

obj.fanA({nev: "Béla"});
obj.fanB({eletkor: 12});