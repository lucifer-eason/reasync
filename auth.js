const msg = document.getElementById("msg");

function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  msg.textContent = '';

  if (!email || !password) {
    msg.style.color = "red";
    msg.textContent = "Please enter both email and password.";
    return;
  }

  if (password.length < 6) {
    msg.style.color = "red";
    msg.textContent = "Password must be at least 6 characters.";
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification()
        .then(() => {
          msg.style.color = "green";
          msg.textContent = "Account created! Please check your email to verify your account.";
        })
        .catch((error) => {
          msg.style.color = "red";
          msg.textContent = "Failed to send verification email: " + error.message;
        });
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.textContent = error.message;
    });
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
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
        // TODO: 登录成功后跳转主页，比如：
        // window.location.href = "dashboard.html";
      }
    })
    .catch((error) => {
      msg.style.color = "red";
      if (error.code === "auth/invalid-login-credentials") {
        msg.textContent = "Invalid email or password.";
      } else {
        msg.textContent = error.message;
      }
    });
}

function resetPassword() {
  const email = document.getElementById("email").value.trim();
  msg.textContent = '';

  if (!email) {
    msg.style.color = "red";
    msg.textContent = "Please enter your email address.";
    return;
  }

  auth.sendPasswordResetEmail(email)
    .then(() => {
      msg.style.color = "green";
      msg.textContent = "Password reset email sent! Please check your inbox.";
    })
    .catch((error) => {
      msg.style.color = "red";
      msg.textContent = error.message;
    });
}
