

// * Show/hide Sidebar menu
const burgerMenu = document.querySelector(".mainheader__burger")
const menuLeft = document.querySelector(".mainheader__menuleft")

burgerMenu.addEventListener('click', function(event) {
    menuLeft.classList.toggle('menuactive')
})
// window.addEventListener('resize', ()=> menuLeft.classList.remove('menuactive'));
// window.addEventListener('scroll', ()=> menuLeft.classList.remove('menuactive'));

// * Dynamic padding top body
const header = document.querySelector(".mainheader");
const body = document.querySelector("body");
let headerHeight = header.offsetHeight
body.style.paddingTop = `${header.offsetHeight}px`

// * Show/hide main header onscroll
let clientWidth = document.documentElement.clientWidth;
if (clientWidth > 768) {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            header.classList.remove("mainheader--hidden");
            header.style.transform = `translateY(${-1 * headerHeight}px )`;

        } else {
            header.classList.add("mainheader--hidden");
            header.style.transform = `initial`;
        }
        lastScrollY = window.scrollY;
    });
}