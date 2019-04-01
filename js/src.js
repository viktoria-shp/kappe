var iconContactOpen = document.querySelectorAll('.contact__icon')[0];
iconContactOpen.addEventListener('click', function(){
    let className = document.querySelectorAll('.contact-info')[0]
    console.log(className);
    className.classList.toggle('active')
})