
let signinForm = document.querySelector('.signin-form')

    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();
      
        let signinFd = new FormData(signinForm);
        let obj = Object.fromEntries(signinFd);
      
        let result = JSON.parse(localStorage.getItem("registratsiya"));
    
        if(obj.username === result.username && obj.password === result.password)
        window.location.href = '../portfolio.html'
        else
        window.location.href = '../signup.html'
            
      });



