function toggleNav(){
    const navLink = document.getElementById('navLinks');
    navLink.classList.toggle('active')
}

// ACOORDIONS=============
function openModal(){
    const modal = document.getElementById('myModal');
    modal.style.display = 'block'
}
function closeModal(){
    const modal = document.getElementById('myModal');
    modal.style.display = 'none'
}

const accordionButton = document.querySelectorAll('.accordion-button');

accordionButton.forEach((button) =>{
    button.addEventListener('click', function(){
        const content = this.nextElementSibling;
        content.style.display = 
        content.style.display === "block" ? 'none' : 'block';

        this.classList.toggle('active');
    })
})