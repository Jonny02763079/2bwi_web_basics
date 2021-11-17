let random = Math.random () * 28
let random2 = Math.random () * 28
let randomround2 = Math.round (random2);
let randomround = Math.round (random);
console.log (randomround)
console.log (randomround2)







let cleaners = ["Aksoy Zeki","Batkhuyag Tamir","Beirer Mathias","Brandner Moritz","Dur Turan","Ehe Immanuel","Felder Ian","Gasharov Rangel","Goldmann Timothe","Grabherr Luca","Grkovic Matej","Gruschin Maksim","Höppberger Noah","Kostmann Ronny","Kronabitter Jonas","Manasek Luca","Muscalu Mihai","Nigg Jonas","Nizic Dominik","Platter Fabian","Rapp Simon","Riedmann Noel","Scheffknecht Santiago","Stesl Noah","Theiner Nicolas","Türtscher Daniel","Wurmitzer Noel","Zechner Diego"];

let nameOfCleanerElement = document.getElementById ("nameOfCleaner1");


let outputText = "Tafeldienst hat " + cleaners[randomround] + " und " + cleaners[randomround2]

nameOfCleanerElement.innerHTML = outputText;
console.log(randomround2 + randomround);