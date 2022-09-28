function accion() {
  let ancla = document.getElementsByClassName("nav-a");
  for (let i = 0; i < ancla.length; i++) {
    ancla[i].classList.toggle("desaparece");
  }
}
