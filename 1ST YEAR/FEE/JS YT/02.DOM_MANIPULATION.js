// 01. Get element
let ele = document.getElementById('click');
// console.log(ele);
let eleclass = document.getElementsByClassName('container');
// console.log(eleclass);
tn = document.getElementsByTagName('div');
// console.log(tn);

// 02. CSS in JS
ele.style.background="yellow";
eleclass[0].classList.add('bg-primary');
eleclass[0].classList.add('text-success');
eleclass[0].classList.remove('text-success');

// 03. HTML in JS
// console.log(eleclass[0].innerHTML);
// console.log(eleclass[0].innerText);
ce = document.createElement('p');
ce.innerText = "this is created para"
tn[0].appendChild(ce);
ce2 = document.createElement('b');
ce2.innerText = "this is created bold"
tn[0].replaceChild(ce2, ce);
// removes an element
// removeChild(ele); 

// 04. Selecting using Queries
// sel = document.querySelector('.container');
sel = document.querySelectorAll('.container');
console.log(sel);
