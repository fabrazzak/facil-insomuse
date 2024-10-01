$(document).ready(async function() { 
    const tblProductosOfrecidos = new initTabulator('#tblProductosOfrecidos',[
        { title: "Producto Solicitado", field: 'Producto Solicitado', formatter: "textarea" },
        { title: "Descripcion proveedor", field: 'Descripcion proveedor', formatter: "textarea" }, 
        { title: "Marca", field: 'Marca' },
        { title: "Modelo", field: 'Modelo' },
        { title: "U. de medida", field: 'U. Medida' },
        { title: "Cantidad", field: 'Cantidad' },
        { title: "Proveedor", field: 'Proveedor' },
        { title: "Costo x UND sin IGV", field: 'Costo x UND sin IGV' },
        { title: "Link", field: 'Link', formatter: "link", formatterParams: {} },
        { title: "Ficha tecnica", field: 'Adjunto Ficha Tecnica', formatter: "link", formatterParams: {} },
        { title: "Img referencial", field: 'Imagen Referencial', formatter: "image" }
    ], false, 1, "Producto Solicitado", null, null);

    const tblProductosHistorial = initTabulator('#tblProductosHistorial', [
        { title: "Proveedor", field:"Proveedor" },
        { title: "Producto Solicitado", field:"Producto Solicitado" },
        { title: "Descripcion proveedor", field:"Descripcion proveedor" },
        { title: "Marca", field:"Marca" },
        { title: "Modelo", field:"Modelo" },
        { title: "Peso (kg)", field:"Peso (kg)" },
        { title: "Volumen (m3)", field:"Volumen (m3)" },
        { title: "U. Medida", field:"U. Medida" },
        { title: "Costo x Unidad SIN IGV en moneda de oferta", field:"Costo x Unidad SIN IGV en moneda de oferta" },
        { title: "Precio Venta x Unidad SIN IGV en moneda de oferta", field:"Precio Venta x Unidad SIN IGV en moneda de oferta" },
        { title: "Link", field:"Link" },
        { title: "TRAZA", field:"TRAZA" },
    ])
    const divProductos = document.getElementById("divProductos");
    const divProductosHistorial = document.getElementById("divProductosHistorial");
    
    const tblOfertas = initTabulator('#tblOfertas', [
        { title: "Número de productos ofrecidos", field: "numero" },
        { title: "Proveedor", field: "proveedor" },
        { title: "Contacto proveedor", field: "contacto" },
        { title: "Numero", field: "Celular" },
        { title: "Correo", field: "Email" },
        { title: "TRAZA", field: "TRAZA" }
    ])

    const divOfertas = document.getElementById("divOfertas");

    const tblProveedor = initTabulator('#tblCliente', [
        { title: "Empresa", field: "Empresa" },
        { title: "Nombre y apellido de contacto", field:"contacto" },
        { title: "Número", field: "Celular" },
        { title: "Correo", field: "Email" },
        { title: "TRAZA", field: "TRAZA" }
    ],1,1,"Empresa")

    const tblProductosEnOferta = initTabulator('#tblProductosEnOferta', [
        { title: "Oferta", field: "Cotizacion", editor: "list"},
        { title: "Producto solicitado", field: 'Producto Solicitado', editor:"list" },
        { title: "Descripción proveedor",  field: 'Descripcion proveedor', editor: "textarea" },
        { title: "Marca", field: 'Marca', editor:"input" },
        { title: "Modelo", field: 'Modelo', editor:"input" },
        { title: "Peso (kg)", field: 'Peso (kg)', editor:"number" },
        { title: "Volumen (m3)", field: 'Volumen (m3)', editor:"number" },
        { title: "Dias entrega proveedor", field: 'Dias entrega proveedor', editor:"number" },
        { title: "Dias entrega cliente", field: 'Dias entrega cliente', editor:"number" },
        { title: "U. medida", field: 'U. Medida', editor: "list", editorParams: {
            values: {
                "Unidad": "Unidad",
                "Bolsa": "Bolsa",
                "Caja": "Caja",
                "Ciento": "Ciento",
                "Galón": "Galón",
                "Kilogramo": "Kilogramo",
                "Litro": "Litro",
                "Metro": "Metro",
                "Par": "Par",
                "Rollo": "Rollo",
                "Paquete": "Paquete",
                "Gramos": "Gramos",
            }
        }},
        { title: "Cantidad", field: 'Cantidad', editor:"number" },
        { title: "Costo x unidad SIN IGV en moneda de proveedor",  field: 'Costo x Unidad SIN IGV en moneda de oferta', editor:"number" },
        { title: "Link",  field: 'Link', editor:"input" },
        { title: "Ficha tecnica", field: 'Adjunto Ficha Tecnica', editor:fileEditor },
        { title: "Imagen referencial", field: 'Imagen Referencial', editor:fileEditor },
        { title: "TRAZA",field: 'TRAZA' },
    ])


})