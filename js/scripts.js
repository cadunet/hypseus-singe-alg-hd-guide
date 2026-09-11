// Insere o ano atual no elemento de ID "year"
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Copia o código .bat para a área de transferência e altera o texto do botão
function copyBatCode() {
  const codeText = document.getElementById("batCode").innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    const btn = document.querySelector(".copy-btn");
    btn.innerText = "Copiado!";
    setTimeout(() => {
      btn.innerText = "Copiar código";
    }, 2000);
  });
}

// Desativa o clique com o botão direito do mouse
document.addEventListener('contextmenu', event => event.preventDefault());

// Bloqueia as teclas F12, Ctrl+U e Ctrl+Shift+I
document.addEventListener('keydown', function (e) {
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
    (e.ctrlKey && e.keyCode === 85)
  ) {
    e.preventDefault();
    return false;
  }
});
