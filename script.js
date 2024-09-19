// Write your solution here

// Task 1 - Adding Event Listeners

// selecting the button by it's Id
const button = document.getElementById("clickMe");
document.addEventListener("click", function () {
  console.log("Button is clicked");
});

// Task 2 - Mouse Events

const button1 = document.getElementById("clickMe");
button.addEventListener("mouseenter", function (e) {
  console.log("Mouse entered the button", e);
});

button.addEventListener("mouseleave", function (e) {
  console.log("Mouse left the button", e);
});

// Task 3 - Removing Event Listeners

const buttonOnce = document.getElementById("clickMeOnce");



/*function handleClick() {
  console.log("Button is clicked");
  buttonOnce.removeEventListener("click", handleClick);
}

buttonOnce.addEventListener("click", handleClick);*/

function holdButton(){
    console.log("button is clicked!!");
    button1.removeEventListener('click',holdButton);
}
button1.addEventListener('click',holdButton);

// Task 4 - Listening to Browser Events

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded");
});
