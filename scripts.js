const likeButtons = document.querySelectorAll('.like-button');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.color = 'red';
    });
});