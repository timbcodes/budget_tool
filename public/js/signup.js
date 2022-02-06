// Declare andy global DOM values
const signupBox = document.querySelector(".signup-box");
const passwordBox = document.querySelector(".password-box");
const emailAddy = document.getElementById("email-addy");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const subBtn = document.getElementById("sub-button");
const passBtn = document.getElementById("pass-button")
const callToAct = document.querySelector(".call-to-action");

// Display functions go here

// This will display the first signup box
signupBox.style.display = "flex";

// Add any event listeners
subBtn.onclick = async() => {
    const uname = emailAddy.value;
    if (uname) {
        signupBox.style.display = "none";
        passwordBox.style.display = "flex";
        console.log(uname);
        passBtn.onclick = async() => {
            const pass = pass1.value;
            const compare = pass2.value;
            if (pass && compare) {
                if (pass === compare) {
                    passwordBox.style.display = "none";
                    console.log(uname, pass);
                }
            } else {
                console.log("Here!")
                document.querySelector(".no-match").innerText = "Passwords do no match";
                document.querySelector(".no-match").style.color = "red";
            }
        }
    } else {
        callToAct.style.color = "red";
        callToAct.innerText = "Please Enter an Email";
    }
}

emailAddy.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        subBtn.click()
    }
})