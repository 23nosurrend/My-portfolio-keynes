



// id.getElementsByTagName("p").innerHTML=found

document.addEventListener("DOMContentLoaded",function(){
    // let value=document.getElementById("value")
    // value.innerHTML=found
    const title=localStorage.getItem("title")
    const head=document.getElementsByClassName("div-with-header")[0]
    //now create p to display inside div-with header
    const headerParagraph=document.createElement("h3")
    headerParagraph.innerHTML=title

    // now append title to its div
    head.appendChild(headerParagraph)

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