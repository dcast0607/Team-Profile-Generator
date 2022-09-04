// Need to create testing to ensure that user record gets created correctly,
// and that we are able to use the functions we created. 
 
const Manager = require('../lib/Manager');

const testerManager = {
    name: "Michael Scott",
    id: "A1543451",
    email: "mscott@dundermifflin.com",
    officeNumber: "12345"
}

const ManagerEntry = new Manager(
    testerManager.name, 
    testerManager.id, 
    testerManager.email,
    testerManager.officeNumber
    );


test("If employee data creates a new employee record given the right properties", () => {
    expect(ManagerEntry.name).toBe(testerManager.name);
    expect(ManagerEntry.id).toBe(testerManager.id);
    expect(ManagerEntry.email).toBe(testerManager.email);
    expect(ManagerEntry.officeNumber).toBe(testerManager.officeNumber);
});

test("If object name is returned by using the getName function", () => {
    expect(ManagerEntry.getName()).toBe(testerManager.name);
});

test("If object id is returned by using the getId function", () => {
    expect(ManagerEntry.getId()).toBe(testerManager.id);
});

test("If object email is returned by using the getEmail function", () => {
    expect(ManagerEntry.getEmail()).toBe(testerManager.email);
});

test("If object officeNumber is returned by using the getOfficeNumber function", () => {
    expect(ManagerEntry.getOfficeNumber()).toBe(testerManager.officeNumber);
});

test("If object role is returned by using the getRole function", () => {
    expect(ManagerEntry.getRole()).toBe("Manager");
});