document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Game data
    const games = [
        { title: 'Hell Skull', image: 'hellskull.png', description: 'Arcade-style retro hyper casual mobile game', link: 'https://play.google.com/store/apps/details?id=com.OverUnlimited.HellSkull' },
        { title: 'Coming Soon', image: 'soon.jpg', description: '???', link: '#' }
    ];
    
    // Populate game grid
    const gameGrid = document.querySelector('.game-grid');
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <a href="${game.link}">
                <img src="${game.image}" alt="${game.title}">
                <div class="game-card-content">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                </div>
            </a>
        `;
        gameGrid.appendChild(gameCard);
    });

    // Team data
    const team = [
        { name: 'Rumeysa', role: 'Game Developer' },
        { name: 'Renas', role: 'Game Developer' },
    ];

    // Populate team grid
    const teamGrid = document.querySelector('.team-grid');
    team.forEach(member => {
        const teamMember = document.createElement('div');
        teamMember.classList.add('team-member');
        teamMember.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        teamGrid.appendChild(teamMember);
    });

    // Animated counter function
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start).toLocaleString();
            if (start >= target) {
                clearInterval(timer);
                element.textContent = target.toLocaleString();
            }
        }, 16);
    }

    // Animate counter when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(document.getElementById('downloads-count'), 50, 1500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('#stats'));

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Update copyright year
    const copyrightYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = copyrightYear.textContent.replace('2024', currentYear);
});