const hotels = [
  {
    name: "Hotel Kunnal",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
    images:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Hotel Kothari",
    address: "Badrinath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
    images:
      "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Hotel bhatt",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
    images:
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Hotel hanma",
    address: "Sunil, Auli, Joshimath, Uttrakhand",
    "pin code": 244652,
    rating: 4.2,
    images:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww",
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
                <div>
                    <img src=${hotel.images} alt="${hotel.name} profile" class="w-80 h-60 object-cover">
                </div>
                <div class="w-1/3">
                    <h1 class="text-xl font-bold">${hotel.name}</h1>
                    <p>Location: ${hotel.address} - ${hotel["pin code"]}</p>
                    <p>Rating: ${hotel.rating}</p>
                </div>
            </div>
        `;
    hotelsList.appendChild(listItem);
  });
}
