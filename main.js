var number = 0;
var game = "";
function randomGame(){
    number = Math.floor(Math.random() * 3);
    if(number == 0){
        game = "Rayman";
        console.log(game);
    } else if(number == 1){
        game = "Destroy all humans";
        console.log(game);
    } else if(number == 2){
        game = "Tomb raider";
        console.log(game);
    }
    document.getElementById("game").innerHTML = game;
    document.getElementById("asdf").innerHTML = "The game is";
    const button = document.getElementById("okbutton");
    button.disabled = false;
    const button2 = document.getElementById("randomgamebutton");
    button2.disabled = true;
}
function OK(){
    game = "";
    const button = document.getElementById("okbutton");
    button.disabled = true;
    const button2 = document.getElementById("randomgamebutton");
    button2.disabled = false;
    document.getElementById("game").innerHTML = game;
    document.getElementById("asdf").innerHTML = "";
}