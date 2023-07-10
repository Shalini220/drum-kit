var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i =0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].
    addEventListener("click", function(){
        var buttonInnerHtml=this.innerHtml;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("Keypress", 
function(event) {
        makeSound(event.key);
        buttonAnimation(event.key);
});
function makeSound(key){
    switch(key){
        case "w":
        var drum1=new Audio("sounds/drum1.wav");
        drum1.play();
        break;
        
        case "a":
        var drum2=new Audio("sounds/drum2.wav");
        drum2.play();
        break;

        case "s":
        var drum3=new Audio("sounds/drum3.wav");
        drum3.play();
        break;

        case "d":
        var drum4=new Audio("sounds/drum4.wav");
        drum4.play();
        break;

        case "j":
        var jokedrum=new Audio("sounds/jokedrums Audioz.wav");
        jokedrum.play();
        break;

        case "k":
        var knockdrum=new Audio("sounds/knockdrum.wav");
        knockdrum.play();
        break;

        case "i":
        var Losingdrum = new Audio("sounds/Losingdrum.wav");
        Losingdrum.play();
        break;

        default:console.log(key);
            
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentkey);
     activeButton.classList.add("pressed");

     setTimeout(function(){
        activeButton.classList.remove("pressed");

     },100);
}

