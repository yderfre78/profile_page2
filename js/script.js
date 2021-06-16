const navBtn = document.querySelector('#navbar_toggler');
const navDiv = document.querySelector('.navbar_collapse');

navBtn.addEventListener('click', ()=>{
navDiv.classList.toggle('showNav')
});

let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize_animation_stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
        document.body.classList.remove
        ('resize_animation_stopper');
    }, 400)
})