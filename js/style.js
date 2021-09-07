addEventListener('scroll', (event) => {

    const style = document.querySelector('.header-container').style;

    console.log(window.scrollY);

    if(window.scrollY > 1) {
        style.backgroundColor = 'var(--background-color)';
        style.transition = '.4s';
    } else {
        style.backgroundColor = 'transparent';
        style.transition = '.6s';
    }

    if(window.scrollY >= 350) {
        if(!video.paused) {
            pause();
        }
    }

});