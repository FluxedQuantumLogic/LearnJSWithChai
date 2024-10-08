console.log("Learn Scope assignment with let,var and const");

const myName = "Renish Limbasiya"

let myId = 121213

var myCourse = "MCA"

accountName = "Savings Account"

let accountState

// myName="..." // typeerror: Assignment to constant variable.


{
    var myCourse="mc"
}

{
    let myId=333
    console.log(myId)
}


// console.log(myName);

console.table([myName,myId,myCourse,accountName,accountState]);

console.log(myId);
