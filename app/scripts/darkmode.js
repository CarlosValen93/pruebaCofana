const toggleButton = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark');
}


toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }

  console.log('Botón de modo oscuro presionado');
  console.log(document.body.classList.contains('dark') ? 'Modo oscuro activado' : 'Modo oscuro desactivado');
});
