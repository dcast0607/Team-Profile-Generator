// Need to create testing to ensure that user record gets created correctly,
// and that we are able to use the functions we created. 
 
const Employee = require('../lib/Employee');

const testerEmployee = {
    name: "Elliot Alderson",
    id: "A123456",
    email: "mrRobot123@mailinator.com"
}

const EmployeeEntry = new Employee(
    testerEmployee.name, 
    testerEmployee.id, 
    testerEmployee.email
    );


test("If employee data creates a new employee record given the right properties", () => {
    expect(EmployeeEntry.name).toBe(testerEmployee.name);
    expect(EmployeeEntry.id).toBe(testerEmployee.id);
    expect(EmployeeEntry.email).toBe(testerEmployee.email);
});

test("If object name is returned by using the getName function", () => {
    expect(EmployeeEntry.getName()).toBe(testerEmployee.name);
});

test("If object id is returned by using the getId function", () => {
    expect(EmployeeEntry.getId()).toBe(testerEmployee.id);
});

test("If object email is returned by using the getEmail function", () => {
    expect(EmployeeEntry.getEmail()).toBe(testerEmployee.email);
});

test("If object role is returned by using the getRole function", () => {
    expect(EmployeeEntry.getRole()).toBe("Employee");
});