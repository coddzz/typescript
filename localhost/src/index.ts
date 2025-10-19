
let word : string = "typescript";
console.log(word)

//Data Types

let name: string = "kevin";
let age: number = 25;
let isActive: boolean = true;
let anything: any = "can be anything";


// functions
function capitalizeFirst(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(
capitalizeFirst("javascript is fun to learn and practice."));