

document.addEventListener("DOMContentLoaded",function(){
    //retrieve image
    const found=localStorage.getItem("Blogs")
    
    let Data=JSON.parse(found)
  for(let i=0;i<Data.length;i++){
    let profile=Data[i].picture
    alert("Here you can view all blogs")

   
    const father=document.getElementById("father-div")

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
    let BlogcontentAll=Data[i].content
    let Blogcontent=BlogcontentAll.slice(1,100)
    const divContent=document.createElement("div")
        divContent.className="div-with-intro"
    const divParagraph=document.createElement("p")
        divParagraph.innerHTML=Blogcontent
    divContent.appendChild(divParagraph)
    outer.appendChild(divContent)

   let divbtn=document.createElement("div")
       divbtn.className="div-btn"
// about creating a tag to derict of view a single
    const viewMoreLink=document.createElement("a")
    viewMoreLink.className="vieTag"
    viewMoreLink.href = `singleBlog.html?id=${i}`;
   

    let viewMorebtn=document.createElement("button")
        viewMorebtn.className="viewmore"
        viewMorebtn.innerHTML="View More"
    viewMoreLink.appendChild(viewMorebtn)
    divbtn.appendChild(viewMoreLink)
    outer.appendChild(divbtn)
    




  }
   
  // about redirecting to a single blog view
  

    
   
})