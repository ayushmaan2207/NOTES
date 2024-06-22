// Creating object
let rectangle ={
    length: 1,
    breadth: 2,
    // this draw is behaviour of object &  this is called Method not function
    draw: function(){
        console.log("rectangle draw hua");
    }
}
// rectangle.draw();

// 1. Factory Function

function createRectangle (length,b) {
    return rectangle ={
        length,
        breadth: b,
        // can write in this way also
        draw(){
            console.log("rectangle draw hua");
        }
    }
}
let rec1= createRectangle(5,6);
// console.log(rec1);

// 2. Constructor Function ->Pascal Notation : CreateRectangle

function CreateRectangle(length,breadth){
    this.length=length;
    this.breadth=breadth;
    this.draw= function(){
        console.log("rectangle draw hua");
    }
}

let rec2= new CreateRectangle(5,6);
// console.log(rec2);

// Dynamic property and constructor

rec2.color ='yellow';
// console.log(rec2);
delete rec2.color;
// console.log(rec2);

// console.log(rec2.constructor);
// console.log(CreateRectangle.constructor);

let CreateRectangle1 = new Function("length","breadth",`this.length=length;
    this.breadth=breadth;
    this.draw= function(){
        console.log("rectangle draw hua");
    }`);
let rec = new CreateRectangle1(3,4);
// console.log(rec);

// for in loop
for(let key in rec){
    // console.log(key,rec[key]);
}

// for of loop (used only in iterable)
for(let key of Object.entries(rec)){
    // console.log(key);
}
for(let key of Object.keys(rec)){
    // console.log(key);
}

if("color" in rec){
    // console.log("color not present");
}
else{
    // console.log("color present");
}

// Object Cloning
let a={
    x:10,
    y: 20
}
// 1. Iteration
// let b={}
// for(let key in a){
//     b[key]=a[key];
// }

// 2. Assign
// let b = Object.assign({},a,rec);

// 3. Spread
let b={...a,...rec1};

// console.log(b);

// IN-BUITL OBJECTS

// ~ Math
Math.random()
Math.PI
Math.round(1.8)
Math.round(1.2)
Math.max(2,3,4,5)
Math.abs(-2) //make no. positive

// ~String
// {there are 2 types of strings in Js primitive & object}
// 1. primitive : 
let pname ="ayush";
// if we use  . notation it will treat as object 
pname.length
pname.includes("ayu")
pname.startsWith("ayu")
// console.log(pname.slice(0,3));
// 2. object :
let oname=new String("ayush"); 

let message="helllo my name is ayush";
let word = message.split(' ');
// console.log(word);

// Template literals
let m=`this is ${oname}
message`;
// console.log(m);
