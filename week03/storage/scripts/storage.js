function welcomeUser() {
    // get name from localStorage
    const name = window.localStorage.getItem('name');
   
    // if name exists, display welcome message
    if (name) {
      // get reference to h2 element
      const h2 = document.querySelector('h2');
      
      // set welcome message
      h2.textContent = `Welcome ${name}, you are now logged in.`;
    }
  }
   
  document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
   
    // get value from input box
    const name = document.querySelector('input').value;
   
    //TEMP:
    console.log(name);
   
    // store value in localStorage
    localStorage.setItem('name', name);
   
    welcomeUser();
  });
   
  welcomeUser();