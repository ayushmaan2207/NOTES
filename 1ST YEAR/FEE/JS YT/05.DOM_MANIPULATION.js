// 01. Get element
    let ele = document.getElementById('click');
    // console.log(ele);
    let eleclass = document.getElementsByClassName('container');
    // console.log(eleclass);
    tn = document.getElementsByTagName('div');
    // console.log(tn);

// 02. CSS in JS
    ele.style.background="yellow";
    ele.style.cssText="color:white; background-color:green; font-size:20px";
    ele.setAttribute('id',"use style for css")
    eleclass[0].classList.add('bg-primary');
    eleclass[0].classList.add('text-success');
    eleclass[0].classList.remove('text-success');

// 03. HTML in JS
    // 1. Creating element
    // console.log(eleclass[0].innerHTML);
    // console.log(eleclass[0].innerText);
    ce = document.createElement('p');
    ce.innerText = "this is created para" 
    tn[0].appendChild(ce);
    ce2 = document.createElement('b');
    ce2.innerText = "this is created bold"

    let element= document.getElementById('firstcontainer');
    let textToAdd = document.createElement('h3');
    textToAdd.textContent="hello ji ( ``3)";
    element.insertAdjacentElement('beforeBegin',textToAdd);

    // 2. Removing/ Replacing element
    tn[0].replaceChild(ce2, ce);
    // tn[0].removeChild(ce2);
    // ce2.parentNode.removeChild(ce2);

// 04. Selecting using Queries
    // it will give only single element in case of multiple output it will give first element
    // sel = document.querySelector('.container');

    // query selector all will give all elements
    sel = document.querySelectorAll('.container');
    // console.log(sel);
