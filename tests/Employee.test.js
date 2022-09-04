// Need to create testing to ensure that user record gets created correctly,
// and that we are able to use the functions we created. 
 
const Employee = require('../lib/Employee');

// We create a tester object here to use as seed data for our testing suite.
const testerEmployee = {
    name: "Elliot Alderson",
    id: "A123456",
    email: "mrRobot123@mailinator.com"
}

// Tester object is used to create a new Employee object.
const EmployeeEntry = new Employee(
    testerEmployee.name, 
    testerEmployee.id, 
    testerEmployee.email
    );

// This test will be used to verify that given the employee seed data that we have passed
// gets added to the appropriate fields and creates a new Employee object successfully.
test("If employee data creates a new employee record given the right properties", () => {
    // Here we make sure that the fields match up with the seed data. 
    expect(EmployeeEntry.name).toBe(testerEmployee.name);
    expect(EmployeeEntry.id).toBe(testerEmployee.id);
    expect(EmployeeEntry.email).toBe(testerEmployee.email);
});

// The tests below will ensure that our functions return the right data. 
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