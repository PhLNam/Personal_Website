document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "a Software Engineer",
        "a Computer Science Student",
        "Passionate About AI & Machine Learning",
        "Actively Seeking Internship & Part-Time Opportunities",
        "the solution, you are looking for"
    ];
    
    const textElement = document.getElementById("animated-typed");
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let delay = 100; // typing speed

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        const visibleText = currentPhrase.slice(0, currentCharIndex);
        textElement.textContent = visibleText;

        if (!isDeleting) {
            if (currentCharIndex < currentPhrase.length) {
                currentCharIndex++;
                delay = 100;
            } else {
                isDeleting = true;
                delay = 2000; // pause before deleting
            }
        } else {
            if (currentCharIndex > 0) {
                currentCharIndex--;
                delay = 50;
            } else {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                delay = 400;
            }
        }

        setTimeout(type, delay);
    }

    type(); // Start animation
});
