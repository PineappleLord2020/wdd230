//const baseURL = 'https://https://pineapplelord2020.github.io/wdd230/';
//const linksURL= 'https://https://pineapplelord2020.github.io/wdd230/data/links.json';

const linksURL = "/wdd230/data/links.json";

const links = document.querySelector("#assignmentLinks");

async function getAssignments() {
  const response = await fetch(linksURL);
  const data = await response.json();

  displayAssignments(data);

  //console.table(data.prophets);
}

const displayAssignments = (assignments) => {
  assignments.forEach((assignment) => {
    const week = document.createElement("p");
    week.textContent = assignment.week;

    console.log(assignment);
    links.appendChild(week);

    assignment.links.forEach((link) => {
      const linkElement = document.createElement("a");
      linkElement.textContent = link.title;
      linkElement.setAttribute("href", link.url);
      links.appendChild(linkElement);
    });

  });
};

getAssignments();

