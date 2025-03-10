// JavaScript for smooth scrolling with motion effects
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[data-scroll]');

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Get the target section
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Get the position of the target section
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const startPosition = window.scrollY;
                const distance = targetPosition - startPosition;

                // Smooth scroll with easing function
                let startTime = null;
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, 1000);
                    window.scrollTo(0, run);
                    if (timeElapsed < 1000) requestAnimationFrame(animation);
                }

                function ease(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                }

                requestAnimationFrame(animation);
            }
        });
    });
});

