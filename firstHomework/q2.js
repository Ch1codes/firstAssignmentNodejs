function calculator(a, b, op){
    console.log("Result: ");
    switch(op){
        case '+':
            console.log(a+b);
            break;
        case '-': 
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
        default:
            console.log("invalid");

    }
}
calculator(2,3,'+')