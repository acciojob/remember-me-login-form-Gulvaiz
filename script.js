//your JS code here. If required.
let submitBtn = document.getElementById("submit")
let output = document.getElementById("output")

submitBtn.addEventListener("click", (event)=> {

      event.preventDefault()
	
       let userName = document.getElementById("username").value
       let passWord = document.getElementById("password").value
       let checkBox = document.getElementById("checkbox")

       if(checkBox.checked){
           localStorage.setItem("username", userName);
           localStorage.setItem("password", passWord);
       }
       else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
       }

         alert("Logged in as " + userName)

        let existingBtn = document.createElement("button")
         existingBtn.setAttribute("id", "existing")
        existingBtn.innerText = "Login as existing user."
        
        document.body.appendChild(existingBtn);

        existingBtn.addEventListener("click", () => {
             let user =  localStorage.getItem("username");
             let pass = localStorage.getItem("password");

               alert(`Logged in as ${user}`)
        })
})