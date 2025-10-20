
// class

class person {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hi, I'm ${this.name} and Im ${this.age}`)
    }

    greet1(): void{
        console.log(`hi, I am ${this.name}`)
    }
}

const p1 = new person("Kevin", 22)
p1.greet();
p1.greet1();
