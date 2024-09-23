
		const tombol = document.querySelector('.tombol');
		const menu = document.querySelector('.menu');

		tombol.addEventListener('click', () => {
			menu.classList.toggle('aktif');
		});

document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.style.display = i === n ? 'block' : 'none';
        });
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    showSlide(index);

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            window.location.href = slide.getAttribute('data-link');
        });
    });
});


