const cityImageMap = {
    sharjah: ["img/Images/Images/Apartments/apt1.webp", "img/Images/Images/Apartments/apt2.webp"],
    ajman: ["img/Images/Images/Apartments/apt3.webp", "img/Images/Images/Apartments/apt4.webp"],
    "abu-dhabi": ["img/Images/Images/Apartments/apt1.webp", "img/Images/Images/Apartments/apt2.webp"],
    fujairah: ["img/Images/Images/Apartments/apt3.webp", "img/Images/Images/Apartments/apt4.webp"],
    rasalkhaimah: ["img/Images/Images/Apartments/apt5.webp", "img/Images/Images/Apartments/apt3.webp"],
    ummalquwain: ["img/umm-al-quwain1.jpg", "img/umm-al-quwain2.jpg"],
  };
  

  const cityDropdown = document.getElementById("cityDropdown");
const imageContainer = document.getElementById("imageContainer");

cityDropdown.addEventListener("change", () => {
  const selectedCity = cityDropdown.value;

  // Clear previous images
  imageContainer.innerHTML = "";

  if (selectedCity !== "all" && cityImageMap[selectedCity]) {
    cityImageMap[selectedCity].forEach((imageSrc) => {
      const img = document.createElement("img");
      img.src = imageSrc;
      img.alt = `${selectedCity} image`;
      img.classList.add("image-size"); // Add a class for consistent styling
      imageContainer.appendChild(img);
    });
  } else {
    const noResults = document.createElement("p");
    noResults.textContent = "No images available for the selected city.";
    imageContainer.appendChild(noResults);
  }
});
