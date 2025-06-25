// auth.js
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  msg.textContent = '';
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    msg.style.color = 'green';
    msg.textContent = `Login success! Welcome ${userCredential.user.email}`;
  } catch (e) {
    msg.style.color = 'red';
    msg.textContent = `Login failed: ${e.message}`;
  }
}

async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("msg");
  msg.textContent = '';
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    msg.style.color = 'green';
    msg.textContent = `Signup success! Welcome ${userCredential.user.email}`;
  } catch (e) {
    msg.style.color = 'red';
    msg.textContent = `Signup failed: ${e.message}`;
  }
}
