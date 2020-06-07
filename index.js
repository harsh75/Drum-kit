//what to do , when click detected
// document.querySelector("button").addEventListener("click",function () {
//   alert("I got clicked");
// });
// above code will select the first button only

// // SIMILAR WORK AS ABOVE BUT ABOVE WE USE THE FUNCTION AANONYMOUSLY I.E WITHOUT NAME
// document.querySelector("button").addEventListener("click" , handclick);
// // first button will be selected by this           event   ,  listner i.e. javascript function
//  function handclick(){
//   alert("I  got Clicked");
// }


// TO DO THE ABOVE TASK FOR ALL THE BUTTONS

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// // to get the total no of BUTTONS (its better than counting the number of button)
//
// for(var i = 0; i < numberOfDrumButtons; i++){
//   // AS THE ARRAY ASTARTS FROM 0 ANDnumberofdrumbuttons to include all the buttons
// document.querySelectorAll("button")[i].addEventListener("click",function () {
//   // all to select all buttons , [i] that will follow the loop
//   // alert("I got clicked");
//       // this.style.color="white";
//       // this will access the element and can change and also give info about that
//
//    var buttonInnerHTML = this.innerHTML;
//    //to get the inner html of every ANDnumberofdrumbuttons
//
//    switch (buttonInnerHTML) {
//      case "w":
//        var tom1 = new Audio('sounds/tom-1.mp3');
//        tom1.play();
//        // this is how we can play the sound in our website 'url of the sound'
//        break;
//
//        case "a":
//          var tom2 = new Audio('sounds/tom-2.mp3');
//          tom2.play();
//          break;
//
//          case "s":
//            var tom3 = new Audio('sounds/tom-3.mp3');
//            tom3.play();
//            break;
//
//            case "d":
//              var tom4 = new Audio('sounds/tom-4.mp3');
//              tom4.play();
//              break;
//
//              case "j":
//                var snare = new Audio('sounds/snare.mp3');
//                snare.play();
//                break;
//
//                case "k":
//                  var crash = new Audio('sounds/crash.mp3');
//                  crash.play();
//                  break;
//
//                  case "l":
//                    var kick = new Audio('sounds/kick-bass.mp3');
//                    kick.play();
//                    break;
//      default:
//
//    }
//
// });
// }
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
// this is how we can play the sound in our website 'url of the sound'



var numberOfDrumButtons = document.querySelectorAll(".drum").length;
// to get the total no of BUTTONS (its better than counting the number of button)

for(var i = 0; i < numberOfDrumButtons; i++){
  // AS THE ARRAY ASTARTS FROM 0 ANDnumberofdrumbuttons to include all the buttons
document.querySelectorAll("button")[i].addEventListener("click",function () {
  // all to select all buttons , [i] that will follow the loop
  // alert("I got clicked");
      // this.style.color="white";
      // this will access the element and can change and also give info about that

   var buttonInnerHTML = this.innerHTML;
   //to get the inner html of every ANDnumberofdrumbuttons

makeSound(buttonInnerHTML);
//adding sound

buttonAnimation(buttonInnerHTML);
//adding animation
  });
}

//detecting key press

document.addEventListener("keypress" , function(event){

  makeSound(event.key);
  // adding sounds to press

  buttonAnimation(event.key);
  //adding animation to press
});


function makeSound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      // this is how we can play the sound in our website 'url of the sound'
      break;

      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;

          case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

            case "j":
              var snare = new Audio('sounds/snare.mp3');
              snare.play();
              break;

              case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

                case "l":
                  var kick = new Audio('sounds/kick-bass.mp3');
                  kick.play();
                  break;
    default: console.log("no such button found");
    //optional to write anything in default

  }
}


function buttonAnimation(currentKey){

  var activebutton = document.querySelector("." + currentKey);

  activebutton.classList.add("pressed");
  //pressed style is mentioned in the css file

  setTimeout(function(){

    activebutton.classList.remove("pressed");},100);
    // 100 is in nanoseconds

}
