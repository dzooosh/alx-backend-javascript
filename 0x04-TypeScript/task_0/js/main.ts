interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

class studentDetail {
    firstName: string;
    lastName: string;
    age: number;
    location: string;

    constructor(firstName: string, lastName: string, age: number, location: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
}

const studA: Student = new studentDetail("Joshua", "Alonge", 26, "Ibadan");
const studB: Student = new studentDetail("Temitope", "Tochi", 21, "Ondo");

// creating an array that stores the sttudents
const students: Student[] = [studA, studB]
