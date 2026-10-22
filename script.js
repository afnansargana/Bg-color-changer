//Generate a random color
const randomColor = function(){
    const hexa = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexa[Math.floor(Math.random() * 16)];  
    }
    return color;
};

//Change background color every second
function changeBgcolor() {
    document.body.style.backgroundColor = randomColor();
}
let colorChange;
//Start button changing background color
document.querySelector('#start').addEventListener("click", function(){
    if (!colorChange) {
        colorChange=setInterval(changeBgcolor, 1000);
    }
})
//Stop button changing background color
document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(colorChange);
    colorChange = null;
})