document.addEventListener("DOMContentLoaded", function () {

  const tblPorHacer = initTabulator("#tblPorHacer", [
    { title: "id", field: "id"},
    { title: "Area", field: "Area"},
    { title: "Tarea / Fecha limite", field: "Tarea / Fecha limite" },
    { title: "Estado", field: "Estado", editor: "list", editorParams: {
      values: { // Opciones del select
          "1": "Por Hacer",
          "2": "En Progreso",
          "3": "Completo",
          "4": "Congelado"
      }
  }},
  ],false);

  const tblProgreso = initTabulator("#tblProgreso", [
    { title: "id", field: "id" },
    { title: "Area", field: "Area"},
    { title: "Tarea / Fecha limite", field: "Tarea / Fecha limite" },
    { title: "Estado", field: "Estado", editor: "list", editorParams: {
      values: { // Opciones del select
          "1": "Por Hacer",
          "2": "En Progreso",
          "3": "Completo",
          "4": "Congelado"
      }
  }},
  ],false);

  const tblCompleto = initTabulator("#tblCompleto", [
    { title: "id", field: "id" },
    { title: "Area", field: "Area" },
    { title: "Tarea / Fecha limite", field: "Tarea / Fecha limite" },
    { title: "Estado", field: "Estado", editor: "list", editorParams: {
      values: { // Opciones del select
          "1": "Por Hacer",
          "2": "En Progreso",
          "3": "Completo",
          "4": "Congelado"
      }
  }},
  ],false);

  const tblCongelado = initTabulator("#tblCongelado", [
    { title: "id", field: "id" },
    { title: "Area", field: "Area" },
    { title: "Tarea / Fecha limite", field: "Tarea / Fecha limite" },
    { title: "Estado", field: "Estado", editor: "list", editorParams: {
      values:[
        {
            label:"Por Hacer",
            value:"1",
        },
        {
          label:"En Progreso",
          value:"2",
        },
        {
          label:"Completo",
          value:"3",
        },
        {
          label:"Congelado",
          value:"4",
        },
    ]
  }},
  ],false);
  

});
