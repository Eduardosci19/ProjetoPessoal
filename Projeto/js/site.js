// Adicionando animações com JavaScript
const noticias = document.querySelectorAll('.noticia');

noticias.forEach(noticia => {
    noticia.addEventListener('mouseenter', () => {
        noticia.style.boxShadow = '0px 0px 10px 3px rgba(255,0,0,0.5)';
    });

    noticia.addEventListener('mouseleave', () => {
        noticia.style.boxShadow = 'none';
    });
});


