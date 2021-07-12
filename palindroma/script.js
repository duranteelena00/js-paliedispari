/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//Placeholders
var wordPlaceholder = document.getElementById("enteredWord")
var resultPlaceholder = document.getElementById("result")

//Functions
function isPalindroma(word, reverseWord) {
  reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return true;
  }
}

//Get a word from the user
do {
  var userWord = prompt("Inserisci una parola", "anna").toLowerCase().trim();
  //Validation
} while (!userWord);

//Print the output
wordPlaceholder.innerText = "Hai inserito la parola " + "'" + userWord + "'";

// Check the result and print an appropriate message
if (isPalindroma(userWord)) {
    resultPlaceholder.innerText = "La parola inserita è palindroma";
} else {
    resultPlaceholder.innerText = "La parola inserita non è palindroma";
}
