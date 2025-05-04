"use strict";
// Typescript Arrays
//Implicit
// let numSample = [1,2,3];
// let strSample = ['a','b','c'];
// let boolSample = [true,false];
//Explicit
// let numSample:number[] = [1,2,3];
// let strSample:string[] = ['a','b','c'];
// let boolSample:boolean[] = [true,false];
//Declare and Assign later
// let numSample:number[] = [];
// let strSample:string[] = [];
// numSample.push(1);
// strSample.push('b');
//read only
let numSample = [1, 2, 3, 4];
// numSample.push(5)
// error TS2339: Property 'push' does not exist on type 'readonly number[]'
