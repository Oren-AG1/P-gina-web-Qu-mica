document.addEventListener('DOMContentLoaded', function() {
    const temaBtns = document.querySelectorAll('.tema-btn, .subtema-btn');

    temaBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const contenido = btn.nextElementSibling;
            if (contenido.style.display === 'none' || contenido.style.display === '') {
                contenido.style.display = 'block';
            } else {
                contenido.style.display = 'none';
            }
        });
    });
});
