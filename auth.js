function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  msg.textContent = '';
  auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      msg.style.color = "green";
      msg.textContent = "Welcome, " + user.user.email;
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.textContent = error.message;
    });
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  msg.textContent = '';
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      msg.style.color = "green";
      msg.textContent = "Signup successful!";
    })
    .catch((error) => {
  msg.style.color = "red";
  if (error.code === "auth/invalid-login-credentials") {
    msg.textContent = "Invalid email or password. Please try again or sign up.";
  } else {
    msg.textContent = error.message;
  }
});

}
