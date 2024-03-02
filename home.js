function toggleNavbar(){
   let navDiv= document.getElementById("nav-div")
//    if display stutu of navDiv is none or emply do this 
    navDiv.style.display=(navDiv.style.display==="none") ? "block":"none"


         }
 
      
// Create fuction to display login 

function loginDisplay(){
    let loginStatus=document.getElementById("login-form")
    loginStatus.style.display=(loginStatus.style.display==="none")?"block":"inline"
}
function cancelFucntion(){
    let loginStatus=document.getElementById("login-form") 
    loginStatus.style.display=(loginStatus.style.display==="block" ||loginStatus.style.display==="inline")?"none":"none"
}

// Validation of credintials

function navigate(){
    let name=document.getElementById("username").value;
    let pass=document.getElementById("password").value;
 
    console.log("Username:", name);
    console.log("Password:", pass);

    // Prepare data to be sent to backend 
    const data = {
        "Email":name,
        "Password": pass
    };

    console.log("Data to be sent:", data);

    // Make a post request to backend live link
    fetch('https://portfolio-backend-15.onrender.com/admin/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if(response.ok){
            window.location = 'ViewBlogs.html';
        } else {
            alert("Invalid credentials");
        }
    }).catch(err => {
        console.log("An error occurred:", err);
        alert("An error occurred, please try again");
    });
}
