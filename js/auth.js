import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    console.log("User logged in:", user.email);
  }
});

// Logout button
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      window.location.href = "login.html";
    });
  });
}
// // Auth Helper Functions
// const AuthSystem = {
//   // Get all users from local storage
//   getAllUsers() {
//     const users = localStorage.getItem('users');
//     return users ? JSON.parse(users) : [];
//   },

//   // Save users to local storage
//   saveUsers(users) {
//     localStorage.setItem('users', JSON.stringify(users));
//     console.log('✓ Users saved to localStorage:', users);
//   },

//   // Get current logged-in user
//   getCurrentUser() {
//     const userStr = localStorage.getItem('currentUser');
//     return userStr ? JSON.parse(userStr) : null;
//   },

//   // Set current logged-in user
//   setCurrentUser(user) {
//     localStorage.setItem('currentUser', JSON.stringify(user));
//     console.log('✓ Current user set:', user);
//   },

//   // Logout user
//   logout() {
//     localStorage.removeItem('currentUser');
//   },

//   // Find user by email
//   findUserByEmail(email) {
//     const users = this.getAllUsers();
//     return users.find(u => u.email.toLowerCase() === email.toLowerCase());
//   },

//   // Simple password hashing (use base64 for demo - in production use bcrypt)
//   hashPassword(password) {
//     return btoa(password);
//   },

//   // Verify password
//   verifyPassword(password, hash) {
//     return btoa(password) === hash;
//   },

//   // Create new user
//   createUser(name, email, password) {
//     console.log('Creating user:', name, email);
//     const users = this.getAllUsers();
    
//     // Check if user already exists
//     if (this.findUserByEmail(email)) {
//       return { success: false, message: 'Email already registered!' };
//     }

//     const newUser = {
//       id: Date.now().toString(),
//       name: name.trim(),
//       email: email.toLowerCase().trim(),
//       password: this.hashPassword(password),
//       createdAt: new Date().toISOString(),
//       profile: {
//         bio: '',
//         avatar: ''
//       }
//     };

//     users.push(newUser);
//     this.saveUsers(users);
//     console.log('✓ User created successfully!');
//     return { success: true, user: newUser, message: 'Account created successfully!' };
//   },

//   // Login user
//   loginUser(email, password) {
//     console.log('Attempting login:', email);
//     const user = this.findUserByEmail(email);
    
//     if (!user) {
//       console.log('❌ Email not found!');
//       return { success: false, message: 'Email not found!' };
//     }

//     if (!this.verifyPassword(password, user.password)) {
//       console.log('❌ Incorrect password!');
//       return { success: false, message: 'Incorrect password!' };
//     }

//     // Remove password before storing current user
//     const userData = { ...user };
//     delete userData.password;
    
//     this.setCurrentUser(userData);
//     console.log('✓ Login successful!');
//     return { success: true, user: userData, message: 'Login successful!' };
//   }
// };

// // Check if user is already logged in
// function checkExistingSession() {
//   const currentUser = AuthSystem.getCurrentUser();
//   if (currentUser) {
//     console.log('User already logged in:', currentUser.name);
//     // Redirect to home if already logged in
//     if (window.location.pathname.includes('login') || window.location.pathname.includes('signin')) {
//       window.location.href = 'blog.html';
//     }
//   }
// }

// // Call on page load
// checkExistingSession();

// // ===== GSAP ANIMATIONS =====
// document.addEventListener('DOMContentLoaded',()=>{
//   console.log('✓ Page loaded, setting up auth...');
  
//   if(typeof gsap==='undefined'){
//     console.warn('GSAP not loaded — animations disabled');
//     return;
//   }

//   const card = document.getElementById('authCard');
//   const rows = document.querySelectorAll('.auth-form .form-row');
//   const title = document.querySelector('.auth-title');

//   // entrance animation
//   gsap.from(card,{duration:0.7,scale:0.98,opacity:0,ease:'power3.out'});
//   gsap.from(title,{duration:0.6,y:8,opacity:0,delay:0.06});
//   gsap.from(rows,{duration:0.6,y:10,opacity:0,stagger:0.07,delay:0.12});

//   // focus micro-animations
//   document.querySelectorAll('.form-row input').forEach(input=>{
//     input.addEventListener('focus',e=>{
//       gsap.to(e.target, {duration:0.22, boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.06), 8px 10px 26px rgba(108,142,246,0.12)'});
//     });
//     input.addEventListener('blur', e=>{
//       gsap.to(e.target, {duration:0.22, boxShadow: 'inset 6px 6px 12px rgba(0,0,0,0.04), inset -6px -6px 12px rgba(255,255,255,0.8)'});
//     });
//   });

//   // switch link: animate out then navigate
//   document.querySelectorAll('.switch-link').forEach(a=>{
//     a.addEventListener('click', e=>{
//       e.preventDefault();
//       const href = a.getAttribute('href');
//       gsap.to(card,{y:-18,opacity:0,scale:0.98,duration:0.32,ease:'power1.in',onComplete:()=>{window.location.href=href}});
//     });
//   });

//   // ===== LOGIN FORM HANDLER =====
//   const loginForm = document.getElementById('loginForm');
//   if(loginForm) {
//     console.log('✓ Login form found');
//     loginForm.addEventListener('submit', e=>{
//       e.preventDefault();
      
//       const email = document.getElementById('emailL').value;
//       const password = document.getElementById('passwordL').value;
//       const submitBtn = loginForm.querySelector('button[type="submit"]');
      
//       console.log('Login attempt - Email:', email);
      
//       // Validation
//       if (!email || !password) {
//         alert('Please fill in all fields');
//         return;
//       }

//       // Attempt login
//       const result = AuthSystem.loginUser(email, password);
      
//       if (result.success) {
//         console.log('✓ Login successful!');
//         // Success animation
//         const tl = gsap.timeline();
//         tl.to(submitBtn, {scale:0.95, duration:0.1})
//           .to(submitBtn, {scale:1, duration:0.15})
//           .to(card, {boxShadow:'0 0 0 6px rgba(108,142,246,0.06)', duration:0.18}, 0)
//           .to(card, {boxShadow:'16px 16px 32px var(--shadow-dark), -12px -12px 24px var(--shadow-light)', duration:0.22});
        
//         // Show success message
//         alert(result.message);
        
//         // Redirect after animation
//         setTimeout(() => {
//           console.log('Redirecting to blog.html...');
//           window.location.href = 'blog.html';
//         }, 800);
//       } else {
//         console.log('❌ Login failed:', result.message);
//         alert(result.message);
//         gsap.to(submitBtn, {x: -5, duration:0.1}).to(submitBtn, {x:0, duration:0.1});
//       }
//     });
//   } else {
//     console.log('❌ Login form NOT found');
//   }

//   // ===== SIGNUP FORM HANDLER =====
//   const signupForm = document.getElementById('signupForm');
//   if(signupForm) {
//     console.log('✓ Signup form found');
//     signupForm.addEventListener('submit', e=>{
//       e.preventDefault();
      
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const password = document.getElementById('password').value;
//       const confirm = document.getElementById('confirm').value;
//       const submitBtn = signupForm.querySelector('button[type="submit"]');
      
//       console.log('Signup attempt - Name:', name, 'Email:', email);
      
//       // Validation
//       if (!name || !email || !password || !confirm) {
//         alert('Please fill in all fields');
//         return;
//       }

//       if (password.length < 6) {
//         alert('Password must be at least 6 characters');
//         return;
//       }

//       if (password !== confirm) {
//         alert('Passwords do not match');
//         return;
//       }

//       // Attempt signup
//       const result = AuthSystem.createUser(name, email, password);
      
//       if (result.success) {
//         console.log('✓ Signup successful!');
//         // Success animation
//         const tl = gsap.timeline();
//         tl.to(submitBtn, {scale:0.95, duration:0.1})
//           .to(submitBtn, {scale:1, duration:0.15})
//           .to(card, {boxShadow:'0 0 0 6px rgba(108,142,246,0.06)', duration:0.18}, 0)
//           .to(card, {boxShadow:'16px 16px 32px var(--shadow-dark), -12px -12px 24px var(--shadow-light)', duration:0.22});
        
//         alert(result.message + '\nRedirecting to login...');
        
//         // Redirect to login
//         setTimeout(() => {
//           console.log('Redirecting to login.html...');
//           window.location.href = 'login.html';
//         }, 1000);
//       } else {
//         console.log('❌ Signup failed:', result.message);
//         alert(result.message);
//         gsap.to(submitBtn, {x: -5, duration:0.1}).to(submitBtn, {x:0, duration:0.1});
//       }
//     });
//   } else {
//     console.log('❌ Signup form NOT found');
//   }

//   // Demo button - preload test account
//   const demoBtn = document.getElementById('demoBtn');
//   if(demoBtn) {
//     console.log('✓ Demo button found');
//     demoBtn.addEventListener('click', ()=>{
//       console.log('Creating demo account...');
//       // Create demo account
//       AuthSystem.createUser('Demo User', 'demo@test.com', 'demo123');
//       alert('Demo account created!\nEmail: demo@test.com\nPassword: demo123\n\nRedirecting to login...');
//       setTimeout(() => {
//         console.log('Redirecting to login.html...');
//         window.location.href = 'login.html';
//       }, 1000);
//     });
//   }

//   // Forgot password button
//   const forgotBtn = document.getElementById('forgotBtn');
//   if(forgotBtn) {
//     forgotBtn.addEventListener('click', ()=>{
//       alert('Password recovery feature coming soon!\nFor now, please create a new account.');
//     });
//   }
// });


