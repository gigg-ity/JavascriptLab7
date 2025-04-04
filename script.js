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

const form = document.getElementById('form');
const formMesssage = document.getElementById('formMesssage');
form.onsubmit = function(a){
    a.preventDefault();
    formMessage.textContent = "Form submitted";
};
const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.onfocus = function(){
    focusMsg.textContent = "Input focused";

};
focusInput.onblur = function(){
    focusMsg = "Not focused";
};

const eventDele = document.getElementById('delegationButton');
const clickMessage = document.getElementById('clickMessage');

buttonContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'button'){
        alert('You clicked: ' + event.target.textContent);
    });
