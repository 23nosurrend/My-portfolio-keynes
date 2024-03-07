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
// sign up
function signupDisplay(){
    let loginStatus=document.getElementById("signUp-form")
    loginStatus.style.display=(loginStatus.style.display==="none")?"block":"inline"
}
function SignUpcancelFucntion(){
    let loginStatus=document.getElementById("signUp-form") 
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
    fetch('https://portfolio-backend-17.onrender.com/admin/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if(response.ok){
            response.json().then(data=>{
                
                const token=data.data.token
                alert(data.data.message)
               
                localStorage.setItem('token',token)
                 window.location = 'ViewBlogs.html';
   
                
            }).catch(err=>{
                alert("error occured while parsing json response")
                console.log(err)
            })
         
        } else {
            response.json().then(data=>{
                 alert(data.data.message)
            }).catch(err=>{
                alert('Error occured while parsing response')
                console.log(err)
            })
            
        }
    }).catch(err => {
        console.log("An error occurred:", err);
        alert("An error occurred, please try again");
    });
}

function createUser(){
    const Email=document.getElementById('SignUp-Email').value;
    const username=document.getElementById('SignUp-username').value;
    const pass=document.getElementById('SignUp-password').value
    const data={
        "Email":Email,
        "Username":username,
        "Password":pass
    }
    console.log(data)


    fetch('https://portfolio-backend-18.onrender.com/admin/signUp',{
        method:'POST',
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify(data)
    }).then(response=>{
        if(response.ok){
            response.json().then(data=>{
                alert(data.data.message)
                window.location='home.html'
            }).catch(err=>{
                alert("error occured while parsing json",err)
            })
        }else{
            response.json().then(data=>{
                alert(data.data.message)
            }).catch(err=>{
                alert("errro occured while retriving response ,try again:",err)
            })
        }
    }).catch(err=>{
        alert("Unable to sign up NewUser:",err)
        console.log(err)
    })
    
}
document.addEventListener("DOMContentLoaded", function() {
    const dynamicText = document.getElementById("dynamicText");
    const texts = ["Programming", "Software Development"];
    let index = 0;
    
    setInterval(() => {
      index = (index + 1) % texts.length;
      dynamicText.textContent = texts[index];
    }, 3000); // Change text every 5 seconds
  });
  