$(document).ready(async function() { 

    const tblProductosOC = initTabulator('#tblProductosOC', [
        { title: "Producto descripcion cliente" , field: 'Producto descripcion cliente', formatter:"textarea" },
        { title: "Descripcion proveedor" , field: 'Descripcion proveedor', formatter:"textarea" }, 
        { title: "Comprados", field: 'Comprados' },
        { title: "TRAZA",  field: 'TRAZA', visible: false },
    ]);


})
