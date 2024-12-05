// Array of default images for the 3x3 grid
const defaultImages = [
    'img/apts1.jpg', 'img/apts2.jpg', 'img/img3.jpg',
    'img/img4.jpg', 'img/img5.jpg', 'img/img6.jpg',
    'img/img7.jpg', 'img/img8.jpg', 'img/img9.jpg'
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

// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value; // Get the input value

    // Send the input value to the API endpoint
    fetch('http://localhost:8080/ai-search', { // Your specified API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ search: query }), // Send the input as JSON
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data); // Handle the response data
        displayRecommendedProperties(data.recommended_properties); // Call function to display properties
    })
    .catch((error) => {
        console.error('Error:', error); // Handle any errors
    });
});

// Function to display recommended properties
function displayRecommendedProperties(properties) {
    const propertiesContainer = document.getElementById('propertiesContainer');
    propertiesContainer.innerHTML = ''; // Clear previous properties

    properties.forEach(property => {
        const col = document.createElement('div');
        col.classList.add('col-md-4'); // Adjust column size as needed

        const card = document.createElement('div');
        card.classList.add('card', 'mb-4');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = property.title;

        const address = document.createElement('p');
        address.classList.add('card-text');
        address.textContent = property.displayAddress;

        const price = document.createElement('p');
        price.classList.add('card-text');
        price.textContent = `Price: AED ${property.price}`;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = property.description;

        cardBody.appendChild(title);
        cardBody.appendChild(address);
        cardBody.appendChild(price);
        cardBody.appendChild(description);
        card.appendChild(cardBody);
        col.appendChild(card);
        propertiesContainer.appendChild(col);
    });
}