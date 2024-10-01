$(document).ready(function(){


   
    var tblCotizaciones = initTabulator('#tblCotizaciones', [
        { title: "TRAZA" , field:"TRAZA" },
        { title: "Requerimiento", field:"Cod Req" }, 
        { title: "Numero de cotizacion", field:"Numero de Cotizacion" }, 
        { title: "Fecha enviada", field:"Fecha" },
    ],false,1);
    
    var tblProductosCotizacion = initTabulator('#tblProductosCotizacion', [
        { title: "TRAZA", field: "TRAZA" },
        { title: "Descripcion proveedor", field:"Descripcion proveedor", formatter:"textarea"}, 
        { title: "Cantidad", field:"Cantidad" }, 
        { title: "Precio", field:"Precio" },
        { title: "U. Medida", field: "U. Medida" }
    ],false,10);

    const tblProductosOC = initTabulator('#tblProductosOC',[
        { title: "TRAZA", field: 'TRAZA' },
        { title: "Descripcion proveedor", field: 'Descripcion proveedor', formatter:"textarea" },  
        { title: "Cantidad", field: 'Cantidad', editor:"input" },
        { title: "Precio", field: 'Precio' },
        { title: "U. Medida", field: 'U. Medida' }
    ],false,0);

})