
// Vocabulary Data
let words = [
    {
        word: "Apple",
        meaning: "A round fruit that is usually red or green.",
        image: "./image/apple.jpg"
    },
    {
        word: "Elephant",
        meaning: "A large animal with a long trunk.",
        image: "./image/elephant.webp"
    },
    {
        word: "Astronaut",
        meaning: "A person who travels into space.",
        image: "./image/astronaut.webp"
    },
    {
        word: "Computer",
        meaning: "An electronic machine used to process information.",
        image: "./image/computer.png"
    },
    {
        word: "Volcano",
        meaning: "A mountain that can release hot lava, ash, and gas.",
        image: "./image/volcano.jpg"
    },
];

// Current Word Index
let currentIndex = 0;

// Get HTML Elements
let wordElement = document.getElementById("word");
let wordNumber = document.getElementById("wordNumber");
let meaningElement = document.getElementById("meaning");
let wordImage = document.getElementById("wordImage");
let meaningBox = document.getElementById("meaningBox");

let soundBtn = document.getElementById("soundBtn");
let meaningBtn = document.getElementById("meaningBtn");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

// Display Current Word
function displayWord() {
    wordElement.textContent = words[currentIndex].word;

    wordNumber.textContent =
        (currentIndex + 1) + " / " + words.length;

    meaningElement.textContent = words[currentIndex].meaning;

    wordImage.src = words[currentIndex].image;
    wordImage.alt = words[currentIndex].word;

    // Hide meaning when changing word
    meaningBox.style.display = "none";
    meaningBtn.innerHTML =
        '<i class="fa-solid fa-eye"></i> Show Meaning';
}

// Play Pronunciation
function playSound() {
    let word = words[currentIndex].word;
    // browser 
    let speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

// Show or Hide Meaning
function showMeaning() {

    if (meaningBox.style.display === "block") {

        meaningBox.style.display = "none";

        meaningBtn.innerHTML =
            '<i class="fa-solid fa-eye"></i> Show Meaning';

    } else {

        meaningBox.style.display = "block";

        meaningBtn.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i> Hide Meaning';
    }
}

// Next Word
function nextWord() {

    if (currentIndex < words.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    displayWord();
}

// Previous Word
function previousWord() {

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = words.length - 1;
    }

    displayWord();
}

// Button Click Events
soundBtn.addEventListener("click", playSound);
meaningBtn.addEventListener("click", showMeaning);
nextBtn.addEventListener("click", nextWord);
prevBtn.addEventListener("click", previousWord);

// Display First Word
displayWord();
