var firstName = 'Johon';
var age = 14;

age >= 18 ? console.log(firstName + 'drinks beer.'):console.log(firstName + 'drinks juice/');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

var job = 'teacher';
switch(job){
    case 'teacher':
        console.log(firstName + 'teacher kids how to code.');
        break;
    case 'driver':
        console.log(firstName + 'drives an uber in lisbon.');
        break;
    case 'driver':
        console.log(firstName + 'designer beautiful website');
        break;
    default:
        console.log(firstName + 'does something else ')
    }

switch(true){
    
    case age < 13:
        console.log(firstName + 'is a boy.');
        break;
    case age<20:
        console.log(firstName + 'is a teenager');
        break;
    case age<30:
        console.log(firstName + 'is a young man.')
    default:
        break;
}