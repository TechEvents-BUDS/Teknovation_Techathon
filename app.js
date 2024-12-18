import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtPe-Bwfcu6W1PKdkyJwIHXQiNZul3dac",
    authDomain: "pet-care-68d4f.firebaseapp.com",
    projectId: "pet-care-68d4f",
    storageBucket: "pet-care-68d4f.appspot.com",
    messagingSenderId: "893002707339",
    appId: "1:893002707339:web:32b0acf52286b3a51b7f8e",
    measurementId: "G-Q1L9M0EC6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle between Login and Sign Up forms
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authTitle = document.getElementById('auth-title');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        authTitle.textContent = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        authTitle.textContent = 'Sign Up';
    }
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (!email || !password) {
        alert('Please fill in both the email and password fields.');
        return;
    }

    // Temporary login check (commented out)
    // if (email === 'admin' && password === 'admin') {
    //     alert('Login successful!');
    //     console.log('Logged in as admin');
    //     window.location.href = 'main.html';
    // } else {
    //     alert('Invalid credentials.');
    // }

    // Firebase sign-in method
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login successful!');
            console.log(userCredential.user);
            // Redirect to a main page after successful login (optional)
            // window.location.href = 'main.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Sign Up function
function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (!email || !password) {
        alert('Please fill in both the email and password fields.');
        return;
    }

    // Temporary admin signup check (commented out)
    // if (email === 'admin' && password === 'admin') {
    //     alert('Sign up successful! (Admin user)');
    //     console.log('Admin user created');
    //     // Redirect back to login page
    //     window.location.href = 'login.html';
    // } else {
    //     alert('Only admin can sign up with these credentials.');
    // }

    // Firebase sign-up method
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Sign up successful!');
            console.log(userCredential.user);
            // Redirect to login page after successful signup (optional)
            // window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}
