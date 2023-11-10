//Test out console to make sure its linked to HTML file.
// console.log("Drums"); - works

// When a kbd letter is seletced the js should play an audio.
//create an array of the letters that we want to target when selcted.
// var drumKey = ["65", "83", "68", "70", "71", "72", "74", "75", "76"]; //data key to corrspond to audio.

// //when one of the keys in the array is pressed an audio will be played. You can use an Event onkeydown to perform the action.
// onkeydown(drumKey) = document.addEventListener{
// audio
// }

//create an event audio when a key in the array is selected.



//

// At the same time when key entered and playing an audio the letter in corrspondance should pop up a little with a boarder orenge.

//Watched the video and followed the code tutorial..

window.addEventListener("keydown", function(e){
// console.log(e);
var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
// console.log(audio);
// this works but not sure why keycode is crossed out and I dont quite understand the $ sign and what it does?
var key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
console.log(key);
if(!audio) return; // stops function from running when a irelavant key is selected.
audio.currentTime  = 0; // why is this function not after you play the audio?
audio.play();

//trainsion colour of key to pop out
key.classList.add('playing');
// setTimeout(function() {
    
// }, 0.07); - best practice you wouldnt use this funtion in case another devloper changes the timer in the CSS of the transition period
function removeTransition(e){
    // console.log(e);
if(e.propertyName !== "transform") return;
// console.log(e.propertyName);
this.classList.remove("playing");
}

var keys = document.querySelectorAll(".key");
key.forEach(key => key.addEventListener('transitonend', removeTransition));
this.window.addEventListener("keydown", playSound);

});