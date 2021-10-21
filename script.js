let team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "img/wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "img/angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "img/walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "img/angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "img/scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "img/barbara-ramos-graphic-designer.jpg"
  },
];


const teamContainer = document.querySelector(".team-container")

// Ciclo per ogni persona del team
for (let i = 0; i < team.length; i++) {
  const person = team[i];
  console.log("Persone del team:",person); // Persone del team

  teamContainer.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                  <img src="${person.image}" alt="${person.name}"/>
                                </div>
                                <div class="card-text">
                                  <h3>${person.name}</h3>
                                  <p>${person.role}</p>
                                </div>
                              </div> `;

}




const newName = document.getElementById("name");
const newRole = document.getElementById("role");
const newImg = document.getElementById("image");

const btnAddMember = document.getElementById("addMemberButton");

// Aggiungere nuova persona
btnAddMember.addEventListener("click", function () {

  teamContainer.innerHTML += `<div class="team-card">
                                <div class="card-image">
                                  <img src="img/${newImg.value}" alt="${newName.value}"/>
                                </div>
                                <div class="card-text">
                                  <h3>${newName.value}</h3>
                                  <p>${newRole.value}</p>
                                </div>
                              </div> `;

newImg.value = "";                                        
newName.value = "";          
newRole.value = "";          
});