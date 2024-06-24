// Promise
    let meraPromise = new Promise(function(resolve,reject){
        setTimeout(() => {
            // console.log('i am inside promise');  
        }, 2000);
        // resolve(1998);
        // reject(new Error(' Bhai shaab error'));
    });
    // console.log('Pehla');

    meraPromise.then((value)=>{
        let meraPromise2 = new Promise(function(resolve,reject){
            setTimeout(() => {
                // console.log('i am inside promise2');  
            }, 1000);
            resolve("p2 resolve hogya");
        })
        return meraPromise2;
    }).then((value)=>{console.log(value)});
    meraPromise.catch((error)=>{console.log("error aagya")});

// Async-Await
    async function abcd(){
        return 'async always return promise';
    }
    // console.log(abcd());

    async function mausam(){
        let pklMausam = new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve('Bohot garmi hai yaar');  
            }, 1000);
        });
        let hpMausam = new Promise(function(resolve,reject){
            setTimeout(() => {
                resolve('thandak mili');  
            }, 2000);
        });
        let PM= pklMausam;
        let HM= hpMausam;
        return[PM,HM]
    }
    // console.log(mausam());

// Fetch API
    async function utility(){
        let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');//it returns a promise
        let output= await content.json();// json= js object notation
        console.log(output);
    }
    // utility();

// Post API
    async function helper(){
        // no need to remember this just search it on json placeholder
        let options= {
            method: 'POST',
            body: JSON.stringify({
              title: 'ayush',
              body: 'gym jake bnani hai',
              userId: 2004,
              weight:"badh hi nhi rha",
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        };
        let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
        let response = content.json();
        return response;
    }
    // console.log(helper());
    async function chalao(){
        let ans= await helper();
        console.log(ans);
    }
    // chalao();
    
// Closures 
    function init(){
        let name="ayushmaan";
        function displayName(){
            console.log(name);
        }
        return displayName;
    }
    const a=init();
    a();
      