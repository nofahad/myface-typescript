// document.addEventListener("DOMContentLoaded", function () {
    
// });

// const colourChangeButton = document.getElementById('Change-Colour');
const postBackground = document.getElementsByTagName('ul')
console.log(postBackground[0]);

// colourChangeButton.addEventListener('click', function() {
//   postBackground.color = "rgb(220, 20, 60)";
// });

function changeColourOnClick() {
    for (let i = 0; i < postBackground.length; i++) {
    postBackground[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  }
};