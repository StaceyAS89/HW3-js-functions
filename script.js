console.log('------------- #4a')

function sum(a,b) {
   let sum = (a+b);
   console.log(sum);
}
sum(4,5);

console.log('------------- #4b')

function subtract(a,b) {
    let substract = a - b;
    console.log(substract);
}
subtract(10,7);

console.log('------------- #4c')

function multiply(a,b) {
    let multiply = a * b;
    console.log(multiply);
}

multiply(6,7);


console.log('------------- #4d')

function divide(a,b) {
    let division = a / b;
    console.log(division);
}

divide(6,9);

console.log('------------- #5')

function output(n) {
for (i = 1; i<=n; i++){
    console.log(i);
}
}
output(5);

console.log('------------- #6')

function output(n) {
for (i = n; i>0; i--){
    console.log(i);
}
}
output(5);

console.log('------------- #7')
 
function pow(x,n) {
    let result = x**n;
    console.log(result);
}
pow(2,10);


console.log('------------- #8')

function isBigger(a,b) {
    return a > b;
}
let result = isBigger(5, -1);
console.log(result);

console.log('------------- #9')

function isSmaller(a,b) {
    return a < b;
}
let resultSmaller = isSmaller(5,-1);
console.log(resultSmaller);