document.addEventListener('DOMContentLoaded', () => {
    // Hiding main content initially
    const mainContent = document.querySelectorAll('nav, section');
    mainContent.forEach(element => {
        element.style.visibility = 'hidden';
    });

    // Loading screen logic
    const loadingScreen = document.querySelector('.loading-screen');
    const totalAnimationDuration = 3000; // 2000ms (circleToCapsule) + 500ms (fade-out)

    setTimeout(() => {
        // Fade out the loading screen
        loadingScreen.classList.add('fade-out');

        // Show main content and scroll to Hero section
        setTimeout(() => {
            mainContent.forEach(element => {
                element.style.visibility = 'visible';
            });

            // Scroll to Hero section
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });

            // Remove loading screen from DOM after fade-out
            loadingScreen.remove();
        }, 500); // Match the fade-out transition duration
    }, totalAnimationDuration - 500); // Start fade-out at the end of the circleToCapsule animation

    // Existing filtering logic
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectCards = document.querySelectorAll('.project-card, .no-website');
    const projectGrid = document.querySelector('.project-grid');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Get the filter value from the button's data-filter attribute
            const filter = button.getAttribute('data-filter');

            // Filter the project cards
            let visibleCount = 0;
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Add or remove single-card class based on visible count
            if (visibleCount === 1) {
                projectGrid.classList.add('single-card');
            } else {
                projectGrid.classList.remove('single-card');
            }
        });
    });

    // Scroll fade animation logic
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the section is visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Immediately make the first section (hero) visible without scroll
    sections[0].classList.add('visible');
});
