//  HOISTING : process of moving only func. declaration to top of the file & it is done automatically
    // run()
    // 1. function declaration
    function run() {
        console.log("running");
    }
    // 2. func. assignment
    let stand= function walk() {
        console.log("walking");
    }
    // stand() //cannot use above func. and walk()

    // 3. anonymous func. assignment
    let stand1= function(){
        console.log("walking");
    }
    // stand1();

// ARGUMENTS (it is an object not an array)
    function sum(a,b){
        // console.log(arguments);
        // return a+b;
        let total=0;
        for(let value of arguments){
            total+=value;
        }
        return total;
    }
    let ans= sum(1,2,3,4,5);
    // console.log(ans);

// REST OPERATOR
    function sum1(l,b,...a){
        console.log(a);
    }
    // sum1(1,2,3,4,5);

// DEFAULT PARAMETER
    function interest(p,r=5,y=10){
        return p*(r/100)*y;
    }
    // console.log(interest(1000,6));
    // console.log(interest(1000,undefined,5));

// GETTER & SETTER
    let person={
        fname:'Ayush',
        lname:'Thakur',
        get fullName(){
            return`${person.fname} ${person.lname}`;
        },
        set fullName(value){
            if((typeof value )!== "string"){
                // console.log(typeof value);
                throw new Error ("you have not sent a string")
            };
            let parts= value.split(" ");
            this.fname=parts[0];
            this.lname=parts[1];
        }
    };

    
    // console.log(person.fullName);
    // console.log(person);
    // person.fullName='ayushmaan thakur';
    // console.log(person.fullName);
    // console.log(person);

// TRY & CATCH
    try{
        person.fullName ="true";
    }
    catch(e){
        alert(e);
    }

// SCOPE
     {
        let a=5;
        // console.log(a);
    }
    // console.log(a);