//5.  Declare three variables: one using var, one using let, and one using const. Try reassigning values to them and note any errors or behaviors.
var a = 5;
let b = 6;
const c = 5;
console.log(a, b, c);
a =  10;
b = 11
//c= 12; TypeError: Assignment to constant variable.
console.log(a, b, c);