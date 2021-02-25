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
     })
})

function toggle() {
    menuBtn.classList.toggle('open');
    menuItems.classList.toggle('open');
}


    // const link = document.querySelector('.main-text');
document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
});

    // const animate = function (e) {
    //     const span = this.querySelector('span');
    //     const { offsetX: x, offsetY: y } = e,
    //     { offsetWidth: width, offsetHeight: height } = this,

    //     move = 25,
    //     xMove = x/width * (move * 2) - move,
    //     yMove = y/heigh * (move * 2) - move;

    //     span.style.transform = translate(${xMove}px, ${yMove}px);

    //     if (e.type === 'mouseleave') span.style.transform = '';
    // };

    // const editCursor = e => {
    //     const { clientX: x, clientY: y } = e;
    //     cursor.style.left = x + 'px';
    //     cursor.style.top = y + 'px';
    // };

    // link.forEach(b => b.addEventListener('mousemove', animate));
    // link.forEach(b => b.addEventListener('mouseleave', animate));
    // window.addEventListener('mousemove', editCursor);
