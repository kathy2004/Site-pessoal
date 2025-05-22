document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no copyright
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Efeito da tela de boas-vindas
    const welcomeScreen = document.querySelector('.welcome-screen');
    const mainContent = document.querySelector('.container');
    
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.classList.add('show');
        }, 1500);
    }, 2500);
    
    // Anima as barras de habilidade quando visíveis
    const skills = document.querySelectorAll('.skill-level');
    
    const animateSkills = () => {
        skills.forEach(skill => {
            const width = skill.style.width;
            skill.style.width = '0';
            skill.setAttribute('data-level', width);
            setTimeout(() => {
                skill.style.width = width;
            }, 100);
        });
    };
    
    // Observador de interseção para animar quando a seção estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.skills').forEach(section => {
        observer.observe(section);
    });
});

    // Menu Mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});