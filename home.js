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
        