$(document).ready(function() { 

    const tblOCProveedores = initTabulator('#tblOrdenes', [
        { title: "Proveedor" , field: 'proveedor' },
        { title: "Contacto proveedor" , field: 'contacto' }, 
        { title: "Numero", field: 'numero' },
        { title: "Correo",  field: 'correo' },
        { title: "TRAZA",  field: 'TRAZA', visible: false },
    ])

    const tblRevisarPrecio = initTabulator('#tblProductosOC', [
        { title: "Detalles de producto solicitado" , field: 'solicitado' },
        { title: "Descripción producto proveedor" , field: 'descripcion' }, 
        { title: "Proveedor", field: 'proveedor' },
        { title: "Imagen ref",  field: 'ref' },
        { title: "Marca", field: 'marca' },
        { title: "Modelo", field: 'modelo' },
        { title: "U. medida", field: 'medida' },
        { title: "Cantidad", field: 'cantidad' },
        { title: "Costo x unidad SIN IGV (S/.)", field: 'costo' },
        { title: "Precio de venta SIN IGV (S/.)", field: 'precio' },
        { title: "Link", field: 'link' },
        { title: "Ficha tecnica", field: 'tecnica' },
    ])

    const tblAbonos = initTabulator('#tblAbonos', [
        { title: "Descripción" , field: 'descripcion' },
        { title: "Valor sin IGV" , field: 'valor' }, 
        { title: "IGV", field: 'igv' },
        { title: "Fecha vencimiento",  field: 'fecha vencimiento' },
        { title: "Factura", field: 'factura' },
    ])

    const tblFacturas = initTabulator('#tblFacturas', [
        { title: "Numero de Factura" , field: 'psolicitado' },
        { title: "Fecha de emisión" , field: 'pproveedor' }, 
        { title: "Monto sin IGV", field: 'marca' },
        { title: "IGV",  field: 'modelo' },
        { title: "Moneda", field: 'medida' },
        { title: "Factura PDF", field: 'cantidad' },
        { title: "Proveedor", field: 'proveedor' },
        { title: "Costo x Unidad sin IGV", field: 'costo' },
        { title: "Link", field: 'link' },
        { title: "Ficha tecnica", field: 'tecnica' },
        { title: "Img referencial", field: 'referencial' },
    ])

})
