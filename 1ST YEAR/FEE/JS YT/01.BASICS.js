//1. ways to print in JS   
// alert("me");
// document.write("this is document write")

//2. JS console API(application programming interface)
// console.log("hello world!", 4 + 6, "another log");
// console.warn("this is warning")
// console.error("this is error")

// 3. JS Variables(container to store data values)
var n1=34;
var n2 = 56;
// console.log(n1+n2);

// 4. data types in JS
// Numbers
var num1=456;
var num2=56.76;
// string
var str1="this is a string";
var str2='this is also string';
// objects
var marks={
    ravi:34,
    shubham:78,
    harry:99.977,
}
// Booleans
var a=true;
var b=false;
// console.log(marks);
// var und=undefined;
var und;
var n=null;
// console.log(und);

// arrays
var arr=["ayush",2,3,4,5]
// console.log(arr);
// console.log(arr[0]);

/* At a very high level, there are 2 types of data types:
    1. Primitive data types: undefined, null, number, string, boolean, symbol
    2. Reference data types: arrays & objects
*/

//5. Operators in JS
// airthematic operators
var a=34;
var b=56;
// console.log("The value of a+b is",a+b);
// assignment operators
var c=b;
c+=a;
// console.log(c);
// comparison operators
var x=34;
var y=56;
// console.log(x==y);
// boolean operators
// console.log(true && false);
// console.log(true || false);
// console.log(!false);

// 6. Functions in JS
function avg(a,b){
    return (a+b)/2;
}
c1 = avg(4,6);
// console.log(c1);

// 7.Conditionals in JS
var age=34;
if (age>21){
    // console.log("adult");
}
else if(age>18){
    // console.log("teenager");
}
else{
    // console.log("kid");
}

// 8. Loops in JS
var arr=[1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++){
    if(i==2){
        break;
    }
    // console.log(arr[i]);
}
arr.forEach(function(element){
    // console.log(element);
})
// const ac=0; (cannot be changed)
// Let (value is assigned within the loop)
let j=-1;
do{
    if(j==2){
        j++;
        continue;
    }
    // console.log(arr[j]);
    j++;
}while(j<arr.length)

// 9. Array methods in JS
let myarr=["fan","camera",45,null];
// console.log(myarr.length);
// myarr.pop();
// myarr.push("ayush");
// myarr.shift(); // removes 1st ele
// myarr.unshift("ayush");
// const newlen=myarr.unshift("ayush");
// console.log(newlen);
// console.log(myarr.toString());
// console.logs(myarr);
var arr=[1,4,6,43,23,32324];
arr.sort() // sort in lexiographical order
// console.log(arr);

// 10. String methods in JS
let mystr="my name is ayushmaan ayush"
// console.log(mystr.length);
// console.log(mystr.indexOf("ayush"));
// console.log(mystr.lastIndexOf("ayush"));
// console.log(mystr.slice(0,4));
// console.log(mystr.replace("ayushmaan","ayush"));

// 11. Dates in JS 
let mydate= new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());