document.addEventListener("DOMContentLoaded", () => {
    let submitBtn = document.getElementById("submit");
    let output = document.getElementById("output");

    // Check localStorage on page load and show the button if details exist
    if (localStorage.getItem("username")) {
        showExistingUserButton();
    }

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let userName = document.getElementById("username").value;
        let passWord = document.getElementById("password").value;
        let checkBox = document.getElementById("checkbox");

        // Saving to localStorage if "Remember me" is checked
        if (checkBox.checked) {
            localStorage.setItem("username", userName);
            localStorage.setItem("password", passWord);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert("Logged in as " + userName);

        // Make sure the button only gets created once
        if (!document.getElementById("existing") && checkBox.checked) {
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
            alert(`Logged in as ${user}`);
        });
    }
});
