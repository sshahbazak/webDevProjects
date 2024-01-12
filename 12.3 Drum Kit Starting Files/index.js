var Arr = document.querySelectorAll("button");
// Arr.forEach((i) => i.addEventListener("click", addListener));

for (var i = 0 ; i < Arr.length ; i++){
    Arr[i].addEventListener("click", function (e) {
        handleEvent(e);
        buttonPressed (e.target.textContent);
    })};

document.addEventListener("keydown", function(e) {
    handleEvent(e);
    buttonPressed (e.key);
});

function handleEvent(e){
    var audioFile = '';
    if (e.target.textContent == 'w' || e.key == 'w'){
        AudioFile = "./sounds/tom-1.mp3";
    } else if (e.target.textContent == 'a' || e.key == 'w'){
        AudioFile = "./sounds/tom-2.mp3";
    } else if (e.target.textContent == 's' || e.key == 's'){
        AudioFile = "./sounds/tom-3.mp3";
    } else if (e.target.textContent == 'd' || e.key == 'd'){
        AudioFile = "./sounds/tom-4.mp3";
    } else if (e.target.textContent == 'j' || e.key == 'j'){
        AudioFile = "./sounds/crash.mp3";
    } else if (e.target.textContent == 'k' || e.key == 'k'){
        AudioFile = "./sounds/kick-bass.mp3";
    } else if (e.target.textContent == 'l' || e.key == 'l'){
        AudioFile = "./sounds/snare.mp3";
    }
    var audio = new Audio(AudioFile);
    audio.play();
}

function buttonPressed (e){

    var activeKey = document.querySelector("."+e);
    activeKey.classList.add("class", "pressed");
    setTimeout(function() {
        activeKey.classList.remove("class", "pressed");
    }, 100)

}