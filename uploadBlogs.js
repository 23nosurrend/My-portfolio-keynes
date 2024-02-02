

// fucntion to submit written blogs


function submitBlog(){
    let written =document.getElementById("text").value
    let title=document.getElementById("title").value
    let date=document.getElementById("date").value
    let image=document.getElementById("image").files
    alert (image.length)
    console.log(image)

    if(image.length>0){
        const Reader=new FileReader()
        //reader only the first image
        Reader.readAsDataURL(image[0])
        //create onload function
        Reader.onload=function(event){
            const imageData=event.target.result

             localStorage.clear()

            let strDate=JSON.stringify(date)
            let strTitle=JSON.stringify(title)
            let str=JSON.stringify(written)
            localStorage.setItem("date",strDate)
            localStorage.setItem("title",strTitle)
            localStorage.setItem("blogs",str)
            localStorage.setItem("picture",imageData)

        }

    }else{
        alert ("Select image")
    }
    
    
   

}