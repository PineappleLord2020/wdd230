const linksURL = "../chamber/data/members.json";

const links = document.querySelector("#members");

async function getContacts() {
  const response = await fetch(linksURL);
  const data = await response.json();

  displayContacts(data);

}

const displayContacts = (contacts) => {
  contacts.forEach((contact) => {
    const portfolio = document.createElement("section");
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
    ceo.textContent = `CEO: ${contact.leader}`
    


    console.log(contact);
    links.appendChild(portfolio);
    links.appendChild(name);

    contact.image.forEach((pic) => {
        const logo = document.createElement("img");
        logo.setAttribute("alt", pic.alt)
        logo.setAttribute("src", pic.url);
        links.appendChild(logo);
      });
      
    links.appendChild(address);
    links.appendChild(phone);
    //links.appendChild(website);
    //links.appendChild(image);
    links.appendChild(membership);
    links.appendChild(ceo);


    contact.website.forEach((site) => {
      const websiteElement = document.createElement("a");
      websiteElement.textContent = site.title;
      websiteElement.setAttribute("href", site.url);
      links.appendChild(websiteElement);
    });

  });
};

getContacts();