let signupForm = document.querySelector('.signup-form')

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let fd = new FormData(signupForm);
    let obj = Object.fromEntries(fd);
  
    localStorage.setItem("registratsiya", JSON.stringify(obj));

    window.location.href = '../portfolio.html'
  });