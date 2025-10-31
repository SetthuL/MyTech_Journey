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
        document.body.scrollTop > 100 ||documentnt.documentElement.scrollTop > 100) {
        scrolTopBtn.style.display = "block";
    } else {
        scrolTopBtn.style.display = "none";
    }
};
scrolTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}