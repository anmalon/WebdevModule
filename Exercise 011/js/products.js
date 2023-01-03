const cards = document.querySelectorAll('.product-card');

cards.forEach(card => {
    const header = card.querySelector('h1');
    const paragraph = card.querySelector('p');
    header.addEventListener('click', () => {
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
});
});