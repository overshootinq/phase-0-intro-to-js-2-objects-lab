const employee = {
    name: 'Derrick',
    streetAddress: '63rd Street'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    return Object.assign({}, employee[key]);
}

function destructivelyDeleteFromEmployeeByKey(employee, key){ 
    delete employee[key]
    return employee;
}