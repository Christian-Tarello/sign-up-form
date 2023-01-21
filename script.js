const passwordInput = document.querySelector("#password");
const confirmationPasswordInput = document.querySelector("#confirmationPassword");
const passwordError = document.querySelector("#password+span")

function confirmPassword() {
    if (passwordInput.value !== confirmationPasswordInput.value) {
        passwordInput.setCustomValidity("Passwords don't match.");
        passwordInput.classList.add("customError");

        confirmationPasswordInput.setCustomValidity("Passwords don't match.");
        confirmationPasswordInput.classList.add("customError");

        passwordError.textContent = "Passwords are not matching.";
    }
    else {
        passwordInput.setCustomValidity("");
        passwordInput.classList.remove("customError");
        confirmationPasswordInput.setCustomValidity("");
        confirmationPasswordInput.classList.remove("customError");
        passwordError.textContent = "";
    }
}

passwordInput.addEventListener("input", confirmPassword);
confirmationPasswordInput.addEventListener("input", confirmPassword);

