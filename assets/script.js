let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('.section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ' ]').classList
            .add('active');
        })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxRTnrqb85F45e2zf7AH_IQw_Vze4FG6vv6qpnhJ7h6KiXFJ3krqHuBU3ZBA8iELSNR/exec'
const form = document.forms['myForm']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert('Success!'))
        .catch(error => console.error('Error!', error.message))
})