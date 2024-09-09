document.getElementById('login-fb-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Adding this feature soon!');
  });
  
  

var users = [];

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('new-name').value;
  var email = document.getElementById('new-email').value;
  var password = document.getElementById('new-password').value;

 
  if (name === "" || email === "" || password === "") {
    document.getElementById('signup-error-msg').innerText = "Please fill in all fields";
  } else {
    alert("Account created successfully!");
   
    users.push({name: name, email: email, password: password});

    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.signup-container').style.display = 'none';
  }
});

let loginForm = document.getElementById('login-form');
loginForm.addEventListener("submit",(event)=> {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  
  if (email === "" || password === "") {
    document.getElementById('login-error-msg').innerText = "Please enter both email and password";
  } else {
  
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });

    if (user) {
      alert("Login successful!");
      window.open("facebook.html", "_blank");

    } else {
      document.getElementById('login-error-msg').innerText = "Invalid email or password";
    }
  }
});

// Toggling between login ra signup forms sanga 
document.getElementById('signup-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.signup-container').style.display = 'block';
});

  let signupLink = document.getElementById('signup-link');
  signupLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.signup-container').style.display = 'block';
  });