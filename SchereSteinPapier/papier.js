// 0 Schere
// 1 Stein
// 2 Papier

let userSelection = -1;
let computerSelection = -1;

function playerClicked1() {
    let image = document.getElementById("Bild").innerHTML;
    document.getElementById("scissor").innerHTML = image;
    userSelection = 0;
    computerPlay();
}

function playerClicked2() {
    let image = document.getElementById("Bild2").innerHTML;
    document.getElementById("stone").innerHTML = image;
    userSelection = 1;
    computerPlay();
}

function playerClicked3() {
    let image = document.getElementById("Bild3").innerHTML;
    document.getElementById("paper").innerHTML = image;
    userSelection = 2;
    computerPlay();
}

function computerPlay(){
    console.log("")
    let random = Math.random() * 2
    computerSelection = Math.round(random);
   
    let Stonescissorpaper = [document.getElementById("Bild").innerHTML, document.getElementById("Bild2").innerHTML, document.getElementById("Bild3").innerHTML ] 
    let ergebniss = Stonescissorpaper[computerSelection]
    let ausgabe1 = ergebniss
    let ausgabe2 = document.getElementById("Ausgabe").innerHTML = ausgabe1;
    checkWinner();
}

function checkWinner(){
    if (userSelection==0 && computerSelection==0){
        document.getElementById("Ergebnis"). innerHTML = "Unetschieden"
    }
    if (userSelection==0 && computerSelection==1){
        document.getElementById("Ergebnis"). innerHTML = "Loser"
    }
    if(userSelection==0 && computerSelection==2){
        document.getElementById("Ergebnis"). innerHTML = "Winner"
    }
    if (userSelection==1 && computerSelection==0){
        document.getElementById("Ergebnis"). innerHTML = "Winner"
    }
    if (userSelection==1 && computerSelection==1){
        document.getElementById("Ergebnis"). innerHTML = "Unetschieden"
    }
    if(userSelection==1 && computerSelection==2){
        document.getElementById("Ergebnis"). innerHTML = "Loser"
    }
    if (userSelection==2 && computerSelection==0){
        document.getElementById("Ergebnis"). innerHTML = "Loser"
    }
    if (userSelection==2 && computerSelection==1){
        document.getElementById("Ergebnis"). innerHTML = "Winner"
    }
    if(userSelection==2 && computerSelection==2){
        document.getElementById("Ergebnis"). innerHTML = "Unetschieden"
    }
    
}

function playerClickedrestart(){
    location.reload();

}


//es funktioniert
//randomzahlen müssen deffiniert groß sein
//bilder müssen aus dem html rausgeholt werden und im css verstekt werden mit display none