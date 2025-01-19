//7. Create an object car with properties brand, model, and a method getDetails that returns "This car is a [brand] [model]". Use this inside the method.
let car={
    brand:"Toyota",
    model:"86"
};
function getDetails(){
    console.log(`This car is a ${car.brand}, and its model is ${car.model}`);
}
getDetails()