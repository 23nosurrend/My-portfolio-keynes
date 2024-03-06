function submitBlog() {
    let writtenValue = document.getElementById("text").value;
    let titleValue = document.getElementById("title").value;
    let dateValue = document.getElementById("date").value;
    let imageValue = document.getElementById("image").files;

    if (titleValue.trim() === "" || writtenValue.trim() === "") {
        alert("Title and content are required.");
        return;
    }

    if (imageValue.length === 0) {
        alert("Please select an image for the blog post.");
        return;
    }

    const formData = new FormData();
    formData.append("image", imageValue[0]);
    formData.append("date", dateValue);
    formData.append("title", titleValue);
    formData.append("content", writtenValue);

    fetch('https://portfolio-backend-17.onrender.com/blog/post', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert("Blog post submitted successfully.");
            // Optionally, clear form fields or update UI here
        } else {
          response.json().then(data=>{
            alert(data.data.message)
          }).catch(err=>{
            console.log(err)
            alert("Unexpected erro occured while parsing response")
          })
            
        }
    }).catch(error => {
        console.error("Error submitting blog post:", error);
        alert("An unexpected error occurred. Please try again later.");
    });
}
