document.getElementsByClassName('container')[0].style.display = "block";

function next(id){
  document.getElementsByClassName('container')[id-1].style.display = "none";
  document.getElementsByClassName('container')[id].style.display = "block";
}

function result(){
  var score = 0;
  if(document.getElementById('correct1').checked) {
    score++;
  }
  if(document.getElementById('correct2').checked) {
    score++;
  }
  if(document.getElementById('correct3').checked) {
    score++;
  }
  return score;
}

var modal = document.getElementById("resultado");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var resultText = document.getElementById("resultText");

btn.onclick = function() {
  var score = result();
  var resultado = "Sua pontuação é: " + score;

  resultText.textContent = resultado;
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





