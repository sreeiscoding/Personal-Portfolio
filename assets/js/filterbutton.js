document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Get the filter value from the button's data-filter attribute
            const filter = button.getAttribute('data-filter');

            // Filter the project cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || filter === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
