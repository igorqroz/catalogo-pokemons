const botaoAlterarTema = document.querySelector("#botao-altera-tema");
const body = document.querySelector("body");
const alterarImgTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuro = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuro) {
    alterarImgTema.setAttribute("src", "src/img/sun.png");
  } else {
    alterarImgTema.setAttribute("src", "src/img/moon.png");
  }
});
