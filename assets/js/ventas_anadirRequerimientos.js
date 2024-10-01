//INICIO AL CARGAR LA PAGINA
$(document).ready(async function(){

    //Creamos las tablas
    var tblCliente = initTabulator('#tblCliente', [
        { title: "TRAZA", field: 'TRAZA' },
        { title: "Nombre", field: 'Nombre' },
        { title: "RUC", field: "RUC" },
        { title: "Telefono", field: "Telefono"},
        { title: "Pagina Web", field: "Pagina Web" },
        { title: "Forma de Pago", field: "Forma de Pago" },
        { title: "Condiciones de la Entrega", field: "Condiciones de la Entrega", visible:false},
        { title: "Favorito", field: "Favorito" },
        { title: "Adjunto", field: "Adjunto" },
        { title: "Ediciones", field: "Ediciones", visible: false },
    ],true,1,null,null,null,null,null,null,"modal-cliente-editar");
    
    var tblDireccion = initTabulator('#tblDireccion',[
        { title: "TRAZA", field:"TRAZA"},
        { title: "Nombre de lugar", field:"Nombre de lugar", editor:"input"},
        { title: "Direccion", field:"Direccion", editor:"input" },  
        { title: "Departamento", field:"Departamento", editor:"input"},
        { title: "Requisitos de ingreso", field:"Requisitos Ingreso Local", visible: false },
        { title: "Horario de atención", field:"Horario de atencion", visible: false },
        { title: "Ediciones", field:"Ediciones", visible: false },
    ],true,1);

    var tblContactos = initTabulator('#tblContacto',[
        { title: "Empresa", field: 'Empresa', editor:"input"},
        { title: "Nombre", field: 'Nombre', editor:"input"},
        { title: "Apellido", field: 'Apellido', editor:"input"},
        { title: "Celular", field: 'Celular', editor:"input"},
        { title: "Email", field: 'Email', editor:"input"},
        { title: "TRAZA", field: 'TRAZA', },
        { title: "Ediciones", field: 'Ediciones', visible: false},
    ],false,1);

    const tblPlanilla = initTabulator('#tblPlanilla', [
        { title: "Producto Solicitado", field: "Producto", editor:"input" },  
        { title: "Categoria", field: "Categoria",editor: "list", editorParams:{
            values:{
                "Químicos":"Químicos",
                "Miscelaneos":"Miscelaneos",
                "Oficina - Muebles":"Oficina - Muebles",
                "Mantenimiento":"Mantenimiento",
                "Herramientas":"Herramientas",
                "Plasticos":"Plasticos",
                "Limpieza":"Limpieza",
                "Electricos":"Electricos",
                "Seguridad Industrial":"Seguridad Industrial",
                "Cámara":"Cámara",
                "Sillas":"Sillas",
                "Instrumento de medicion":"Instrumento de medicion",
                "Bomba":"Bomba",
                "Empaque y embalajes":"Empaque y embalajes",
                "Antiderrame":"Antiderrame",
                "Botiquin":"Botiquin",
                "Merchandising":"Merchandising",
                "Caja de Cartón":"Caja de Cartón",
                "Soldadura":"Soldadura",
                "Cafeteria":"Cafeteria",
                "Delivery":"Delivery",
                "Campamento":"Campamento",
                "Mochilas":"Mochilas",
                "GARRUCHAS":"GARRUCHAS",
                "Laboratorio":"Laboratorio",
                "Aire Acondicionado":"Aire Acondicionado",
                "Utiles de oficina":"Utiles de oficina",
                "ESCALERAS":"ESCALERAS",
                "Pallets":"Pallets",
                "Metalmecánico":"Metalmecánico",
            }
        }},
        { title: "Marca", field: "Marca", editor:"input" },
        { title: "Modelo", field: "Modelo", editor:"input" },
        { title: "U. Medida", field: "Medida", editor: "list", editorParams:{
            values:{
                "Unidad":"Unidad",
                "Bolsa":"Bolsa",
                "Caja":"Caja",
                "Ciento":"Ciento",
                "Galón":"Galón",
                "Kilogramo":"Kilogramo",
                "Litro":"Litro",
                "Par":"Par",
                "Rollo":"Rollo",
                "Paquete":"Paquete",
                "Gramos":"Gramos",
            }
        }},
        { title: "Cantidad", field: "Cantidad", editor:"input" },   
        { title: "Grupo", field: "Grupo", editor:"input" },
    ]);
})