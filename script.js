document.addEventListener("DOMContentLoaded", () => {
    let submitBtn = document.getElementById("submit");
    let output = document.getElementById("output");

    // Check if there's a saved username in localStorage on page load
    if (localStorage.getItem("username")) {
        showExistingUserButton();
    }

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let userName = document.getElementById("username").value;
        let passWord = document.getElementById("password").value;
        let checkBox = document.getElementById("checkbox");

        if (checkBox.checked) {
            localStorage.setItem("username", userName);
            localStorage.setItem("password", passWord);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert("Logged in as " + userName);

        // Show the existing user button if it's not already present
        if (!document.getElementById("existing")) {
            showExistingUserButton();
        }
    });

    function showExistingUserButton() {
        let existingBtn = document.createElement("button");
        existingBtn.setAttribute("id", "existing");
        existingBtn.innerText = "Login as existing user";
        document.body.appendChild(existingBtn);

        existingBtn.addEventListener("click", () => {
            let user = localStorage.getItem("username");
            if (user) {
                alert(`Logged in as ${user}`);
            } else {
                alert("No user found in local storage.");
            }
        });
    }
});
