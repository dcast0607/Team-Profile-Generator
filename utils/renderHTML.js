// Declaring a few empty arrays that we will be using to store the data so that we can
// add it as part of our HTML code.

let managerUserData = [];
let engineerUserData = [];
let internUserData = [];

function renderBaseHTMLCode(managerCode, engineerCode, internCode) {
  return new Promise((resolve, reject) => {
    
    resolve(`
    <DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Team Profile Manager</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>

    <div class="container-body min-vw-10">
        <div class="p-5 mb-5 bg-info text-dark text-center fs-1 fw-bolder">Office Team</div>
    </div>
    <div class="container-body container-fluid">
        <div class="row">
        ${managerCode}
        </div>
        <div class="row">
        ${engineerCode}
        </div>
        <div class="row">
        ${internCode}
        </div>
    </div>
    `);
});
};

function renderInternHTMLCode(internData) {
  const internCode = [];

  internData.forEach((intern) => {
    internCode.push(
        `
        <div class="col-md-4 col-sm-6 col-12 col-lg-3">
        <div class="card mb-4 rounded-3 shadow-sm p-3">
            <div class="card-header py-3">
            <h1 class="my-0 fw-normal text-center">Intern</h4>
            </div>
            <div class="card-body">
            <ul class="list-unstyled mt-3 mb-4 text-center">
                <li>${intern.name}</li>
                <li>Engineer ID: ${intern.id}</li>
                <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li>School: ${intern.school}</li>
            </ul>
            </div>
        </div>
        </div>
        `
    );
  });

  return internCode;
};

function renderEngineerHTMLCode(engineerData) {
    const engineerCode = [];
    engineerData.forEach((engineer) => {
        engineerCode.push(
            `
            <div class="col-md-4 col-sm-6 col-12 col-lg-3">
            <div class="card mb-4 rounded-3 shadow-sm p-3">
                <div class="card-header py-3">
                <h1 class="my-0 fw-normal text-center">Engineer</h4>
                </div>
                <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-center">
                    <li>${engineer.name}</li>
                    <li>Engineer ID: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>
                    Github: 
                        <a href="https://github.com/${engineer.github}">https://github.com/${engineer.github}</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            `
        );
    });
    return engineerCode;
};

function renderManagerHTMLCode(managerData) {
    const managerCode = [];
    managerData.forEach((manager) => {
        managerCode.push(
            `
            <div class="col-md-4 col-sm-6 col-12 col-lg-3">
            <div class="card mb-4 rounded-3 shadow-sm p-3">
                <div class="card-header py-3">
                <h1 class="my-0 fw-normal text-center">Manager</h4>
                </div>
                <div class="card-body">
                <ul class="list-unstyled mt-3 mb-4 text-center">
                    <li>${manager.name}</li>
                    <li>Manager ID: ${manager.id}</li>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Officer Number: ${manager.officeNumber}</li>
                </ul>
                </div>
            </div>
            </div>
            `
        )
    });
    return managerCode;
};

function userDataParser(userData) {
  // Printing data passed by from the index.js file.
  console.log(userData);

  // Validating the right user roles.
  let i = 0;
  userData.forEach((user) => {
    let currentUser = i + 1;
    console.log(`User ${currentUser} Role: `, user.getRole());
    i++;

    if (user.getRole() == "Manager") {
      managerUserData.push(user);
    } else if (user.getRole() == "Engineer") {
      engineerUserData.push(user);
    } else if (user.getRole() == "Intern") {
      internUserData.push(user);
    }
    console.log("We were not able to identify the user role.");
  });

    const managerCode = renderManagerHTMLCode(managerUserData);

    console.log(managerCode);

    const engineerCode = renderEngineerHTMLCode(engineerUserData);

    console.log(engineerCode);

    const internCode = renderInternHTMLCode(internUserData);

    console.log(internCode);

    const fetchRawHTMLCode = async () => {
        const rawHTMLCode = await renderBaseHTMLCode(managerCode, engineerCode, internCode)
        .then((data) => {
            console.log(data);
            console.log(typeof(data));
            return new Promise((resolve, reject) => {
                resolve(data);   
            });
        })
        .catch((err) => {
            console.log(err);
        })

        return new Promise((resolve, reject) => {
            resolve(rawHTMLCode);
        });
  };

  console.log("Line 167", fetchRawHTMLCode());
  console.log("Line 168", typeof(fetchRawHTMLCode()));

  return new Promise((resolve, reject) => {
    resolve(fetchRawHTMLCode());
  });
};

module.exports = userDataParser;
