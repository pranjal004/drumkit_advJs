 // getting info
var name= prompt("Enter your name");
var firstChar= name.slice(0,1);
var upper= firstChar.toUpperCase();
var rest= name.slice(1, name.length);
// var rname= firstChar + rest;
alert("Hello! "+ upper + rest + " ,Play well!");

// adding event listener
var noofButtons= document.querySelectorAll(".drum").length;
for(var i=0; i<noofButtons; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

var buttonInnerHTML= this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}

// keyboard presses
document.addEventListener("keypress", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

// make sound
function makeSound(key)
{
  switch (key) {
    case "w":var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
             break;
    case "a":var audio = new Audio('sounds/tom-2.mp3');
             audio.play();
             break;

    case "s":var audio = new Audio('sounds/tom-3.mp3');
             audio.play();
             break;

    case "d":var audio = new Audio('sounds/tom-4.mp3');
             audio.play();
             break;

    case "j":var audio = new Audio('sounds/snare.mp3');
             audio.play();
             break;

    case "k":var audio = new Audio('sounds/crash.mp3');
             audio.play();
             break;

    case "l":var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
             break;
    case "e": var audio = new Audio('sounds/exit.wav');
             audio.play();
             audio.classList.add("game-over");
             break;

    default:console.log(key);

  }

}

function buttonAnimation(currentkey)
{
var activeButton = document.querySelector("." + currentkey);

activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 1000);

}
