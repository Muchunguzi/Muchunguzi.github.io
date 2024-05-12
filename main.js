window.onload = function(){
    let menu_btn = document.querySelector('.hamburger');
    let mobile_nav = document.querySelector('.mobile-menu');

    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');
    })
}

   