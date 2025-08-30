var html = document.getElementsByTagName('html');
var radios = document.getElementsByName('themes'); 

for (i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', function() {
    html[0].classList.remove(html[0].classList.item(0));
    html[0].classList.add(this.id);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function(e) {
      e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
           top: targetPosition,
           behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
           hamburger.classList.remove('active');
           navLinks.classList.remove('active');
      }}
   });
});
    