// Smooth scroll function
function scrollToKonseling() {
    document.getElementById('konseling').scrollIntoView({ behavior: 'smooth' });
}

// Form handling
document.getElementById('konselingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Show success message (replace with actual form submission)
    alert('Terima kasih! Pesan konseling Anda telah terkirim. Kami akan menghubungi Anda segera.');
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.style.backgroundColor = '#1e40af'; // Darker blue
    } else {
        nav.classList.remove('shadow-md');
        nav.style.backgroundColor = '#2563eb'; // Original blue
    }
});

// Add loading animation for materi cards
document.querySelectorAll('.materi-card img').forEach(img => {
    img.addEventListener('load', function() {
        this.classList.add('opacity-100');
    });
    img.classList.add('opacity-0', 'transition-opacity', 'duration-500');
});

// Initialize tooltips for info icons
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', e => {
        const tooltip = document.createElement('div');
        tooltip.className = 'absolute bg-gray-800 text-white p-2 rounded text-sm';
        tooltip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 5}px`;
        
        e.target.addEventListener('mouseleave', () => tooltip.remove());
    });
});

// Add animation for section headers
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'transform', 'translate-y-0');
        }
    });
}, observerOptions);

document.querySelectorAll('section h2').forEach(header => {
    header.classList.add('opacity-0', 'transform', 'translate-y-10', 'transition-all', 'duration-700');
    observer.observe(header);
});