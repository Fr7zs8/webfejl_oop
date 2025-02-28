const fv1 = (a, b) => {
    return a + b;
}

const fv2 = (a, b, cb) => {
    const v1 = cb(a, 2);
    const v2 = cb(b, 4);
    const osszeg = cb(v1,v2);

    return osszeg;
}

console.log(fv1(5, 7));

const res1 = fv2(5, 7, (a, b) => {return a+b} );

console.log(res1);

const res2 = fv2(5, 7, fv1);

console.log(res2);

const fv3 = (operator) => {
    if (operator == "-"){
        return (a, b) => {return a-b}
    }
    if (operator == "*2"){
        const multi = 2;
        return (a, b) => {return (a+b)*multi};
    }
}

const fv4 = fv3("-");
const res3 = fv4(5,7);
console.log(res3);

//Higher order funcionnak nevezük azt amikor a fugvénynek van egy bemeneti paramétere akkor callback vagy egy függvénnyel tér visssza
//FV3 is ilyen funkcion ez a loger order mert egy kisebb funcion
//az fv2 a meneti paraméter az alacsonyabb funcion

const res4 = fv2(5, 7, fv3('-'));
console.log(res4);

const res5 = fv2(5, 7, fv3('*2'));
console.log(res5);

