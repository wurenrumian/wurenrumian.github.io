document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarTop = sidebar.offsetTop;
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    function stickySidebar() {
        if (window.pageYOffset >= sidebarTop) {
            sidebar.classList.add('sticky');
        } else {
            sidebar.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', stickySidebar);

    // 导航功能
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-section');
            sections.forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    sidebar.insertBefore(menuToggle, sidebar.firstChild);

    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show-menu');
    });
});