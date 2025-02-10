const sum = (a,b) => { return a+b};

const obj = {};

obj.calculate1 = sum;

obj.calculate2 = (callback) => {
    const a = 5;
    const b = 10;
    return callback(a,b);
    
}

console.log(obj.calculate2((a,b) => a+b));
console.log(obj.calculate2((a,b) => a-b));

obj.calculate3 = (a, b, callback) => {
    return callback(a,b)
}

console.log(obj.calculate3(4, 6, (a, b) => a*b));

const theFunction = () => {
    const szam = 10;
    return obj.calculate2((a, b) => a *szam + b);
}

console.log(theFunction());