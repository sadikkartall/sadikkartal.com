// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form gönderimi
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz
    alert('Mesajınız gönderildi!');
    form.reset();
}); 