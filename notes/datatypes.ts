
// Data Types

// Primitive Types
let name: string = "SK";
let age: number = 22;
let isActive: boolean = true;
let anything: any = "can be anything";

// Array
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana"];

// Tuple
let person: [string, number] = ["SK", 22];


// enum
// named constants
enum Direction {
  Up,
  Down,
  Left,
  Right
}
console.log(Direction.Up); // 0
console.log(Direction.Left); // 2


// Union Type
let id: number | string;
id = 101;
id = "A101";

//Literal Type
let color: "red" | "blue" | "green";
color = "red";
