const toggleButton = document.getElementById('switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {

  body.classList.add('light');
}

toggleButton.addEventListener('click', () => {

  body.classList.toggle('light');

  if (body.classList.contains('light')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
});
