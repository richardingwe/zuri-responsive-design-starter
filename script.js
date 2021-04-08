const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav-links');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

menu.addEventListener('click', () => {
	nav.classList.toggle('show-nav');
	line1.classList.toggle('animate-line1');
	line2.classList.toggle('animate-line2');
	line3.classList.toggle('animate-line3');
});
