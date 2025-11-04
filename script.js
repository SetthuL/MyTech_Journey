// Toggle fuction to show/hide sections//
      function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);

        document.querySelectorAll("section").forEach(sec => {
          sec.classList.remove("visible");
          sec.classList.add("hidden");
        });

      section.classList.remove("hidden");
      section.classList.add("visible");

      document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");
      });
      document.querySelector(`a[onclick="toggleSection('${sectionId}')"]`).classList.add("active");
    }

// Scroll to Top Button Functionality //
let scrolTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (
        document.body.scrollTop > 100 ||document.documentElement.scrollTop > 100) {
        scrolTopBtn.style.display = "block";
    } else {
        scrolTopBtn.style.display = "none";
    }
};
scrolTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
 // Floating Stars Animation //
document.addEventListener("DOMContentLoaded", function() {
    const floatingStars = document.querySelectorAll('.star');
    const starsNumber = 200;

    for (let i = 0; i < starsNumber; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        document.body.appendChild(star);
    }
});
