
//functions
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));



// Optional parameter
function greet(name?: string) {
  console.log(`Hello, ${name || "Guest"}`);
}
greet()  //  Hello, Guest




// Default Parameter
function greet1(name: string = "User") {
  console.log(`Welcome ${name}`);
}
greet1()   //  Welcome User




// Void Return
function logMessage(msg: string): void {
  console.log(msg);
}

logMessage("hello")  //hello