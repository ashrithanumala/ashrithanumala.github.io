// assets/js/typingEffect.js

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Exploring Chicago",
        "Binging Game of Thrones",
        "Building a Wordle-Bot"
    ];
    const el = document.getElementById("typewriter");

    let baseTypingSpeed = 100; // Base typing speed in ms
    let backspaceSpeed = 50; // Backspacing speed in ms
    let pauseAfterTyping = 1000; // Pause after typing a phrase
    let pauseAfterBackspacing = 500; // Pause after backspacing a phrase
    let curPhraseIndex = 0;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomTypingSpeed() {
        return baseTypingSpeed + Math.floor(Math.random() * 50) - 25; // Varies typing speed between baseSpeed-25 to baseSpeed+25 ms
    }

    const writeLoop = async () => {
        while (true) {
            let curWord = phrases[curPhraseIndex];
            el.style.color = getRandomColor(); // Set random color

            // Typing the current word
            for (let i = 0; i < curWord.length; i++) {
                el.innerText = curWord.substring(0, i + 1);
                await sleep(getRandomTypingSpeed());
            }

            await sleep(pauseAfterTyping);

            // Backspacing the current word
            for (let i = curWord.length; i > 0; i--) {
                el.innerText = curWord.substring(0, i - 1);
                await sleep(backspaceSpeed);
            }

            await sleep(pauseAfterBackspacing);

            // Move to the next phrase
            curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
        }
    };

    writeLoop();
});
