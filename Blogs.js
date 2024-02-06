

document.addEventListener("DOMContentLoaded",function(){
    //retrieve image
    const found=localStorage.getItem("Blogs")
    
    let Data=JSON.parse(found)
  for(let i=0;i<Data.length;i++){
    let profile=Data[i].picture
    alert("Here you can view all blogs")

   
    const father=document.getElementsByClassName("father-div")[0]

    const outer=document.createElement("div")
    outer.className="outer-div";

    const divImage=document.createElement("div")
     divImage.className="div-with-img"

    const imageTag=document.createElement("img")
     imageTag.className="img1"
     imageTag.alt="Image of teh story"
     imageTag.src=profile
     divImage.appendChild(imageTag)
     outer.appendChild(divImage)
     father.appendChild(outer)

     // about date

     let date=Data[i].date
     
     const divText=document.createElement("div")
     divText.className="div-with-text"
     const dateParagraph=document.createElement("p")
     dateParagraph.innerHTML=date
     divText.appendChild(dateParagraph)
     outer.appendChild(divText)
     // about title
     let title=Data[i].title
      const divTitle=document.createElement("div")
          divTitle.className="div-with-header"
      const titleText=document.createElement("h3")
           titleText.innerHTML=title
       divTitle.appendChild(titleText)
       outer.appendChild(divTitle)

    // About blog content
    let Blogcontent=Data[i].content
    const divContent=document.createElement("div")
        divContent.className="div-with-intro"
    const divParagraph=document.createElement("p")
        divParagraph.innerHTML=Blogcontent
    divContent.appendChild(divParagraph)
    outer.appendChild(divContent)

   let divbtn=document.createElement("div")
       divbtn.id="div-btn"
    let viewMorebtn=document.createElement("button")
        viewMorebtn.id="viewmore"
        viewMorebtn.innerHTML="View More"
    divbtn.appendChild(viewMorebtn)
    outer.appendChild(divbtn)




  }
   

    // const title=localStorage.getItem("title")
    // const head=document.getElementsByClassName("div-with-header")[0]
    // //now create p to display inside div-with header
    // const headerParagraph=document.createElement("h3")
    // headerParagraph.innerHTML=JSON.parse(title)

    // // now append title to its div
    // head.appendChild(headerParagraph)

    // let found=localStorage.getItem("blogs")
    // let setences=found.split('.')
    // let container=document.getElementsByClassName("div-with-intro")[0]
    // container.innerHTML=""

    // for(let i=0;i<setences.length;i++){
    //     let setence=document.createElement("p")
    //     setence.innerHTML=setences[i]
        
    //     container.appendChild(setence)
        
       
    // }
   
})