// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.about, .speaker').forEach(section => {
    observer.observe(section);
});

function openModal(event, eventId) {
    event.preventDefault();  // This prevents the default anchor behavior
    var modal = document.getElementById(eventId + '-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}


window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.getAttribute('id').replace('-modal', ''));
        }
    });
}

function closeModal(eventId) {
    var modal = document.getElementById(eventId + '-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

