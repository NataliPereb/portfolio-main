const accordeon = document.querySelector('.feature-list');
const accordeonButton = accordeon.querySelectorAll('.feature__link');

accordeonButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        accordeonButton.forEach((button) => {
            button.classList.remove('feature__link_active');
            button.nextElementSibling.classList.add('hidden');
        })
        
        btn.classList.toggle('feature__link_active');
        btn.nextElementSibling.classList.toggle('hidden');
    })
})