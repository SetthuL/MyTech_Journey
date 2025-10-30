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