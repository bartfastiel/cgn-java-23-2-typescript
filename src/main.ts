console.log("Hello World!");

type Person = { name: string, age: number }

const person: Person = {
    name: "Daniel",
    age: 38.123,
};

type Age = number[]

const age: Age = [1, 2, 3, 4, 5]

age.forEach(
    (i: number) => {
        console.log("The next number is " + i);
    }
)


console.log(false || false || "Welt")

if (1) {
    console.log("Das ist truthy")
} else {
    console.log("Das ist falsy")
}




let numberOfStudents: number = 20;

numberOfStudents = 21;


console.log("=".repeat(100))


