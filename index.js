const cardContainer = document.querySelector(".card-container");
const form = document.querySelector("#form");
const inputValue = document.getElementById("role");

const FetchPlayerData = async (url = '') => { 
  try {
    const response = await fetch(`/api/players${url}`);
    const data = await response.json();
    
    cardContainer.innerHTML = '';

    data.forEach((value) => {
      const card = `
        <div  class="card z-[999] bg-white w-44 h-64 overflow-hidden rounded-lg shadow-lg flex flex-col mx-4 my-2 transition-transform duration-400 transform hover:scale-110">
          <div class="profile-image">
            <img
              src="./public/battle.png"
              alt="Profile Image"
              class="z-10 pt-2 w-20 h-20 relative mx-auto block rounded-full border-4 border-white transition-transform duration-400 transform hover:scale-110"
            />
          </div>
          <!-- User name and description -->
          <div class="card-content text-center py-4">
            <h3 class="text-xl font-semibold capitalize">${value.fullName}</h3>
            <p class="text-sm items-center text-center px-4 uppercase">
              ${value.inGameRole}
            </p>
          </div>
        </div>`;
      cardContainer.insertAdjacentHTML('beforeend', card);
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

FetchPlayerData();
form.addEventListener("submit", async (event) => {
  event.preventDefault(); 
  const role = inputValue.value;
  await FetchPlayerData(`?inGameRole=${role}`);
  inputValue.value = ""
});
const cards = document.getElementsByClassName("card");
for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", (e) => {
        console.log(e.target,"hello");
    });
}

