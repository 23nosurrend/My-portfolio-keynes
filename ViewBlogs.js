document.addEventListener("DOMContentLoaded",function() {
    //retrieve image
    const found=localStorage.getItem("Blogs")
    
    let Data=JSON.parse(found)
  for(let i=0;i<Data.length;i++) {
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
          innerH.innerHTML=Data[i].date
    divDate.appendChild(innerH)

    //This is about title
    const divTitle=document.createElement("div")
         divTitle.className="content-name"
    const H3Title=document.createElement("h3")
       H3Title.innerHTML=Data[i].title
    divTitle.appendChild(H3Title)
   
    // about icon of delete,,edit,view


    const divIcon=document.createElement("div")
        divIcon.className="content"
        divIcon.id="div-with-actionsIcons"
    const iconOne=document.createElement("i")
          iconOne.className="fa fa-trash-o delete-icon"
          iconOne.id="delete-icon"
    const iconTwo=document.createElement("i")
          iconTwo.className="fa fa-eye view-icon"
    const iconThree=document.createElement("i")
          iconThree.className="fa fa-edit edit-icon"
    divIcon.appendChild(iconOne)
    divIcon.appendChild(iconTwo) 
    divIcon.appendChild(iconThree)
    outer.appendChild(divCount)
    outer.appendChild(divDate)
    outer.appendChild(divTitle)
    outer.appendChild(divIcon)
    right.appendChild(outer)






    
  }
   

  const deleteIcon=document.getElementById("Delete-all")
  deleteIcon.addEventListener("click",()=>{
     const confirmation=confirm("Do you really want to delete all")

     if(confirmation){
        localStorage.removeItem("Blogs")

     }
      alert("Do you want to delete this blog")

  })
  
  





})



  
