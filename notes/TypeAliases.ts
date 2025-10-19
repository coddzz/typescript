
//Literal Type
let color: "red" | "blue" | "green";
color = "red";
// So "red" | "blue" | "green" are string literal types.
// color = "yellow"; // Error — not allowed


//Type Aliases
// you can name a type and reuse it.

type user = {
    name: string,
    age: number
}
let user1:user = {name:"sarath", age:27}
console.log(user1)
// { name: 'sarath', age: 27 }
// You can use literals with numbers and booleans too.



// Literal Types + Type Aliases
// You can create custom literal unions for reusability
type Direction = "up" | "down" | "left" | "right";
let move: Direction;

move = "up";   
move = "right"; 
// move = "forward"; //Error