const darkModeToggle = document.getElementById('darkmode');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.style.backgroundColor = '#333'; // Cor de fundo no modo escuro
        darkModeToggle.style.color = '#fff'; // Cor do texto no modo escuro
    } else {
        darkModeToggle.style.backgroundColor = '#333'; // Cor de fundo no modo claro
        darkModeToggle.style.color = '#fff'; // Cor do texto no modo claro
    }
});
