
let generatedCode = "";

function sendCode() {
  generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
  alert("Your verification code is: " + generatedCode);
}

function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const code = document.getElementById("code").value.trim();
  const msg = document.getElementById("msg");
  msg.textContent = '';

  if (!email || !password || !code) {
    msg.style.color = "red";
    msg.textContent = "Please fill in all fields.";
    return;
  }

  if (password.length < 6) {
    msg.style.color = "red";
    msg.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (code !== generatedCode) {
    msg.style.color = "red";
    msg.textContent = "Incorrect verification code.";
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification().then(() => {
        msg.style.color = "green";
        msg.textContent = "Registered! Please verify your email.";
      });
    })
    .catch((error) => {
      msg.style.color = "red";
      if (error.code === "auth/email-already-in-use") {
        msg.textContent = "This email is already registered. Try logging in.";
      } else {
        msg.textContent = error.message;
      }
    });
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  msg.textContent = '';

  if (!email || !password) {
    msg.style.color = "red";
    msg.textContent = "Please enter both email and password.";
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (!user.emailVerified) {
        msg.style.color = "red";
        msg.textContent = "Please verify your email before logging in.";
        auth.signOut();
      } else {
        msg.style.color = "green";
        msg.textContent = "Welcome, " + user.email;
      }
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.textContent = error.message;
    });
}

function resetPassword() {
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("msg");
  msg.textContent = '';

  if (!email) {
    msg.style.color = "red";
    msg.textContent = "Please enter your email address.";
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Password reset email sent.";
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.textContent = error.message;
    });
}
