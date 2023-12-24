// public/script.js
async function signup() {
  const username = document.querySelector('.sign-up-form input[type="text"]').value;
  const email = document.querySelector('.sign-up-form input[type="email"]').value;
  const password = document.querySelector('.sign-up-form input[type="password"]').value;

  // Send the form data to the server
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  // Get the response from the server
  const result = await response.text();

  // Display an alert with the server response
  alert(result);
}

// Add event listeners for switching between sign-in and sign-up modes
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
