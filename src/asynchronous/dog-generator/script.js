const dogImg = document.querySelector(".dogImg");
const loadingText = document.querySelector(".loadingText");
const getDogButton = document.querySelector(".getDogButton");

function getNewDog() {
    dogImg.src = '';

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        dogImg.src = data.message;
    })
}

getDogButton.addEventListener('click', getNewDog)