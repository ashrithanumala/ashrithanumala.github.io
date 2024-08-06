// assets/js/typingEffect.js

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
    const phrases = [
        "Interning in Chicago",
        "Gymmin",
        "Looking forward to Next Semester",
    ];
    const el = document.getElementById("typewriter");
    const cursor = document.getElementById("cursor");

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
            let randomColor = getRandomColor(); // Get random color
            el.style.color = randomColor; // Set text color
            cursor.style.color = randomColor; // Set cursor color
            cursor.classList.add('typing'); // Add typing class to start animation

            // Typing the current word
            for (let i = 0; i < curWord.length; i++) {
                el.innerText = curWord.substring(0, i + 1);
                await sleep(getRandomTypingSpeed());
            }

            cursor.classList.remove('typing'); // Remove typing class to stop animation
            cursor.classList.add('backspacing'); // Add backspacing class to make cursor solid

            await sleep(pauseAfterTyping);

            // Backspacing the current word
            for (let i = curWord.length; i > 0; i--) {
                el.innerText = curWord.substring(0, i - 1);
                await sleep(backspaceSpeed);
            }

            cursor.classList.remove('backspacing'); // Remove backspacing class
            cursor.classList.add('typing'); // Re-add typing class to start animation

            await sleep(pauseAfterBackspacing);

            // Move to the next phrase
            curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
        }
    };

    writeLoop();
});
