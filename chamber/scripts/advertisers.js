const linksURL = "../chamber/data/members.json";

const links = document.querySelector("#members");
const adSpace = document.querySelector(".spotlight")

async function getContacts() {
  const response = await fetch(linksURL);
  const data = await response.json();

  displayContacts(data);
  displayAdvertiser(data);

}

const displayAdvertiser = (advertise) => {
    const title = document.createElement("h3");
    title.textContent = advertize.name;
    adSpace.appendChild(title);
    advertise.image.forEach((pic) => {
      const logo = document.createElement("img");
      logo.setAttribute("alt", pic.alt)
      logo.setAttribute("src", pic.url);
      adSpace.appendChild(logo);
    });
    const membership = document.createElement("h4");
    membership.textContent = advertize.membershipLevel;
    const ceo = document.createElement("h4");
    ceo.textContent = `CEO: ${advertise.leader}`;
    adSpace.appendChild(membership);
    adSpace.appendChild(ceo);
    advertise.website.forEach((site) => {
      const websiteElement = document.createElement("a");
      websiteElement.textContent = site.title;
      websiteElement.setAttribute("href", site.url);
      adSpace.appendChild(websiteElement);
    });
  
  }
  
  getContacts();