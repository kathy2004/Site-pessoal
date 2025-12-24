document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano no copyright
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Efeito da tela de boas-vindas
    const welcomeScreen = document.querySelector('.welcome-screen');
    const mainContent = document.querySelector('.container');
    const siteLogo = document.querySelector('.site-logo');
    
    setTimeout(() => {
        welcomeScreen.style.opacity = '0';
        
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.classList.add('show');
            siteLogo.style.opacity = '1'; 
        }, 1000); // Duração da transição do CSS
    }, 2500); // Tempo que a tela de boas-vindas fica visível
    
    // Função para animar as barras de habilidade
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skills = entry.target.querySelectorAll('.skill-level');
                skills.forEach(skill => {
                    const width = skill.style.width;
                    skill.style.width = '0';
                    setTimeout(() => {
                        skill.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    // Observador de interseção para animar quando a seção estiver visível
    const skillObserver = new IntersectionObserver(animateSkills, {
        threshold: 0.3
    });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});