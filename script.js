// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 1. Função para abrir/fechar menu mobile ao clicar no hambúrguer
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 2. Fecha o menu automaticamente ao clicar em qualquer link (útil para mobile)
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 3. Efeito opcional: Mudar background do header ao rolar a página (scroll)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '15px 8%';
            header.style.background = 'rgba(11, 15, 25, 0.95)';
        } else {
            header.style.padding = '20px 8%';
            header.style.background = 'rgba(11, 15, 25, 0.8)';
        }
    });
});
