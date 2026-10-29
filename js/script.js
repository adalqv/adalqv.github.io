// 1. Botões "Ver Projeto": mostram um aviso enquanto os projetos não estão prontos
const botoesProjeto = document.querySelectorAll("#projetos button");

botoesProjeto.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const titulo = botao.parentElement.querySelector("h3").textContent;
    alert(titulo + " ainda está em construção. Volte em breve!");
  });
});

// 2. Botão "voltar ao topo": aparece depois de rolar a página
const botaoTopo = document.getElementById("botao-topo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    botaoTopo.classList.add("visivel");
  } else {
    botaoTopo.classList.remove("visivel");
  }
});

botaoTopo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
