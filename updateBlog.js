document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const title = urlParams.get("title");
    console.log(title)
    fetch(`https://portfolio-backend-18.onrender.com/get/blog/${encodeURIComponent(title)}`,{
      method:'GET',
      headers:{
         "content-type":'application/json'
      },
      
    }).then(response=>{
        if(!response.ok){
            alert("Try again some newtwork error")
        }else{
            response.json().then(data=>{
                console.log(data.data.message)
            }).catch(err=>{
                alert("unable to get data")
            })

        }
    }).catch(err=>{
        alert("some error occured")
        console.log(err)
    })

      
      
        // imgTag.src=`http://localhost:3000/uploads/${Data.image}`
     
    
   

    
})
