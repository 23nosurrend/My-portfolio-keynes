document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("id");
   
    const found=localStorage.getItem("Blogs")
    const Data=JSON.parse(found)
    console.log(Data.length)
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
