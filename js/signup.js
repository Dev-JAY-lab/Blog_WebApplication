import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Successful 🔥");
    })
    .catch(error => alert(error.message));
});