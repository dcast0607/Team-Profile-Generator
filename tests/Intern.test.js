// Need to create testing to ensure that user record gets created correctly,
// and that we are able to use the functions we created. 
 
const Intern = require('../lib/Intern');

const testerIntern = {
    name: "Ryan Howard",
    id: "C1654651",
    email: "rHoward@dundermifflin.com",
    school: "Business School"
}

const InternEntry = new Intern(
    testerIntern.name, 
    testerIntern.id, 
    testerIntern.email,
    testerIntern.school
    );


test("If employee data creates a new employee record given the right properties", () => {
    expect(InternEntry.name).toBe(testerIntern.name);
    expect(InternEntry.id).toBe(testerIntern.id);
    expect(InternEntry.email).toBe(testerIntern.email);
    expect(InternEntry.school).toBe(testerIntern.school);
});

test("If object name is returned by using the getName function", () => {
    expect(InternEntry.getName()).toBe(testerIntern.name);
});

test("If object id is returned by using the getId function", () => {
    expect(InternEntry.getId()).toBe(testerIntern.id);
});

test("If object email is returned by using the getEmail function", () => {
    expect(InternEntry.getEmail()).toBe(testerIntern.email);
});

test("If object school is returned by using the getSchool function", () => {
    expect(InternEntry.getSchool()).toBe(testerIntern.school);
});

test("If object role is returned by using the getRole function", () => {
    expect(InternEntry.getRole()).toBe("Intern");
});