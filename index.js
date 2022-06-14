// Write your solution in this file!
const employee = {
    name: 'James',
    streetAddress: '83 mustafar road',
}

function updateEmployeeWithKeyAndValue (object, key, value) {
    //console.log('this is my object', object, key, value);
    
    const newObject = {...object}
    newObject[key] = value;
    //console.log(newObject[key]);
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value) {
    object[key] = value;
    return object
}

function deleteFromEmployeeByKey (employee, key) {
    const newObject = {...employee}
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    console.log(employee)
    return employee;
}