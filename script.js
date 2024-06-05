// Resalta el botón del menú correspondiente a la página actual
document.addEventListener('DOMContentLoaded', function () {
  const pathname = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll('.menu a');
  
  menuItems.forEach(item => {
    if (item.getAttribute('href') === pathname) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pathname = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll('.menu a');

  menuItems.forEach(item => {
    if (item.getAttribute('href') === pathname) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('mouseover', function () {
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseout', function () {
    dropdownContent.style.display = 'none';
  });
});


