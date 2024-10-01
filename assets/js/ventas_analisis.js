$(document).ready(function() { 


    // Definir tabla de productos en BD cotizaciones de proveedores pertenecientes a esta planilla
    const tblProductosOfrecidos = initTabulator('#tblProductosOfrecidos', [
        { title: "TRAZA", field: "TRAZA" },  
        { title: "Cotizacion", field: "Cotizacion", formatter:"textarea" },  
        { title: "Solicitado", field: "Solicitado", formatter:"textarea" },
        { title: "Descripcion proveedor", field: "Descripcion proveedor", formatter:"textarea"},
        { title: "Marca", field: "Marca" },
        { title: "Modelo", field: "Modelo"},
        { title: "Peso (kg)", field: "Peso (kg)" },
        { title: "Volumen (m3)", field: "Volumen (m3)" },
        { title: "Descripcion cliente", field: "Descripcion cliente" },
        { title: "Dias entrega proveedor", field: "Dias entrega proveedor" },
        { title: "Dias entrega cliente", field: "Dias entrega cliente" },
        { title: "U. Medida", field: "Medida" },
        { title: "Cantidad", field: "Cantidad" },
        { title: "Costo x Unidad SIN IGV en moneda de oferta", field: "Costo x Unidad SIN IGV en moneda de oferta" },
        { title: "Precio Venta x Unidad SIN IGV en moneda de oferta", field: "Precio Venta x Unidad SIN IGV en moneda de oferta" },
        { title: "Link", field: "Link" },
        { title: "Adjunto Ficha Tecnica", field: "Adjunto Ficha Tecnica" },
        { title: "Imagen Referencial", field: "Imagen Referencial" },
    ],true,100,"Solicitado",null,null,null,true,null,null,[{TRAZA:""}]);

    // Definir tabla de productos en BD cotizaciones de proveedores con productos similares
    const tblHistorialProductos = initTabulator("#tblHistorialProductos",[
        { title: "Producto", field: "Marca" },
        { title: "Fecha de registro", field: "fecha" },
        { title: "Precio de venta", field: "precio" },
        { title: "Proveedor", field: "proveedor" },
    ],true);

    // Definir tabla de Ordenes de compra perteneciente a tblHistorial Productos
    const tblOCs = initTabulator("#tblOCs",[
        { title: "Req", field: "Req" },
        { title: "Cliente", field: "Cliente" },
        { title: "OC", field: "OC" },
        { title: "Fecha", field: "Fecha" },
    ],true);

    // Definir tabla de productos solicitados
    const tblProductosSolicitados = initTabulator('#tblProductosSolicitados', [
        { title: "TRAZA", field: "TRAZA", formatter:"textarea" },  
        { title: "Grupo", field: "Grupo", editor:"input" },
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
        { title: "Producto Solicitado", field: "Producto Solicitado", editor:"input" },
        { title: "Marca", field: "Marca", editor:"input" },
        { title: "Modelo", field: "Modelo", editor:"input" },
        { title: "U. Medida", field: "U. Medida", editor: "list", editorParams:{
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
        } },
        { title: "Cantidad", field: "Cantidad", editor:"number" }
    ]);

})
