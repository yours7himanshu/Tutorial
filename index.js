
// factory function Method=------>
// function createRectangle(length,breadth){

//     return rectangle = {
//         length:length,
//         breadth:breadth,

//         draw() {
//             console.log('drawing rectangle');
//         }


//     };
// }
// let rectangle1 = createRectangle(5,8);
// let rectangle2 = createRectangle(7,8);
// let rectangle3 = createRectangle(9,8);


// Constructor function method------->
// function Rectangle(length,breadth) {
//     this.length =length;
//     this.breadth =breadth;

//     this.draw = function() {
//         console.log('drawing');
//     }
// }


// // object creator using constructor funtion
// let rectangleObject = new Rectangle(7,9);
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);


// let a = {value:10};
// let b =  a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let Rect = new Function('length','breadth',` this.length =length;
// this.breadth =breadth;

// this.draw = function() {
//     console.log('drawing');
// }`);
//  let a = {value:10};
//  function inc(value){
//     value.a++;
//  }

//  inc(value.a);
//  console.log(value.a);


// for-in loop------->

let rectangle ={
    length:2,
    breadth:3,

};
// for(let key in rectangle){
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    // console.log((key),rectangle[key]);



    // We can appy for for-of loop in objects
for(let key of Object.entries(rectangle)){
    console.log(key);
}

if('length' in rectangle){
    console.log('Present');
}
else{
    console.log('Absent');
}


let firstName = 'Himanshu'
let lastName = new String('Dinkar');

let message = `Hello Guys 
My name is Himanshu
And i am very glad to meet with you`;
// let words = message.split(' ');

// console.log(words);
console.log(message);
console.log('Hello World');



let date = new Date();
console.log(date);



// let numbers = [1,4,5657,5];

// console.log(numbers);


// Searching

let numbers = [1,4,5,2,6];
console.log(numbers.indexOf(5));

// We want to check if the number exist on the array



console.log("")