function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/Hamburger_icon.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/x.png";
    }
}

function down(){
    document.body.scrollTop = 2;
    document.documentElement.scrollTop = 2;
}