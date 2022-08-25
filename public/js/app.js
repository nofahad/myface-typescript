// document.addEventListener("DOMContentLoaded", function () {
    
// });

// const colourChangeButton = document.getElementById('Change-Colour');
const postBackground = document.getElementsByTagName('ul')

// colourChangeButton.addEventListener('click', function() {
//   postBackground.color = "rgb(220, 20, 60)";
// });

function changeColourOnClick() {
    for (let i = 0; i < postBackground.length; i++) {
    postBackground[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
};

const mobileMenu = document.getElementsByClassName("MobileMenu")
const closeMenuButton = document.getElementsByClassName("CloseMenuButton")
console.log(closeMenuButton)

function openMobileMenu() {
    mobileMenu[0].style.display = 'block'
    closeMenuButton[0].style.display = 'block'
}

function closeMobileMenu() {
  mobileMenu[0].style.display = 'none'
  closeMenuButton[0].style.display = 'none'
}