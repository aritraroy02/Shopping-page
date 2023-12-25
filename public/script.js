async function signup() {
  const username = document.querySelector('.sign-up-form input[type="text"]').value;
  const email = document.querySelector('.sign-up-form input[type="email"]').value;
  const password = document.querySelector('.sign-up-form input[type="password"]').value;

  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const result = await response.json();

  alert(result.username + ' registered successfully!');
}

async function login() {
  const email = document.querySelector('.sign-in-form input[type="email"]').value;
  const password = document.querySelector('.sign-in-form input[type="password"]').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const result = await response.json();

  if (response.ok) {
    // Successful login, redirect to homepage.html
    window.location.href = '/homepage.html';
  } else {
    // Display specific error message for incorrect username or password
    if (result.error === 'Invalid email or password') {
      alert('Incorrect username or password');
    } else {
      // Display the general error message if it's not related to username or password
      alert(result.message);
    }
  }
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const login_btn = document.querySelector("#login-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

login_btn.addEventListener("click", login);
