// Need to create testing to ensure that user record gets created correctly,
// and that we are able to use the functions we created. 
 
const Engineer = require('../lib/Engineer');

const testerEngineer = {
    name: "Johnny Bravo",
    id: "B124124",
    email: "jBravo123@mailinator.com",
    github: "https://github.com/jbravo123"
}

const EngineerEntry = new Engineer(
    testerEngineer.name, 
    testerEngineer.id, 
    testerEngineer.email,
    testerEngineer.github
    );


test("If employee data creates a new employee record given the right properties", () => {
    expect(EngineerEntry.name).toBe(testerEngineer.name);
    expect(EngineerEntry.id).toBe(testerEngineer.id);
    expect(EngineerEntry.email).toBe(testerEngineer.email);
    expect(EngineerEntry.github).toBe(testerEngineer.github);
});

test("If object name is returned by using the getName function", () => {
    expect(EngineerEntry.getName()).toBe(testerEngineer.name);
});

test("If object id is returned by using the getId function", () => {
    expect(EngineerEntry.getId()).toBe(testerEngineer.id);
});

test("If object email is returned by using the getEmail function", () => {
    expect(EngineerEntry.getEmail()).toBe(testerEngineer.email);
});

test("If object github link is returned by using the getGithub function", () => {
    expect(EngineerEntry.getGithub()).toBe(testerEngineer.github);
});

test("If object role is returned by using the getRole function", () => {
    expect(EngineerEntry.getRole()).toBe("Engineer");
});