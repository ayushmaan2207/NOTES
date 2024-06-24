// 01. Events in JS
    function clicked() {
        const pre=document.querySelectorAll(".container")[0].innerHTML;
    document.querySelectorAll(".container")[0].innerHTML =
        "<b>button was clicked<b>";
    console.log("button was clicked");
    setTimeout(function(){
        document.querySelectorAll(".container")[0].innerHTML=pre;
    },1000);

    }
    window.onload = function () {
    console.log("document was loaded");
    };
    firstcontainer.addEventListener("click", function (event) {
    console.log(event);
    });
    let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
    secondcontainer.addEventListener("mouseup", function () {
    document.querySelectorAll(".container")[1].innerHTML = prevHTML;
    });
    secondcontainer.addEventListener("mousedown", function () {
    document.querySelectorAll(".container")[1].innerHTML = "<b>( ``3)<b>";
    
    });

    // Prevent Default
    let prevent = document.getElementsByTagName("a")[1];
    prevent.addEventListener("click", function (event) {
    event.preventDefault();
    // function me hi use hoga
    });

    // Event Phase
    let mydiv = document.createElement("div");
    function parastatus(event) {
        // sirf button pe click krne pe work kre to nodename use kro
        if(event.target.nodeName==='INPUT'){
            console.log("button " + event.target.id);
        }
    }
    mydiv.addEventListener("click", parastatus);

    for (let i = 0; i <3; i++) {
    let newele = document.createElement("input");
    newele.type = "radio";
    newele.name = "radioGroup";
    newele.id = i+1;
    mydiv.appendChild(newele);
    }
    document.body.appendChild(mydiv);

// 02. Document Fragment (virtual DOM)
    const t1=performance.now();
    let fragment=document.createDocumentFragment();
    for(let i=0;i<10;i++){
        let ne=document.createElement('p');
        ne.textContent='This is para '+ (i+1);
        fragment.appendChild(ne);
    }
    document.body.appendChild(fragment);//only 1 Reflow & 1 Repaint
    const t2=performance.now();
    console.log("this took "+ (t2-t1)+" ms.");


// 03. setTimeout & setInterval
    logkro = () => {
    document.querySelectorAll(".container")[1].innerHTML =
        "<b>set timeout fired<b>";
    console.log("i am your log");
    };
    // setTimeout(logkro,2000); // to delay a task
    // setInterval use to do task repeatedly
    // clr = setInterval(logkro,2000);
    // to stop it use clearInterval(clr)/clearTimeout(clr)

// 04. JS Local Storage
localStorage.setItem("name", "ayush");
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name')
// localStorage.clear
// console.log(localStorage);

// 05. JSON(JS Object Notation)
obj = { name: "ayush", length: 1, a: { this: 'tha"t' } };
// convert into string
js = JSON.stringify(obj);
// console.log(typeof js);
// console.log(js);
// convert back from string
par = JSON.parse(`{"name":"ayush","length":1,"a":{"this":"that"}}`);
// console.log(par);

