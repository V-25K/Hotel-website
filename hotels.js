const hotels = [
  {
    name: "Hotel Kunnal",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
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
    "pin code": 244652,
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1676319481666-1d558d578fab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1673984588277-ad704d13ee2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    name: "Hotel bhatt",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1523699289804-55347c09047d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678286770037-2116a75530b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    name: "Hotel hanma",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1523699289804-55347c09047d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1559508551-44bff1de756b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1544124499-58912cbddaad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
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

function populateHotelsList() {
  hotelsList.innerHTML = "";
  hotels.forEach((hotel) => {
    const listItem = document.createElement("li");
    listItem.className = "bg-gray-100 p-4 rounded-lg shadow";
    listItem.innerHTML = `
            <div class="flex justify-around px-10 py-4">
                <div class="flex">
                    <img src=${hotel.images} alt="${hotel.name} profile" class="w-80 h-60 object-cover border-2 border-red-400">
                    <div class="flex flex-col justify-evenly align-middle px-1">
                      <img src=${hotel.images[1]} alt="${hotel.name} profile" class="w-14 h-20 object-cover border-2 border-red-400">
                      <img src=${hotel.images[2]} alt="${hotel.name} profile" class="w-14 h-20 object-cover border-2 border-red-400">
                      <img src=${hotel.images[3]} alt="${hotel.name} profile" class="w-14 h-20 object-cover border-2 border-red-400">
                    </div>
                </div>
                <div class="w-1/2">
                    <h1 class="text-3xl font-bold">${hotel.name}</h1>
                    <p class="text-l"><strong>Location:</strong> ${hotel.address} - ${hotel["pin code"]}</p>
                    <p class="text-l"><strong>Rating:</strong> ${hotel.rating}</p>
                </div>
            </div>
        `;
    hotelsList.appendChild(listItem);
  });
}

/*filter*/

const priceFilter = document.getElementById("priceFilter");
const price = document.getElementById("filter-price");

price.addEventListener("input", () => {
  const priceValue = price.value;
  priceFilter.textContent = `₹ ${priceValue}`;
})