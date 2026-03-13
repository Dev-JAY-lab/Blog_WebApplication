console.log("Login JS Loaded");
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");

  // small, non-blocking toast used instead of alert()
  function showToast(message, duration = 2500) {
    try {
      const toast = document.createElement('div');
      toast.className = 'app-toast';
      toast.textContent = message;
      Object.assign(toast.style, {
        position: 'fixed',
        right: '18px',
        bottom: '18px',
        background: 'rgba(0,0,0,0.82)',
        color: '#fff',
        padding: '10px 14px',
        borderRadius: '8px',
        boxShadow: '0 6px 18px rgba(0,0,0,0.24)',
        zIndex: 99999,
        fontSize: '14px'
      });
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'opacity 200ms ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 220);
      }, duration);
    } catch (e) {
      // fallback
      console.log(message);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const submitBtn = form.querySelector('button[type="submit"]');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing in...';
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const currentUser = {
          uid: user.uid,
          email: user.email || email,
          name: user.displayName || ''
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // non-blocking notification — redirect immediately
        showToast('Login successful ✓');
        window.location.href = "blog.html";
      })
      .catch(error => {
        showToast(error.message || 'Login failed');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Sign in';
        }
      });
  });

});