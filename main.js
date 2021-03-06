const menuBtn = document.querySelector('.menu-btn');
const menuItems = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');
const cursor = document.querySelector('.cursor');

//main toggle
menuBtn.addEventListener('click', () => {
   toggle();
});

menuItem.forEach(item => {
     item.addEventListener('click', () => {
         if(menuBtn.classList.contains('open')) {
             toggle();
         }
         item.click();
     })
})



function toggle() {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
}

document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
});

let atScroll = false;
let parallaxTitle = document.querySelectorAll(".parallax-title");

const scrollProgress = () => {
    atScroll = true;
};

const raf = () => {
    if(atScroll) {
        parallaxTitle.forEach((element, index) => {
            element.style.transform = "translateX(" + window.scrollY / 8 + "%)";
        });
        atScroll = false;
    }
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollProgress);

const links = document.querySelectorAll(".header ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}