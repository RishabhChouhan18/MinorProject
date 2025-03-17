document.getElementById('reportForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const imageUpload = document.getElementById('imageUpload').files[0];
  
    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';
    confirmationMessage.innerHTML = `Report Submitted Successfully!<br>Title: ${title}<br>Description: ${description}<br>Location: ${location}`;
  
    // Optionally handle image (for now, just show its name)
    if (imageUpload) {
      confirmationMessage.innerHTML += `<br>Image: ${imageUpload.name}`;
    }
  
    // Clear form after submission (if needed)
    document.getElementById('reportForm').reset();
  });
  