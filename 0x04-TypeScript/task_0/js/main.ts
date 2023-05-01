interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const studA: Student = {
    firstName: "Joshua",
    lastName: "Alonge",
    age: 26,
    location: "Ibadan",
};
const studB: Student = {
    firstName: "Temitope",
    lastName: "Tochi",
    age: 27,
    location: "Akure",
}

// creating an array that stores the sttudents
const studentsList: Array<Student> = [studA, studB];

const body = document.getElementsByTagName("body")[0];
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const th1 = document.createElement('th');
const th2 = document.createElement('th');

const header_row = document.createElement('tr');

header_row.append(th1, th2);
thead.appendChild(header_row);

studentsList.forEach((stud) => {
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerHTML = stud.firstName;
    const td2 = document.createElement('td');
    td2.innerHTML = stud.location;

    row.append(td1, td2);
    tbody.appendChild(row);
});

table.append(thead, tbody);
body.append(table);