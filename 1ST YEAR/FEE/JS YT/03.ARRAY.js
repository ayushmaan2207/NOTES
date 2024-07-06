// Inserting

    let arr=[1,2,3,4,5];
    // 1. End
    arr.push(69);
    // 2. Start
    arr.unshift(88);
    // 3. At index
    arr.splice(2,0,'a','b')
    // console.log(arr);

// Searching

    // console.log(arr.indexOf('a'));
    // console.log(arr.indexOf('a',3));
    // console.log(arr.includes('a'));

    let courses =[
        {no:1,naam:'ayushmaan'},
        {no:2,naam:'thakur'}
    ]
    // console.log(courses.indexOf({no:1,naam:'ayush'})) // cannot use this
    let course= courses.find(function(course){
        return course.naam ==='ayushmaan';
    })
    // OR
    let course1= courses.find(course=>course.naam ==='ayushmaan');
    // console.log(course); 
    // console.log(course1);

// Removing

    // 1. End
    arr.pop();
    // 2. Start
    arr.shift(88);
    // 3. At index
    arr.splice(1,2)

// Emptying 
    let arr2=arr;
    // arr.length=0;
    // arr.splice(0,arr.length);
    // console.log(arr);
    // console.log(arr2);

    let first=[1,2,3];
    let second=[4,5,6];
    // let combine =first.concat(second);
    let combine = [...first,...second];
    // console.log(combine);
    // in slice (start,end+1)
    let sliced=combine.slice(2,4);
    // console.log(sliced);

// JOIN & SPLIT
    let num=[1,2,69,4,5];
    let joined=num.join('_');
    // console.log(joined);

    let splited = joined.split('_');
    // console.log(splited);

// SORT & REVERSE 
    // console.log(num.sort());
    // console.log(num.reverse());

// MAP & FILTER
    let numbers =[1,2,3,4,5,-10,-55];

    let filtered = numbers.filter((n)=>{
        return n>0;
    })
    // console.log(filtered);

    let value= numbers.map(function(val){
        return 'hello'+ val;
    })
    // console.log(value);

// REDUCING AN ARRAY
    let a=[1,2,3,4,5,6];
    let sum= a.reduce((prev,curr)=>prev+curr,0);
    // console.log(sum);