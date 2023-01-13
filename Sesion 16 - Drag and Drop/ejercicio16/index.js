const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.getElementById("papelera");

parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
    const elemento_fantasma = document.querySelector(".imagen-fantasma");
    event.dataTransfer.setDragImage(elemento_fantasma, 50, 50);
  });

  parrafo.addEventListener("dragend", () => {
    parrafo.classList.remove("dragging");
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "link";
  });

  seccion.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id");
    const parrafo = document.getElementById(id_parrafo);
    seccion.appendChild(parrafo);
  });
});

papelera.addEventListener("dragover", (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "link";
});

papelera.addEventListener("drop", (event) => {
  const id_parrafo = event.dataTransfer.getData("id");
  const parrafo = document.getElementById(id_parrafo);
  papelera.appendChild(parrafo);
  papelera.removeChild(parrafo);
  console.log("drop");
});
