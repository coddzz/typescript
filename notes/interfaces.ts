

// Interfaces
// Interfaces define object shapes and are extendable.
interface Employee {
  name: string;
  role: string;
  salary?: number; // optional property
}

const emp: Employee = { name: "Ameer", role: "Developer" };


// Extending:
interface Manager extends Employee {
  teamSize: number;
}

const mgr: Manager = {
  name: "John",
  role: "Manager",
  teamSize: 5
};
