window.addEventListener('load', () => {
    const animatedTexts = document.querySelectorAll('.animated-text');
    animatedTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.5}s`;
    });
});
