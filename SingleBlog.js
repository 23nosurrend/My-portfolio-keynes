document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("id");
   
    const found=localStorage.getItem("Blogs")
    const Data=JSON.parse(found)
    console.log(Data.length)
    const parent=document.getElementById("father-single")

    //craete image div
    const imgdiv=document.createElement("div")
    imgdiv.id="imgDiv"
    const imgTag=document.createElement("img")
          imgTag.className="currentImage"
          imgTag.src=Data[index].picture
    imgdiv.appendChild(imgTag)
    parent.appendChild(imgdiv)

    //create date div
    const dateDiv=document.createElement("div")
        dateDiv.className="dateDiv"
    const datePar=document.createElement("p")
        datePar.className="datePar-date"
        datePar.innerHTML=Data[index].date
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
           



});
