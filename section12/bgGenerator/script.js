//Set variables
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var direction = document.querySelectorAll("input[name='direction']");
console.log(direction);

//Description: This function updates the background style on the body and outputs the new value to the screen
//Arguments: None
function updateBGColor(){
    body.style.background = 
    "linear-gradient(to " 
    + updateGradientDirection()
    + ", " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

function updateGradientDirection(){
    return document.querySelector("input[name='direction']:checked").value;
}

//Add event listeners to input boxes
color1.addEventListener("input", updateBGColor);
color2.addEventListener("input", updateBGColor);
for(var i = 0; i < direction.length; i++){ 
    direction[i].addEventListener("input", updateBGColor);
    }
