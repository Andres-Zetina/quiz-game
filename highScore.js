// var scores = []

// for (var i = 0; i < localStorage.length; i++) {
//     var key = localStorage.key(i);
//     if (key.startsWith("score")) {
//         var value = localStorage.getItem(key);
//         scores.push(value);
//         console.log(scores)
//     }
// }

// scores.sort(function(a, b){
//     return Number(a) - Number(b);

// });

// var list = document.getElementById("scores"); 
// console.log(list)
// if (list){
//     for (var i = 0; i < scores.length; i++ ){
//         var item = document.createElement("li");
//         item.appendChild(document.createTextNode(scores[i]));
//         list.appendChild(item);
//     }
// }
// retrieve scores from local storage
var storedScores = localStorage.getItem("scores");

// parse the scores from the stored string
var scores = JSON.parse(storedScores);

// get the element
var list = document.getElementById("scores");

// append the scores to the element
for (var i = 0; i < scores.length; i++) {
  var item = document.createElement("li");
  item.appendChild(document.createTextNode(scores[i]));
  list.appendChild(item);
}

function clearScores(){
    localStorage.removeItem("score");
    var list = document.getElementById("scores");
    list.innerHTML = ""; 
    console.clear();
}
var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearScores);
clearButton.addEventListener("click", function(){
    sessionStorage.clear();

    var list = document.getElementById("scores");
    while(list.firstChild) {
        list.removeChild(list.firstChild);
    }
});


