
// message type log, info, warn, error, table

//log 
console.log("I am a log message");

// info, don't write message in the bracket it will automatilcally populate
console.info('I am an information meggage');

// warning message 
console.warn('I am a warning message');

//Error message 
console.error('I am an Error message');

// table message
let student = {
    name: 'Addis',
    age: 37,
    course: 'JS'
};
console.table(student);

/*
Engins of different browsers
Chrome -> Google -> V8 Engine
FireFox -> Mozilla -> Spider Monkey
IE -> Microsoft -> Chakra
*/