document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarTop = sidebar.offsetTop;

    function stickySidebar() {
        if (window.pageYOffset >= sidebarTop) {
            sidebar.classList.add('sticky');
        } else {
            sidebar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickySidebar);

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    sidebar.insertBefore(menuToggle, sidebar.firstChild);

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show-menu');
    });
});