const changingQuotes = [
    "like new, drive with pride.",
    "speaks louder than polish.",
    "today, glow tomorrow.",
    "your ride, elevate your vibe.",
    "reflects the care you invest."
];

let currentQuoteIndex = 0;

function showNextQuote() {
    const changingPartElement = document.querySelector('.changing-part');
    changingPartElement.classList.remove('visible');

    // Wait for the fade-out to complete before changing text
    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % changingQuotes.length;
        changingPartElement.textContent = changingQuotes[currentQuoteIndex];
        changingPartElement.classList.add('visible');
    }, 500); // Delay matches fade-out duration
}

// Initial quote display
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.changing-part').classList.add('visible');
    setInterval(showNextQuote, 4000); // Change every 4 seconds
});
// Initial quote display
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.quote-text').classList.add('visible');
    setInterval(showNextQuote, 4000); // Change every 4 seconds
});







