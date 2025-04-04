// Hover Event
const hoverButton = document.getElementById('hoverButton');
const hoverMessage = document.getElementById('hoverMessage');

hoverButton.onmouseover = function(){
    hoverMessage.textContent = "You are hovered over this message!";

};

hoverButton.onmouseout = function(){
    hoverMessage.textContent = "";

};

//Keyboard Event
const keyboardInput = document.getElementById('key');
const keyDisplay = document.getElementById('keyDisplay');

keyboardInput.addEventListener('keyup', function(a){
    keyDisplay.textContent = a.key;
});
