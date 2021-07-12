/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Bonus:
Aggiungere la validazione dove ritenuto necessario.
Stampare in pagina anzichè in console.
*/

//Placeholders
var choicePlaceholder = document.getElementById("choice");
var userNumberPlaceholder = document.getElementById("first-num");
var randomNumberPlaceholder = document.getElementById("second-num");
var resultPlaceholder = document.getElementById("result");

//Utils Functions
function getRandomNumber() {
  var number = Math.floor(Math.random() * 5 + 1);
  return number;
}
function isEven(number1, number2) {
  var sum = number1 + number2;
  if (sum % 2 === 0) {
    return true;
  }
}

//Get a choice and a number from the user
do {
  var userChoice = prompt("pari o dispari?", "pari").toLowerCase().trim();
  var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5", 1));
  //Validation
} while (
  (userChoice !== "pari" && userChoice !== "dispari") ||
  typeof userNumber !== "number" || userNumber < 1 || userNumber > 5
);

//Get a number for the AI
var randomNumber = getRandomNumber();

//Print the outputs
choicePlaceholder.innerText = "Hai scelto: " + userChoice;
userNumberPlaceholder.innerText = "Hai inserito il numero " + userNumber;
randomNumberPlaceholder.innerText = "L'intelligenza artificiale ha generato il numero " + randomNumber;

//Check the result and print an appropriate message
if (isEven(userNumber, randomNumber)) {
  resultPlaceholder.innerText = "Hai vinto";
} else {
  resultPlaceholder.innerText = "L'intelligenza artificiale ha vinto";
}
