function abrirModalDeCargue(msg = "Procesando... espera un toque 😎") {
  $("#loadingModalMessage").text(msg);
  const modalEl = document.getElementById('loadingModal');
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl, {
    backdrop: 'static',
    keyboard: false
  });
  modal.show();
  document.body.classList.add("blurred");
}

/* 
function cerrarModalDeCargue() {
  const modalEl = document.getElementById('loadingModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
  document.body.classList.remove("blurred");
}
 */

function cerrarModalDeCargue() {
  const modalEl = document.getElementById('loadingModal');
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.hide();
  document.body.classList.remove("blurred");
}
