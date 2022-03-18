const toggleBtn = document.querySelector('.toggle-button');
const menu = document.querySelector('ul')

const toggleMenu = () => {
  menu.classList.toggle('active')
  toggleBtn.classList.toggle('active-menu')
}

toggleBtn.addEventListener('click', toggleMenu)