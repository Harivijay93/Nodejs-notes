const imports =require('./data'); //require runs the file given path

console.log(imports.studentname);

//Another method
const {studentname,ages} =require('./data');

console.log(studentname,ages);


// Default modules
const os =require('os');
console.log(os);  //homedir()
