//function greetTheStudent(studentName){ // parameter // Named function
//return  `Hello There ${studentName}`;

//}

// console.log('Hello there');

//const greetTheStudent= function (studentName){ // parameter // anonymous function // expression
//return  `Hello There ${studentName}`;
//}

// Fat arrow function

//const greetTheStudent= function (studentName)=> { // parameter // anonymous function // expression
//return `Hello There ${studentName}`;

//}

function greetTheStudent(studentName){

     return `Hello There ${studentName}`;
}
const student = "Mary Jane";
const greet = greetTheStudent(student); //argument
console.log(greet);

//const fullName = function(firstName, middleName, lastName){
//return`${lastName}, ${middleName}. ${firstName}`;
//}

//const fullName = function(firstName, middleName, lastName) =>{
//return`${lastName}, ${middleName}. ${firstName}`;
//}

const fullName = (firstName, middleName, lastName) =>
  `${lastName}, ${middleName}. ${firstName}`;



const titleName = fullName("Mary", "R", "Jane");
// console.log(titleName)

//console.log(message +''+ studentName);
//console.log(message +''+ studentName2);
