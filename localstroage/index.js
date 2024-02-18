// Define your array with name and image
const data = [
    { name: "Bella", image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg" },
    { name: "Jack", image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg" },
    { name: "Apollo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqaTqbYLmjRwplf526Z64rgyVTc51Wb95BVx8r16LVR2VgdzEheag8HjpHJTn9IVDLYUo&usqp=CAU" }
  ];
  

//   //   // Convert the array to a string using JSON.stringify
    const jsonData = JSON.stringify(data);
  
//   //   // Save the string to localStorage under a specific key
    localStorage.setItem('imageData', jsonData);
  
  //   // Retrieve the data from localStorage
    const storedData = localStorage.getItem('imageData');
  
  //   // Parse the JSON string back into an array
    const parsedData = JSON.parse(storedData);
  
    console.log(parsedData); // Verify that the data is retrieved correctly
  



    parsedData.map((item) => {
      document.getElementById('result').innerHTML +=
      `
      <div class="card" style="width: 18rem;">
      <img src=${item.image} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
  
  
  })