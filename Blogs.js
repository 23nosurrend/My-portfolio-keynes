

document.addEventListener("DOMContentLoaded",function(){
    //retrieve image
    fetch('http://localhost:3000/get/blogs')
     .then(response=>response.json())
     .then(data=>{

        let Data=data.data.blogs

        for(let i=0;i<Data.length;i++){
            const blog=Data[i]
           
            alert("Here you can view all blogs")
        
           
            const father=document.getElementById("father-div")
        
            const outer=document.createElement("div")
            outer.className="outer-div";
        
            const divImage=document.createElement("div")
             divImage.className="div-with-img"
        
            const imageTag=document.createElement("img")
             imageTag.className="img1"
             imageTag.alt="Image of the story"
             imageTag.src=`http://localhost:3000/uploads/${blog.image}`
             console.log(imageTag.src)
             divImage.appendChild(imageTag)
             outer.appendChild(divImage)
             father.appendChild(outer)
        
             // about date
        
             let date=blog.date
             
             const divText=document.createElement("div")
             divText.className="div-with-text"
             const dateParagraph=document.createElement("p")
             dateParagraph.innerHTML=date
             divText.appendChild(dateParagraph)
             outer.appendChild(divText)
             // about title
             let title=blog.title
              const divTitle=document.createElement("div")
                  divTitle.className="div-with-header"
              const titleText=document.createElement("h3")
                   titleText.innerHTML=title
               divTitle.appendChild(titleText)
               outer.appendChild(divTitle)
        
            // About blog content
            let BlogcontentAll=blog.content
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
            viewMoreLink.href = `singleBlog.html?title=${encodeURIComponent(blog.title)}`;
           
        
            let viewMorebtn=document.createElement("button")
                viewMorebtn.className="viewmore"
                viewMorebtn.innerHTML="View More"
            viewMoreLink.appendChild(viewMorebtn)
            divbtn.appendChild(viewMoreLink)
            outer.appendChild(divbtn)
            
        
        
        
        
          }
           


     })
    
    
  
  // about redirecting to a single blog view
  

    
   
})