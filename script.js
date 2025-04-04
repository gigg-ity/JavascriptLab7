// Hover Event
const hoverButton = document.getElementById('hoverButton');
const hoverMessage = document.getElementById('hoverMessage');

hoverButton.onmouseover = function(){
    hoverMessage.textContent = "You are hovered over this message!";

};

hoverButton.onmouseout = function(){
    hoverMessage.textContent = "";

};

//Focus Event