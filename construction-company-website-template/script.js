// Array of default images for the 3x3 grid
const defaultImages = [
    'img/apts1.jpg', 'img/apts2.jpg', 'img/img3.jpg',
    'img/img3.jpg', 'img/img5.jpg', 'img/img7.jpg',
    'img/img8.jpg', 'img/img10.jpg', 'img/img9.jpg'
  ];
  
  // Function to load default images into the grid
  function loadDefaultImages() {
    const imageContainer = document.getElementById('imageContainer');
    defaultImages.forEach(src => {
      const img = document.createElement('img');
      img.src = src; // Set the image source
      img.alt = 'Property Image'; // Set alternate text
      imageContainer.appendChild(img); // Append the image to the container
    });
  }
  
  // Call the function to load default images when the page loads
  window.onload = loadDefaultImages;
  