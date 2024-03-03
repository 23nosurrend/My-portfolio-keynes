document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const title = urlParams.get("title");
  
    
    
   
    const parent=document.getElementById("father-single")

    //create image div
    const imgdiv=document.createElement("div")
    imgdiv.className="imgDiv"
    const imgTag=document.createElement("img")
          imgTag.className="currentImage"
          imgTag.src=Data[index].picture
    imgdiv.appendChild(imgTag)
    parent.appendChild(imgdiv)

    //create date div//like
    const dateDiv=document.createElement("div")
        dateDiv.className="dateDiv"
    const datePar=document.createElement("p")
        datePar.className="datePar-date"
        datePar.innerHTML=Data[index].date
    const divLike=document.createElement("div")
         divLike.className="like-Div"
     const iconLike=document.createElement("i")
           iconLike.className="fa fa-heart like-icon"
     const divCount=document.createElement("div")
           divCount.className="divcount"
     const numberLike=document.createElement("p")
           numberLike.className="numberCount"
       numberLike.innerHTML=0
      divCount.appendChild(numberLike)
       divLike.appendChild(iconLike)
       divLike.appendChild(divCount)

        dateDiv.appendChild(divLike)
        dateDiv.appendChild(datePar)
        parent.appendChild(dateDiv)
    // This is about title
    const titleDiv=document.createElement("div")
           titleDiv.className="titleDiv"
    const titlePar=document.createElement("p")
           titlePar.className="titlePar"
           titlePar.innerHTML=Data[index].title
           titleDiv.appendChild(titlePar)
           parent.appendChild(titleDiv)
    // This is about content
    const contentDiv=document.createElement("div")
           contentDiv.className="contentDiv"
    const contentPar=document.createElement("p")
           contentPar.className="contentPar"
           contentPar.innerHTML=Data[index].content
           contentDiv.appendChild(contentPar)
           parent.appendChild(contentDiv)
    // add  comment sections
    const commentFather=document.createElement("div")// this is comment father box
          commentFather.className="commentFather"
    const addComment=document.createElement("div")
           addComment.className="commentTitle"
    const commentPar=document.createElement("par")
          commentPar.className="commentPar"
          commentPar.innerHTML="Add Your Comment Here:"
          addComment.appendChild(commentPar)
          commentFather.appendChild(addComment)
          parent.appendChild(commentFather)

    
          // First Name input
          const divName=document.createElement("div")
                divName.className="divName"
          
          const firstNameInput = document.createElement("input");
          firstNameInput.className="firstname"
          firstNameInput.setAttribute("type", "text");
          firstNameInput.setAttribute("placeholder", "First Name");
          
          // Last Name input
          const lastNameInput = document.createElement("input");
          lastNameInput.className="lastname"
          lastNameInput.setAttribute("type", "text");
          lastNameInput.setAttribute("placeholder", "Last Name");

          divName.appendChild(firstNameInput,lastNameInput)
          divName.appendChild(lastNameInput)
          commentFather.appendChild(divName)
          parent.appendChild(commentFather)
       //comment text
       const divTextArea=document.createElement("div")
             divTextArea.className="textAreaDiv"
       const commentInput = document.createElement("textarea");
       commentInput.className="textarea"
       commentInput.setAttribute("placeholder", "Your Comment");
       
       divTextArea.appendChild(commentInput)
       commentFather.appendChild(divTextArea)
       parent.appendChild(commentFather)

       //create submit button
       const submitDiv=document.createElement("div")
             submitDiv.className="submit-btn-Div"
       
       const submitButton = document.createElement("button");
       submitButton.className="submit-btn"
       submitButton.setAttribute("type", "submit");
       submitButton.textContent = "Submit";
       
       submitDiv.appendChild(submitButton)
       commentFather.appendChild(submitDiv)
       parent.appendChild(commentFather)
              


// function about like

    let likeIcons=document.getElementsByClassName("like-icon")
    for(let i=0;i<likeIcons.length;i++){
       likeIcons[i].addEventListener("click",function(){
         let likeCountDiv=this.closest(".like-Div")
       let number=likeCountDiv.querySelector(".numberCount")
       let realNumber=parseInt(number.innerHTML);
       realNumber++
       number.innerHTML=realNumber
      
          
       })
    }
           



});
