//a classe "open" no elemento "navbar-toggle" quando o ícone de hambúrguer for clicado:
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('open');
  navbarMenu.classList.toggle('open');
});