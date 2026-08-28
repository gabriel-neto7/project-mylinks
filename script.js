const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// 1. Checa se o tema salvo no navegador é o 'light'
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  // 2. Se for, adiciona a classe 'light' (repare que aqui não vai o ponto)
  body.classList.add('light');
}

toggleButton.addEventListener('click', () => {
  // 3. Liga/Desliga a classe 'light' a cada clique
  body.classList.toggle('light');
  
  // 4. Salva a escolha atual no navegador
  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
