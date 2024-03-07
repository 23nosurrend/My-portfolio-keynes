document.addEventListener("DOMContentLoaded",function() {
      fetch('https://portfolio-backend-18.onrender.com/get/blogs')
        .then(response=>response.json())
        .then(data=>{



  let Data=data.data.blogs
  for(let i=0;i<Data.length;i++) {
      const blog=Data[i]
    // get Right div
    const right=document.getElementById("Right-div")

    // this is about div with numbering 
    const outer=document.createElement("div")
    outer.id="div-with-content";

    const divCount=document.createElement("div")
         divCount.className="content"
    const innerH3=document.createElement("h3")
          innerH3.innerHTML=i+1
    divCount.appendChild(innerH3)

   // This about date
    const divDate=document.createElement("div")
         divDate.className="content"
    const innerH=document.createElement("h3")
          innerH.innerHTML=blog.date
    divDate.appendChild(innerH)

    //This is about title
    const divTitle=document.createElement("div")
         divTitle.className="content-name"
    const H3Title=document.createElement("h3")
       H3Title.innerHTML=blog.title
    divTitle.appendChild(H3Title)
   
    // about icon of delete,,edit,view


    const divIcon=document.createElement("div")
        divIcon.className="content"
        divIcon.id="div-with-actionsIcons"
    const iconOne=document.createElement("i")
          iconOne.className="fa fa-trash-o delete-icon"
          iconOne.id=`delete-icon${i}`
    
    
    const iconTwo=document.createElement("i")
          iconTwo.className="fa fa-eye view-icon"
    

    const iconThree=document.createElement("i")
          iconThree.className="fa fa-edit edit-icon"
          iconThree.id=`update${i}`
   const updateTag=document.createElement('a')     
      //     updateTag.appendChild(iconThree)
    divIcon.appendChild(iconOne)
    divIcon.appendChild(iconTwo) 
    divIcon.appendChild( iconThree)
    outer.appendChild(divCount)
    outer.appendChild(divDate)
    outer.appendChild(divTitle)
    outer.appendChild(divIcon)
    right.appendChild(outer)
     
  }

  document.getElementById("Right-div").addEventListener("click",function(event){
     
      if(event.target.classList.contains("delete-icon")){
            const currentTitle=event.target.parentNode.previousSibling.querySelector(".content-name h3").innerHTML
            if(confirm("Do you want to delete this blog titled:"+currentTitle+"?")){
                  //get token from localStorage
                  const token=localStorage.getItem('token')
                 //prepare data to sent in body
                 const data={
                  title:currentTitle
                 };
             //Make delete request

            fetch('https://portfolio-backend-18.onrender.com/delete/blog',{
                  method:"DELETE",
                  headers:{
                        "content-type":"application/json",
                        "Authorization":token
                  },
                  body:JSON.stringify(data)
            }).then(response=>{
                  if(!response.ok){
                        alert(data.data.error)
                  }else{
                        alert(data.data.message)
                  }
            }).catch(err=>{
                  console.log(err)
            })


            
            }
            
      }



        })






})

  

// else if(event.target.classList.contains("edit-icon")){
//       const currentTitle=event.target.parentNode.previousSibling.querySelector(".content-name h3").innerHTML
//       console.log(event.target.closest(".div-with-content"))
//       console.log(currentTitle)

//  if(confirm("Add some changes to:"+currentTitle)){
//      window.href=`updateBlog.html?title=${encodeURIComponent(currentTitle)})`

//  }

// }
      
    
    
    


 
  

  
  const deleteIcon=document.getElementById("Delete-all")
  deleteIcon.addEventListener("click",()=>{
     const confirmation=confirm("Do you really want to delete all")

     if(confirmation){
      const token=localStorage.getItem('token')
        fetch('https://portfolio-backend-18.onrender.com/delete/blogs',{
            method:"DELETE",
            headers:{
                  'Authorization':token
            }

        })
      .then(response=>response())
      .then(data=>{
            if(data.status==='success'){
                  
                  alert(data.data.message)
                  window.location.reload()
            }else{
                  alert(data.data.message)
            }
      })
       .catch(err=>{
            console.log(err)
        })

     }
      

  })

 

  





})

// Add event listener for the popstate event

