document.getElementsByClassName('container')[0].style.display = "block";

  let secondsLeft = 15;
  const timer = document.getElementById("timer");
  let countdownTimer;

  function countdown() {
    timer.textContent = "Você tem: " + secondsLeft + " segundos";

    if (secondsLeft === 0) {
      clearInterval(countdownTimer);
      timer.textContent = "Tempo esgotado!";
      // Coloque aqui a ação que deseja tomar quando o tempo acabar, como mostrar o resultado final ou avançar para a próxima questão
      showResult();
    } else {
      secondsLeft--;
    }
  }

  function showResult() {
    const score = result();
    const resultado = "Você fez: " + score + " pontos";

    resultText.textContent = resultado;
    modal.style.display = "block";
  }

  function next(id) {
    clearInterval(countdownTimer);
    secondsLeft = 15;
    countdownTimer = setInterval(countdown, 1000);

    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";
  }

  function result() {
    let score = 0;
    if (document.getElementById('correct1').checked) {
      score++;
    }
    if (document.getElementById('correct2').checked) {
      score++;
    }
    if (document.getElementById('correct3').checked) {
      score++;
    }
    return score;
  }

  const modal = document.getElementById("resultado");
  const btn = document.getElementById("myBtn");
  const span = document.getElementsByClassName("close")[0];
  const resultText = document.getElementById("resultText");

  btn.onclick = function () {
    const score = result();
    const resultado = "Você fez: " + score + " pontos";

    resultText.textContent = resultado;
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  countdownTimer = setInterval(countdown, 1000);

