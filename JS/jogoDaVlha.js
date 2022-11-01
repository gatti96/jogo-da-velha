const main = document.querySelector("main");
let vez = document.getElementById("vez");
let valorJogo = "";
let matriz = [[], [], []];

window.addEventListener("DOMContentLoaded", function () {
  //este evento inicio o site com o cursor no input
  document.querySelector("input[name='jogadorum']").focus();
});

document.getElementById("tema").addEventListener("click", function () {
  /*alterar tema de fundo */
  if (main.dataset.theme === "light") {
    document.body.style.setProperty("--bg-color", "#000");
    document.body.style.setProperty("--color-text", "#fff");
    main.dataset.theme = "dark";
  } else {
    document.body.style.setProperty("--bg-color", "#fff");
    document.body.style.setProperty("--color-text", "#000");
    main.dataset.theme = "light";
  }
});

let jogador1 = "";
let jogador2 = "";

const form = document.getElementById("formplay");

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  jogador1 = document.querySelector("input[name='jogadorum']").value;
  jogador2 = document.querySelector("input[name='jogadordois']").value;
  document.getElementById("formulario").style.display = "none";
  vez.value = jogador1 + " sua vez!";
});

// criando a função ao clicar no quadrado do jogo

const button = document.querySelectorAll(".btnPlay");
button.forEach((btnPlay) =>
  btnPlay.addEventListener("click", function () {
    if (vez.value === jogador1 + " sua vez!") {
      valorJogo = "X";
      const criarInput = document.createElement("input");
      criarInput.className = "input-jogo";
      criarInput.name = "jogo";
      criarInput.type = "text";
      criarInput.disabled = true;
      criarInput.value = valorJogo;
      btnPlay.appendChild(criarInput);

      if (btnPlay.classList.contains("item-1")) {
        matriz[0][0] = valorJogo;
      } else if (btnPlay.classList.contains("item-2")) {
        matriz[0][1] = valorJogo;
      } else if (btnPlay.classList.contains("item-3")) {
        matriz[0][2] = valorJogo;
      } else if (btnPlay.classList.contains("item-4")) {
        matriz[1][0] = valorJogo;
      } else if (btnPlay.classList.contains("item-5")) {
        matriz[1][1] = valorJogo;
      } else if (btnPlay.classList.contains("item-6")) {
        matriz[1][2] = valorJogo;
      } else if (btnPlay.classList.contains("item-7")) {
        matriz[2][0] = valorJogo;
      } else if (btnPlay.classList.contains("item-8")) {
        matriz[2][1] = valorJogo;
      } else if (btnPlay.classList.contains("item-9")) {
        matriz[2][2] = valorJogo;
      }
      vez.value = jogador2 + " sua vez!";
    } else if (vez.value === jogador2 + " sua vez!") {
      valorJogo = "O";
      const criarInput = document.createElement("input");
      criarInput.className = "input-jogo";
      criarInput.name = "jogo";
      criarInput.type = "text";
      criarInput.value = valorJogo;
      criarInput.disabled = true;
      btnPlay.appendChild(criarInput);

      if (btnPlay.classList.contains("item-1")) {
        matriz[0][0] = valorJogo;
      } else if (btnPlay.classList.contains("item-2")) {
        matriz[0][1] = valorJogo;
      } else if (btnPlay.classList.contains("item-3")) {
        matriz[0][2] = valorJogo;
      } else if (btnPlay.classList.contains("item-4")) {
        matriz[1][0] = valorJogo;
      } else if (btnPlay.classList.contains("item-5")) {
        matriz[1][1] = valorJogo;
      } else if (btnPlay.classList.contains("item-6")) {
        matriz[1][2] = valorJogo;
      } else if (btnPlay.classList.contains("item-7")) {
        matriz[2][0] = valorJogo;
      } else if (btnPlay.classList.contains("item-8")) {
        matriz[2][1] = valorJogo;
      } else if (btnPlay.classList.contains("item-9")) {
        matriz[2][2] = valorJogo;
      }
      vez.value = jogador1 + " sua vez!";
    }
    verificarVencedor();
  })
);

function verificarVencedor() {
  if (
    (matriz[0][0] === "X") &
    (matriz[1][1] === "X") &
    (matriz[2][2] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-1").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-9").style.backgroundColor = "red";
  } else if (
    (matriz[0][2] === "X") &
    (matriz[1][1] === "X") &
    (matriz[2][0] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-3").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-7").style.backgroundColor = "red";
  } else if (
    (matriz[0][0] === "X") &
    (matriz[1][0] === "X") &
    (matriz[2][0] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-1").style.backgroundColor = "red";
    document.querySelector(".item-4").style.backgroundColor = "red";
    document.querySelector(".item-7").style.backgroundColor = "red";
  } else if (
    (matriz[0][1] === "X") &
    (matriz[1][1] === "X") &
    (matriz[2][1] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-2").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-8").style.backgroundColor = "red";
  } else if (
    (matriz[0][2] === "X") &
    (matriz[1][2] === "X") &
    (matriz[2][2] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-3").style.backgroundColor = "red";
    document.querySelector(".item-6").style.backgroundColor = "red";
    document.querySelector(".item-9").style.backgroundColor = "red";
  } else if (
    (matriz[0][0] === "X") &
    (matriz[0][1] === "X") &
    (matriz[0][2] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-1").style.backgroundColor = "red";
    document.querySelector(".item-2").style.backgroundColor = "red";
    document.querySelector(".item-3").style.backgroundColor = "red";
  } else if (
    (matriz[1][0] === "X") &
    (matriz[1][1] === "X") &
    (matriz[1][2] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-4").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-6").style.backgroundColor = "red";
  } else if (
    (matriz[2][0] === "X") &
    (matriz[2][1] === "X") &
    (matriz[2][2] === "X")
  ) {
    alert(jogador1 + " venceu");
    vez.value = jogador1 + " venceu!";
    document.querySelector(".item-7").style.backgroundColor = "red";
    document.querySelector(".item-8").style.backgroundColor = "red";
    document.querySelector(".item-9").style.backgroundColor = "red";
  } else if (
    (matriz[0][0] === "O") &
    (matriz[1][1] === "O") &
    (matriz[2][2] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-1").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-9").style.backgroundColor = "red";
  } else if (
    (matriz[0][2] === "O") &
    (matriz[1][1] === "O") &
    (matriz[2][0] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-3").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-7").style.backgroundColor = "red";
  } else if (
    (matriz[0][0] === "O") &
    (matriz[1][0] === "O") &
    (matriz[2][0] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-1").style.backgroundColor = "red";
    document.querySelector(".item-4").style.backgroundColor = "red";
    document.querySelector(".item-7").style.backgroundColor = "red";
  } else if (
    (matriz[0][1] === "O") &
    (matriz[1][1] === "O") &
    (matriz[2][1] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-2").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-8").style.backgroundColor = "red";
  } else if (
    (matriz[0][2] === "O") &
    (matriz[1][2] === "O") &
    (matriz[2][2] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-3").style.backgroundColor = "red";
    document.querySelector(".item-6").style.backgroundColor = "red";
    document.querySelector(".item-9").style.backgroundColor = "red";
  } else if (
    (matriz[0][0] === "O") &
    (matriz[0][1] === "O") &
    (matriz[0][2] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-1").style.backgroundColor = "red";
    document.querySelector(".item-2").style.backgroundColor = "red";
    document.querySelector(".item-3").style.backgroundColor = "red";
  } else if (
    (matriz[1][0] === "O") &
    (matriz[1][1] === "O") &
    (matriz[1][2] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-4").style.backgroundColor = "red";
    document.querySelector(".item-5").style.backgroundColor = "red";
    document.querySelector(".item-6").style.backgroundColor = "red";
  } else if (
    (matriz[2][0] === "O") &
    (matriz[2][1] === "O") &
    (matriz[2][2] === "O")
  ) {
    alert(jogador2 + " venceu");
    vez.value = jogador2 + " venceu!";
    document.querySelector(".item-7").style.backgroundColor = "red";
    document.querySelector(".item-8").style.backgroundColor = "red";
    document.querySelector(".item-9").style.backgroundColor = "red";
  }
}
