let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name,%20picture,%20email,%20location,%20phone,%20dob%20&noinfo%20&nat=US`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");


function displayEmployees(employeeData){
  employees = employeeData;

  let employeeHTML = '';

  employees.forEach((employee, index) => {
    let name = employee.name;
    let email = employee.email;
    let city = employee.city;
    let picture = employee.picture;

    employeeHTML +=`
      <div class ="card" data-index="${index}">
        <img class="avatar" src="${picture.large}" />
        <div class="text-container">
          <h2 class="name">${name.first} ${name.last}</h2>
          <p class="email">${email}</p>
          <p class="address">${city}</p>
        </div>
      </div>
    `
  });
  gridContainer.innerHTML = employeeHTML;
}

fetch(urlAPI)
 .then(res => res.json())
 .then(res => res.results)
 .then(displayEmployees)
 .catch(err => console.log(err))

