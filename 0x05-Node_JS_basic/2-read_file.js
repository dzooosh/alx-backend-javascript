function countStudents(csvfile) {
  const fs = require('fs');
  const csv = require('csv-parser');

  //check if the arg is a path or not
  try {
    fs.accessSync(csvfile);

    results = [];
    
    fs.createReadStream(csvfile)
      // pass data the csv-parser
      .pipe(csv()) 
      // push each row of data to an array
      .on('data', (data) => results.push(data)) 
      .on('end', () => {
        console.log(`Number of students: ${results.length}`);
        fields = []
        for (const result of results) {
          fields.push(result.field);
        }
        // create a unique value for similar fields 
        const uniqFields = new Set(fields);
        ufields = [...uniqFields];
        // create list based on unique fields and obtain 
        //+number of list of firstnames
        // create the list named after uniq field - push all data belonging to each
        //+get the number and list
        ufields.forEach(field => {
          lst = []
          for (const result of results) {
            if (field === result.field){
              lst.push(result.firstname)
            }
          }
          console.log(`Number of students in FIELD: ${lst.length}. List: ${lst}`)
        });
      });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  
};

module.exports = countStudents;
