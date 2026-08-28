const toggleButton = document.getElementById('switch');
const body = document.body;

// Verifica se o usuário já tinha um tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Ouve o clique do botão
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Salva a preferência no navegador
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
