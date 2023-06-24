window.addEventListener('load', () =>{
 const sounds = document.querySelectorAll('.sound');
 const pads =document.querySelectorAll(".pads div");
 const visual = document.querySelector('.visual');
 const colors =[
    "#0ef5a8",
    "#db340a",
    "#4343f4",
    "#545454",
    "#642eca",
    "#121212"
 ]
//lets add the sound now
pads.forEach((pad, index) =>{
pad.addEventListener("click", function(){
    sounds[index].currentTime=0; 
sounds[index].play();

createBubbles(index);
});
});
//create a function that creates bubbles
const createBubbles = (index) => {
    const bubble= document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";

}
});
