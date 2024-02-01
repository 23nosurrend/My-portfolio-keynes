



// id.getElementsByTagName("p").innerHTML=found

document.addEventListener("DOMContentLoaded",function(){
    // let value=document.getElementById("value")
    // value.innerHTML=found
    let found=localStorage.getItem("blogs")
    let setences=found.split('.')
    let container=document.getElementsByClassName("div-with-intro")[0]
    container.innerHTML=""

    for(let i=0;i<setences.length;i++){
        let setence=document.createElement("p")
        setence.innerHTML=setences[i]
        container.appendChild(setence)
        
       
    }
   
})