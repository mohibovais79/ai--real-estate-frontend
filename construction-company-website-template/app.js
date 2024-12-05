
const imageMap = {
  
  sharjah: {
    apartment: {
      "2+": {
        images: ["img/Images/Images/Apartments/apt1.webp", "img/Images/Images/Apartments/apt2.webp", "img/Images/Images/Apartments/apt3.webp"],
        price: [1000, 1200, 1400],
        area: [800, 900, 1000]
      },
      "3+": {
        images: ["img/Images/Images/Apartments/apt4.webp", "img/Images/Images/Apartments/apt5.webp", "img/Images/Images/Apartments/apt6.webp"],
        price: [1500, 1600, 1700],
        area: [1100, 1200, 1300]
      },
      "5+": {
        images: ["img/Images/Images/Apartments/apt7.webp", "img/Images/Images/Apartments/apt8.jpg", "img/Images/Images/Apartments/apt9.jpg"],
        price: [2000, 2500, 3000],
        area: [1400, 1500, 1600]
      },
      "7+": {
        images: ["img/Images/Images/Apartments/apt3.webp", "img/Images/Images/Apartments/apt5.webp", "img/Images/Images/Apartments/apt6.webp"],
        price: [3000, 3500, 4000],
        area: [1700, 2000, 2500]
      }
    },
    house: {
      "2+": {
        images: ["img/Images/Images/2 Rooms/2rms1.webp", "img/Images/Images/2 Rooms/2rms2.webp"],
        price: [3000, 3200],
        area: [1500, 1600]
      },
      "3+": {
        images: ["img/Images/Images/2 Rooms/2rms3.webp", "img/Images/Images/2 Rooms/2rms4.webp"],
        price: [4000, 4500],
        area: [1700, 1800]
      },
      "5+": {
        images: ["img/Images/Images/5 Rooms/5rms1.webp", "img/Images/Images/5 Rooms/5rms2.webp"],
        price: [5000, 5500],
        area: [2000, 2100]
      },
      "7+": {
        images: ["img/Images/Images/5 Rooms/5rms3.jpg", "img/Images/Images/5 Rooms/5rms4.jpg"],
        price: [6000, 6500],
        area: [2500, 2600]
      }
    },
    washrooms: {
      "2+": {
        images: ["img/Images/Images/Washrooms/apt3.webp", "img/Images/Images/Washrooms/5rms2.webp"],
        price: [1000, 2000],
        area: [500, 600]
      },
      "3+": {
        images: ["img/Images/Images/Washrooms/apt.webp", "img/Images/Images/Washrooms/wash4.webp"],
        price: [300, 400],
        area: [70, 80]
      },
      "5+": {
        images: ["img/Images/Images/Washrooms/wash5.webp", "img/Images/Images/Washrooms/wash6.webp"],
        price: [500, 600],
        area: [90, 100]
      },
      "7+": {
        images: ["img/Images/Images/Washrooms/wash7.webp", "img/Images/Images/Washrooms/wash8.webp"],
        price: [700, 800],
        area: [110, 120]
      }
    }
  },
  ajman: {
    apartment: {
      "2+": {
        images: ["img/Images/Images/Apartments/apt3.webp", "img/Images/Images/Apartments/apt4.webp"],
        price: [1000, 1100],
        area: [600, 700]
      },
      "3+": {
        images: ["img/Images/Images/Apartments/apt1.webp", "img/Images/Images/Apartments/apt5.webp"],
        price: [1500, 1600],
        area: [800, 900]
      },
      "5+": {
        images: ["img/Images/Images/Apartments/apt7.webp", "img/Images/Images/Apartments/apt2.webp"],
        price: [2000, 2200],
        area: [1000, 1100]
      },
      "7+": {
        images: ["img/Images/Images/Apartments/apt9.jpg", "img/Images/Images/Apartments/apt8.jpg"],
        price: [2500, 2700],
        area: [1200, 1300]
      }
    },
    house: {
      "2+": {
        images: ["img/Images/Images/2 Rooms/2rms3.webp", "img/Images/Images/2 Rooms/2rms1.webp"],
        price: [3000, 3200],
        area: [1500, 1600]
      },
      "3+": {
        images: ["img/Images/Images/2 Rooms/2rms4.webp", "img/Images/Images/2 Rooms/2rms1.webp"],
        price: [4000, 4200],
        area: [1700, 1800]
      },
      "5+": {
        images: ["img/Images/Images/5 Rooms/5rms2.webp", "img/Images/Images/5 Rooms/5rms3.jpg"],
        price: [5000, 5200],
        area: [2000, 2200]
      },
      "7+": {
        images: ["img/Images/Images/7 Rooms/Mnsion.webp", "img/Images/Images/7 Rooms/Mnsion3.webp"],
        price: [6000, 6200],
        area: [2500, 2700]
      }
    }
  },
  abu_dhabi: {
    apartment: {
      "2+": {
        images: ["img/Images/Images/Apartments/apt5.webp", "img/Images/Images/Apartments/apt9.jpg", "img/Images/Images/Apartments/apt1.webp"],
        price: [1500, 1600, 1800],
        area: [900, 1000, 1100]
      },
      "3+": {
        images: ["img/Images/Images/Apartments/apt13.webp", "img/Images/Images/Apartments/apt7.webp", "img/Images/Images/Apartments/apt4.webp"],
        price: [2000, 2200, 2500],
        area: [1200, 1300, 1400]
      },
      "5+": {
        images: ["img/Images/Images/Apartments/apt8.jpg", "img/Images/Images/Apartments/apt5.webp", "img/Images/Images/Apartments/apt2.webp"],
        price: [3000, 3500, 4000],
        area: [1500, 1600, 1700]
      },
      "7+": {
        images: ["img/Images/Images/Apartments/apt9.jpg", "img/Images/Images/Apartments/apt6.webp", "img/Images/Images/Apartments/apt1.webp"],
        price: [4500, 5000, 5500],
        area: [1800, 1900, 2000]
      }
    },
    house: {
      "2+": {
        images: ["img/Images/Images/2 Rooms/2rms4.webp", "img/Images/Images/2 Rooms/2rms3.webp"],
        price: [3500, 3700],
        area: [1600, 1700]
      },
      "3+": {
        images: ["img/Images/Images/2 Rooms/2rms13.webp", "img/Images/Images/2 Rooms/2rms7.webp"],
        price: [4500, 4800],
        area: [1800, 1900]
      },
      "5+": {
        images: ["img/Images/Images/5 Rooms/5rms3.jpg", "img/Images/Images/5 Rooms/5rms14.webp"],
        price: [6000, 6500],
        area: [2000, 2200]
      },
      "7+": {
        images: ["img/Images/Images/5 Rooms/5rms11.webp", "img/Images/Images/5 Rooms/5rms4.jpg"],
        price: [7000, 7500],
        area: [2300, 2500]
      }
    },
    washrooms: {
      "2+": {
        images: ["img/Images/Images/Washrooms/wash15.webp", "img/Images/Images/Washrooms/apt.webp"],
        price: [150, 200],
        area: [60, 70]
      },
      "3+": {
        images: ["img/Images/Images/Washrooms/wash13.webp", "img/Images/Images/Washrooms/apt3.webp"],
        price: [250, 300],
        area: [80, 90]
      },
      "5+": {
        images: ["img/Images/Images/Washrooms/wash7.webp", "img/Images/Images/Washrooms/wash6.webp"],
        price: [400, 450],
        area: [100, 110]
      },
      "7+": {
        images: ["img/Images/Images/Washrooms/wash5.webp", "img/Images/Images/Washrooms/wash16.webp"],
        price: [500, 550],
        area: [120, 130]
      }
    }
  },
  fujairah: {
    apartment: {
      "2+": {
        images: ["img/Images/Images/Apartments/apt2.webp", "img/Images/Images/Apartments/apt8.jpg", "img/Images/Images/Apartments/apt1.webp"],
        price: [1200, 1300],
        area: [800, 900]
      },
      "3+": {
        images: ["img/Images/Images/Apartments/apt6.webp", "img/Images/Images/Apartments/apt4.webp"],
        price: [1600, 1700],
        area: [1100, 1200]
      },
      "5+": {
        images: ["img/Images/Images/Apartments/apt2.webp", "img/Images/Images/Apartments/apt7.webp"],
        price: [2000, 2200],
        area: [1300, 1400]
      },
      "7+": {
        images: ["img/Images/Images/Apartments/apt9.jpg", "img/Images/Images/Apartments/apt3.webp"],
        price: [2500, 2700],
        area: [1500, 1600]
      }
    },
    house: {
      "2+": {
        images: ["img/Images/Images/2 Rooms/2rms12.webp", "img/Images/Images/2 Rooms/2rms8.webp"],
        price: [3000, 3200],
        area: [1600, 1700]
      },
      "3+": {
        images: ["img/Images/Images/2 Rooms/2rms11.webp", "img/Images/Images/2 Rooms/2rms13.webp"],
        price: [4000, 4300],
        area: [1800, 1900]
      },
      "5+": {
        images: ["img/Images/Images/5 Rooms/5rms10.webp", "img/Images/Images/5 Rooms/5rms2.webp"],
        price: [5000, 5500],
        area: [2000, 2100]
      },
      "7+": {
        images: ["img/Images/Images/5 Rooms/5rms12.webp", "img/Images/Images/5 Rooms/5rms3.jpg"],
        price: [6000, 6500],
        area: [2200, 2300]
      }
    },
    washrooms: {
      "2+": {
        images: ["img/Images/Images/Washrooms/wash1.webp", "img/Images/Images/Washrooms/wash7.webp"],
        price: [100, 150],
        area: [50, 60]
      },
      "3+": {
        images: ["img/Images/Images/Washrooms/wash6.webp", "img/Images/Images/Washrooms/wash13.webp"],
        price: [250, 300],
        area: [80, 90]
      },
      "5+": {
        images: ["img/Images/Images/Washrooms/wash5.webp", "img/Images/Images/Washrooms/wash7.webp"],
        price: [400, 450],
        area: [100, 110]
      },
      "7+": {
        images: ["img/Images/Images/Washrooms/wash15.webp", "img/Images/Images/Washrooms/wash17.webp"],
        price: [500, 550],
        area: [120, 130]
      }
    }
  },
  ras_al_khaimah: {
    apartment: {
      "2+": {
        images: ["img/Images/Images/Apartments/apt8.jpg", "img/Images/Images/Apartments/apt6.webp", "img/Images/Images/Apartments/apt1.webp"],
        price: [1500, 1600],
        area: [900, 1000]
      },
      "3+": {
        images: ["img/Images/Images/Apartments/apt2.webp", "img/Images/Images/Apartments/apt5.webp"],
        price: [2000, 2200],
        area: [1200, 1300]
      },
      "5+": {
        images: ["img/Images/Images/Apartments/apt9.jpg", "img/Images/Images/Apartments/apt3.webp"],
        price: [2500, 2700],
        area: [1400, 1500]
      },
      "7+": {
        images: ["img/Images/Images/Apartments/apt4.webp", "img/Images/Images/Apartments/apt7.webp"],
        price: [3000, 3500],
        area: [1500, 1600]
      }
    },
    house: {
      "2+": {
        images: ["img/Images/Images/2 Rooms/2rms14.webp", "img/Images/Images/2 Rooms/2rms15.webp"],
        price: [3200, 3400],
        area: [1700, 1800]
      },
      "3+": {
        images: ["img/Images/Images/2 Rooms/2rms12.webp", "img/Images/Images/2 Rooms/2rms13.webp"],
        price: [4200, 4500],
        area: [1900, 2000]
      },
      "5+": {
        images: ["img/Images/Images/5 Rooms/5rms11.webp", "img/Images/Images/5 Rooms/5rms12.webp"],
        price: [5500, 6000],
        area: [2100, 2200]
      },
      "7+": {
        images: ["img/Images/Images/5 Rooms/5rms17.webp", "img/Images/Images/5 Rooms/5rms10.webp"],
        price: [6500, 7000],
        area: [2300, 2400]
      }
    },
    washrooms: {
      "2+": {
        images: ["img/Images/Images/Washrooms/wash19.webp", "img/Images/Images/Washrooms/wash20.webp"],
        price: [100, 150],
        area: [60, 70]
      },
      "3+": {
        images: ["img/Images/Images/Washrooms/wash23.webp", "img/Images/Images/Washrooms/wash17.webp"],
        price: [200, 250],
        area: [80, 90]
      },
      "5+": {
        images: ["img/Images/Images/Washrooms/wash27.webp", "img/Images/Images/Washrooms/wash29.webp"],
        price: [350, 400],
        area: [90, 100]
      },
      "7+": {
        images: ["img/Images/Images/Washrooms/wash24.webp", "img/Images/Images/Washrooms/wash22.webp"],
        price: [450, 500],
        area: [110, 120]
      }
    }
  },
  umm_al_quwain: {
    apartment: {
      "2+": {
        images: ["img/Images/Images/Apartments/apt3.webp", "img/Images/Images/Apartments/apt9.jpg", "img/Images/Images/Apartments/apt5.webp"],
        price: [1200, 1400],
        area: [800, 900]
      },
      "3+": {
        images: ["img/Images/Images/Apartments/apt4.webp", "img/Images/Images/Apartments/apt7.webp"],
        price: [1600, 1700],
        area: [1000, 1100]
      },
      "5+": {
        images: ["img/Images/Images/Apartments/apt6.webp", "img/Images/Images/Apartments/apt2.webp"],
        price: [2000, 2200],
        area: [1200, 1300]
      },
      "7+": {
        images: ["img/Images/Images/Apartments/apt1.webp", "img/Images/Images/Apartments/apt8.jpg"],
        price: [2500, 2700],
        area: [1400, 1500]
      }
    },
    house: {
      "2+": {
        images: ["img/Images/Images/2 Rooms/2rms5.webp", "img/Images/Images/2 Rooms/2rms10.webp"],
        price: [2800, 3000],
        area: [1500, 1600]
      },
      "3+": {
        images: ["img/Images/Images/2 Rooms/2rms13.webp", "img/Images/Images/2 Rooms/2rms17.webp"],
        price: [3700, 3900],
        area: [1700, 1800]
      },
      "5+": {
        images: ["img/Images/Images/5 Rooms/5rms15.webp", "img/Images/Images/5 Rooms/5rms10.webp"],
        price: [4500, 5000],
        area: [2000, 2100]
      },
      "7+": {
        images: ["img/Images/Images/5 Rooms/5rms18.webp", "img/Images/Images/5 Rooms/5rms19.webp"],
        price: [5500, 6000],
        area: [2200, 2400]
      }
    },
    washrooms: {
      "2+": {
        images: ["img/Images/Images/Washrooms/wash3.webp", "img/Images/Images/Washrooms/wash7.webp"],
        price: [100, 150],
        area: [60, 70]
      },
      "3+": {
        images: ["img/Images/Images/Washrooms/wash9.webp", "img/Images/Images/Washrooms/wash14.webp"],
        price: [200, 250],
        area: [80, 90]
      },
      "5+": {
        images: ["img/Images/Images/Washrooms/wash10.webp", "img/Images/Images/Washrooms/wash12.webp"],
        price: [350, 400],
        area: [100, 110]
      },
      "7+": {
        images: ["img/Images/Images/Washrooms/wash18.webp", "img/Images/Images/Washrooms/wash20.webp"],
        price: [450, 500],
        area: [120, 130]
      }
    }
  }
};


  
  const applyFiltersButton = document.getElementById("applyFilters");
  const imageContainer = document.getElementById("imageContainer");
  
  applyFiltersButton.addEventListener("click", () => {
      const selectedCity = document.getElementById("city").value;
      const selectedPropertyType = document.getElementById("propertyType").value;
      const selectedBedrooms = document.getElementById("bedrooms").value;
      const selectedWashrooms = document.getElementById("washrooms").value;
      const minPrice = parseFloat(document.getElementById("minPrice").value.replace(/[^0-9]/g, "")) || 0;
      const maxPrice = parseFloat(document.getElementById("maxPrice").value.replace(/[^0-9]/g, "")) || Infinity;
      const minArea = parseFloat(document.getElementById("minArea").value.replace(/[^0-9]/g, "")) || 0;
      const maxArea = parseFloat(document.getElementById("maxArea").value.replace(/[^0-9]/g, "")) || Infinity;
  
      // Clear previous images
      imageContainer.innerHTML = "";
  
      if (selectedCity && selectedPropertyType && selectedBedrooms && selectedWashrooms) {
          // Get filtered data based on selected city, property type, and other filters
          const filteredData = imageMap[selectedCity]?.[selectedPropertyType]?.[selectedBedrooms] ||
                               imageMap[selectedCity]?.[selectedPropertyType]?.[selectedWashrooms];
  
          if (filteredData) {
              const filteredImages = filteredData.images.filter((_, index) => {
                  const price = filteredData.price[index];
                  const area = filteredData.area[index];
                  return price >= minPrice && price <= maxPrice && area >= minArea && area <= maxArea;
              });
  
              if (filteredImages.length > 0) {
                  filteredImages.forEach((src) => {
                      const img = document.createElement("img");
                      img.src = src;
                      img.classList.add('image-size');
                      imageContainer.appendChild(img);
                  });
              } else {
                  const noResults = document.createElement("p");
                  noResults.textContent = "No results found for the selected filters.";
                  imageContainer.appendChild(noResults);
              }
          }
      } else {
          const noResults = document.createElement("p");
          noResults.textContent = "Please select all filters.";
          imageContainer.appendChild(noResults);
      }
  });
  
 
    
  
  
  