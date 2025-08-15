const dogImg = document.querySelector(".dogImg");
const loadingText = document.querySelector(".loadingText");
const getDogButton = document.querySelector(".getDogButton");

function getNewDog() {
  dogImg.src = "";
  loadingText.textContent = "Loading...";

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        } return response.json();
    })
    .then((data) => {
      loadingText.textContent = "";
      dogImg.src = data.message;
    })
    .catch((error) => {
        console.error(error);
        loadingText.textContent = 'Failed to load dog'
    })
}

getDogButton.addEventListener("click", getNewDog);
