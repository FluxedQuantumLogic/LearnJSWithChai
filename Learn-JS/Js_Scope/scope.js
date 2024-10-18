"use strict";


//This variable prefered global scope
let myName="Renish Limbasiya";

function printGlobal(){
    console.log("Global scope value : "+myName);
}

printGlobal();

function printLocalOrFunctionScope(){
    //This variable prefered Local/Function scope
    let myAge=21;
    console.log("Local or Function scope value : "+myAge);
}

printLocalOrFunctionScope();

if(21>20){
    //This variable prefered Block scope
    let isValid=true;
    console.log("Block scope value : "+isValid);
}


import { getModuleScopeValue } from "./ModuleSope.js";

console.log(getModuleScopeValue());