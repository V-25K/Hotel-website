const hotels = [
  {
    name: "Hotel Kunnal",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    pinCode: 244652,
    rating: 2.2,
    price: 520,
    accommodationType: "HomeStay",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Gym", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    name: "Hotel Kothari",
    address: "Badrinath, Uttrakhand",
    pinCode: 244652,
    rating: 4.2,
    price: 550,
    accommodationType: "Hotel",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1676319481666-1d558d578fab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1673984588277-ad704d13ee2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    name: "Hotel Bhatt",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    pinCode: 244652,
    rating: 1.9,
    price: 850,
    accommodationType: "Hotel",
    amenities: ["Free Wi-Fi", "Swimming Pool", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1523699289804-55347c09047d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678286770037-2116a75530b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    name: "Hotel Hanma",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    pinCode: 244652,
    rating: 3.4,
    price: 1050,
    accommodationType: "Hotel",
    amenities: ["Free Wi-Fi", "Gym", "Spa"],
    images: [
      "https://images.unsplash.com/photo-1523699289804-55347c09047d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
];

const mainContainer = document.getElementById("home");
const hotelContainer = document.getElementById("hotels-list-container");
const searchBtn = document.getElementById("search");
const hotelsList = document.getElementById("hotels-list");
const backButton = document.getElementById("back-button");
const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  mainContainer.classList.add("hidden");
  hotelContainer.classList.remove("hidden");
  populateHotelsList();
});

backButton.addEventListener("click", () => {
  hotelContainer.classList.add("hidden");
  mainContainer.classList.remove("hidden");
});

function populateHotelsList(type, price, rating) {
  const hotelsList = document.getElementById("hotels-list");
  hotelsList.innerHTML = "";

  const filteredHotels = hotels.filter((hotel) => {
    console.log(hotel.accommodationType.toLowerCase());
    // Filter by type if provided
    const typeFilter = !type || hotel.accommodationType.toLowerCase() === type;
    // Filter by price
    const priceFilter = !price || (hotel.price >= 500 && hotel.price <= price);
    // Filter by rating
    const ratingFilter = !rating || hotel.rating >= rating;

    return typeFilter && priceFilter && ratingFilter;
  });

  if (filteredHotels.length === 0) {
    const noHotel = document.createElement("div");
    noHotel.className = "flex items-center justify-center";
    noHotel.style.minHeight = "542px";
    noHotel.innerHTML = `<h2 class="text-5xl text-red-600 align-middle">NO HOTEL</h2>`;
    hotelsList.appendChild(noHotel);
  } else {
    filteredHotels.forEach((hotel) => {
      const listItem = document.createElement("li");
      listItem.className = "bg-white p-6 rounded-lg shadow-md mb-6";
      listItem.innerHTML = `
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row items-start">
            <div class="relative">
              <img src="${hotel.images[0]}" alt="${
        hotel.name
      } profile" class="w-80 h-60 object-cover rounded-lg border-2 border-gray-300">
              <div class="absolute top-0 right-0 flex flex-col space-y-2 p-2">
                <img src="${hotel.images[1]}" alt="${
        hotel.name
      } image" class="w-16 h-16 object-cover rounded-lg border-2 border-gray-300">
                <img src="${hotel.images[2]}" alt="${
        hotel.name
      } image" class="w-16 h-16 object-cover rounded-lg border-2 border-gray-300">
                <img src="${hotel.images[3]}" alt="${
        hotel.name
      } image" class="w-16 h-16 object-cover rounded-lg border-2 border-gray-300">
              </div>
            </div>
            <div class="ml-0 md:ml-6 mt-4 md:mt-0">
              <h1 class="text-2xl font-bold text-gray-800">${hotel.name}</h1>
              <p class="text-md text-gray-600"><strong>Location:</strong> ${
                hotel.address
              } - ${hotel["pin code"]}</p>
              <p class="text-md text-gray-600"><strong>Rating:</strong> ${
                hotel.rating
              }</p>
              <p class="text-md text-gray-600"><strong>Price:</strong> ₹${
                hotel.price
              } per night</p>
              <p class="text-md text-gray-600 mb-11"><strong>Amenities:</strong> ${hotel.amenities.join(
                ", "
              )}</p>
              <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Visit</button>
              <button class="bg-green-500 text-white px-4 mx-4 py-2 rounded hover:bg-green-600 mt-4">Book Now</button>
            </div>
          </div>
        </div>
      `;
      hotelsList.appendChild(listItem);
    });
  }
}

/*filter*/
const priceFilter = document.getElementById("priceFilter");
const price = document.getElementById("filter-price");
const rating = document.getElementById("filter-rating");

// Update price display on input
price.addEventListener("input", () => {
  const priceValue = price.value;
  priceFilter.textContent = `₹ ${priceValue}`;
});

// Filter Hotel list UI
const applyFilter = document.getElementById("apply-filters");

applyFilter.addEventListener("click", getData);

function getData() {
  const priceValue = parseInt(document.getElementById("filter-price").value);
  const ratingValue = parseFloat(
    document.getElementById("filter-rating").value
  );
  const roomType = document.querySelector(
    'input[name="accommodation"]:checked'
  );

  const roomTypeValue = roomType ? roomType.value : null;

  populateHotelsList(roomTypeValue, priceValue, ratingValue);
}
