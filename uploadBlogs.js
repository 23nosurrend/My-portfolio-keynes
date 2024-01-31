

// fucntion to submit written blogs


function submitBlog(){
    let written =document.getElementById("text").value
    let title=document.getElementById("title").value
    let date=document.getElementById("date")
    alert(written)
    localStorage.clear()
    let strDate=JSON.stringify(date)
    let strTitle=document.getElementById("title")
    let str=JSON.stringify(written)
    localStorage.setItem("date",strDate)
    localStorage.setItem("title",strTitle)
    localStorage.setItem("blogs",str)
}