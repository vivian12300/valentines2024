const noButtonPhrases = [
    "Please", 
    "Please", 
    "Please", 
    "Pleaseeeeee", 
    "Please", 
    "Please", 
    "Please", 
    "Please",
];

let numberOfTimesClicked = 0; 
// this gives us access to the no button and the yes button
const yesButton = document.getElementById("yes-button"); 
const noButton = document.getElementById("no-button");
// we also need to get the DOM element for the gif
const gif = document.getElementById("gif-container");
// we need to access the DOM element for the main text
const mainText = document.getElementById("main-text");

noButton.addEventListener("click", () => {
    if (numberOfTimesClicked >= noButtonPhrases.length) {
        numberOfTimesClicked = 0;
    };
    noButton.textContent = noButtonPhrases[numberOfTimesClicked];
    // Insert Tasks Here
    yesButton.style.fontSize = `${numberOfTimesClicked * 10 + 20}px`;
    const randomX = Math.random() * (window.innerWidth - noButton.clientWidth);
const randomY = Math.random() * (window.innerHeight - noButton.clientHeight);
noButton.style.position = 'absolute'; // set position to absolute
noButton.style.left = `${randomX}px`;
noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
    yesButton.style.display = "none";
    noButton.style.display = "none";
    gif.src = "https://media.tenor.com/TEC6z0acIbUAAAAj/cute-bears-love.gif";
    mainText.textContent = "yay! i knew you would say yes! <3";
});