const fs = require('fs');

function countStudents(path) {
  const student = fs.readFileSync(path, 'utf8');
  if (!student) {
    throw error("Cannot load the database");
  };
  const studentList = student.split('\n');
  

}