var loaded = document.getElementById("preloader");

window.addEventListener("load", function(){
    loaded.classList.add("fade-out");
    this.setTimeout(() => {
        loaded.style.display = "none";
    }, 1000)
})

var postload = document.getElementById("post-pre");

window.onload = function () {
    setTimeout(appeardiv, 1000);
}

function appeardiv() {
    postload.style.display = "block";
}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentScroll = window.scrollY;
    let currentSectionIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const nextSectionTop = index < sections.length - 1 ? sections[index + 1].offsetTop : Infinity;
        if (currentScroll >= sectionTop && currentScroll < nextSectionTop) {
            currentSectionIndex = index + 1;
        }
    });

    navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
    });

    const activeNav = navLinks[currentSectionIndex];
    activeNav.classList.add('active');
});
