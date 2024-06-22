// 01. Events in JS
function clicked() {
    // document.querySelectorAll('.container')[1].innerHTML='<b>we have clicked<b>'
    // console.log('button was clicked');
}
window.onload = function () {
    // console.log("document was loaded");
}
firstcontainer.addEventListener('click', function () {
    // console.log('clicked on container')
})
firstcontainer.addEventListener('mouseover', function () {
    // console.log('mouse on container')
})
firstcontainer.addEventListener('mouseout', function () {
    // console.log('mouse out of container')
})
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML=prevHTML
    // console.log('mouse up when clicked on container')
})
firstcontainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML='<b>we have clicked<b>'
    // console.log('mouse down when clicked on container')
})
// 02. Arrow functions
function sum(a, b) {
    // return a+b;
}
// used when we have to add function in between code
sum = (a, b) => {
    // return a+b;
}

// 03. setTimeout & setInterval
logkro = () => {
    document.querySelectorAll('.container')[1].innerHTML = '<b>set timeout fired<b>'
    console.log("i am your log");
}
// setTimeout(logkro,2000); // to delay a task
// setInterval use to do task repeatedly
// clr = setInterval(logkro,2000);
// to stop it use clearInterval(clr)/clearTimeout(clr)

// 04. JS Local Storage
localStorage.setItem('name', 'ayush');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name')
// localStorage.clear
// console.log(localStorage);

// 05. JSON(JS Object Notation)
obj = { name: "ayush", length: 1, a: { this: 'tha"t' } }
// convert into string
js = JSON.stringify(obj);
// console.log(typeof js);
// console.log(js);
// convert back from string
par= JSON.parse(`{"name":"ayush","length":1,"a":{"this":"that"}}`)
// console.log(par);

// 06. Template literals - backtciks(``)
a=18;
// console.log(`my age is ${a}`);
// ECMA Script (have list of JS versions)