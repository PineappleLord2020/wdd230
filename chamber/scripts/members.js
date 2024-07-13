const linksURL = "../chamber/data/members.json";

const links = document.querySelector("#members");
const adSpace = document.querySelector(".spotlight")

async function getContacts() {
  const response = await fetch(linksURL);
  const data = await response.json();

  displayContacts(data);
  displayAdvertiser(data);

}

const displayContacts = (contacts) => {
  contacts.forEach((contact) => {
      const portfolio = document.createElement("section");
      links.appendChild(portfolio);
      const name = document.createElement("h3");
      name.textContent = contact.name;
      const address = document.createElement("p");
      address.textContent = contact.address;
      const phone = document.createElement("p");
      phone.textContent = contact.phone;
      //const website = document.createElement("a");
      //website.textContent = contact.website.title;
      //website.setAttribute("href", contact.website.url);
      //const image = document.createElement("img");
      //image.setAttribute("alt", contact.image.alt)
      //image.setAttribute("href", contact.image.url);
      const membership = document.createElement("h4");
      membership.textContent = contact.membershipLevel;
      const ceo = document.createElement("h4");
      ceo.textContent = `CEO: ${contact.leader}`;

      console.log(contact);
      portfolio.appendChild(name);

      contact.image.forEach((pic) => {
        const logo = document.createElement("img");
        logo.setAttribute("alt", pic.alt)
        logo.setAttribute("src", pic.url);
        logo.classList.add("companyLogo");
        portfolio.appendChild(logo); 
      })

      portfolio.appendChild(address);
      portfolio.appendChild(phone);
      //links.appendChild(website);
      //links.appendChild(image);
      portfolio.appendChild(membership);
      portfolio.appendChild(ceo);


      contact.website.forEach((site) => {
        const websiteElement = document.createElement("a");
        websiteElement.textContent = site.title;
        websiteElement.setAttribute("href", site.url);
        portfolio.appendChild(websiteElement);
      });
    });
};

getContacts();

const gridbutton = document.querySelector("#gridButton");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
	display.classList.add("gridButton");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);
function showList() {
	display.classList.add("list");
	display.classList.remove("gridButton");
}
