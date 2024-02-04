

// fucntion to submit written blogs


function submitBlog(){
   
    let writtenValue =document.getElementById("text").value
    let titleValue=document.getElementById("title").value
    let dateValue=document.getElementById("date").value
    let imageValue=document.getElementById("image").files
    alert (imageValue.length)
    console.log(image)

    if(imageValue.length>0){
        const Reader=new FileReader()
        //reader only the first image
        Reader.readAsDataURL(imageValue[0])
        //create onload function
        Reader.onload=function(event){
            const imageData=event.target.result

            let existingBlogs=localStorage.getItem("Blogs")
            if(!existingBlogs){
                existingBlogs=[]
            }else{
                existingBlogs=JSON.parse(existingBlogs)
            }
            let newBlog={
                date:dateValue,
                title:titleValue,
                picture:imageData,
                content:writtenValue
            }
            existingBlogs.push(newBlog)

            localStorage.setItem("Blogs",JSON.stringify(existingBlogs))

            alert("blogs submited succesfully")

        }

    }else{
        alert ("Select image")
    }
    
    
   

}