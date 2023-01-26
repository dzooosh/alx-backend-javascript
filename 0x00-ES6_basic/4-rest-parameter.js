export default function returnHowManyArguments(...args) {
    let x = 0;
    for (let arg of args) x++ ;
    return x;
}