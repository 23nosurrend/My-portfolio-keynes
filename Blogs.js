

document.addEventListener("DOMContentLoaded",function(){
    //retrieve image
    const image=localStorage.getItem("picture")
    const divImage=document.getElementsByClassName("div-with-img")[0]
    const imageTag=document.createElement("img")
     imageTag.className="img1"
     imageTag.alt="Image of teh story"
     imageTag.src=image
     divImage.appendChild(imageTag)

    const title=localStorage.getItem("title")
    const head=document.getElementsByClassName("div-with-header")[0]
    //now create p to display inside div-with header
    const headerParagraph=document.createElement("h3")
    headerParagraph.innerHTML=JSON.parse(title)

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