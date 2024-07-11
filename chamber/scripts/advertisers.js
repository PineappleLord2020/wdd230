const linksURL = "../chamber/data/members.json";

const adSpace = document.querySelector("#businesses")

async function getContacts() {
  const response = await fetch(linksURL);
  const data = await response.json();

  displayAdvertiser(data);

}

const displayAdvertiser = (advertise) => {
    const title = document.createElement("h3");
    title.textContent = advertise[0].name;
    adSpace.appendChild(title);
    advertise[0].image.forEach((pic) => {
      const logo = document.createElement("img");
      logo.setAttribute("alt", pic.alt)
      logo.setAttribute("src", pic.url);
      adSpace.appendChild(logo);
    });

    const membership = document.createElement("h4");
    membership.textContent = advertise[0].membershipLevel;
    const ceo = document.createElement("h4");
    ceo.textContent = `CEO: ${advertise[0].leader}`
    adSpace.appendChild(membership);
    adSpace.appendChild(ceo);
    advertise[0].website.forEach((site) => {
      const websiteElement = document.createElement("a");
      websiteElement.textContent = site.title;
      websiteElement.setAttribute("href", site.url);
      adSpace.appendChild(websiteElement);
    });
  };
  
  getContacts();