// Switching between Login & Sign Up
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

document.getElementById("showSignUp").addEventListener("click", () => {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
});

document.getElementById("showLogin").addEventListener("click", () => {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
});

// Login Validation (Dummy)
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("All fields are required!");
    } else {
        alert("Login successful! Redirecting...");
        window.location.href = "index.html";
    }
});

// Sign Up Validation (Dummy)
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("All fields are required!");
    } else {
        alert("Sign Up Successful! You can login now.");
        signupForm.reset();
        signupForm.classList.remove("active");
        loginForm.classList.add("active");
    }
});
