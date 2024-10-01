$(document).ready(function() { 

    const tblProductosOC = initTabulator('#tblProductosOC', [
        {
            title: "Producto descripción cliente", 
            columns: [
                { title: "Nombre de producto" , field: 'solicitado' },
                { title: "marca" , field: 'amarca' }, 
                { title: "modelo", field: 'amodelo' },
                { title: "U.medida",  field: 'amedida' },
                { title: "cantidad", field: 'acantidad' },
                { title: "categoria", field: 'categoria' }
            ]
        },
        {
            title: "Descripción proveedor", 
            columns: [
                { title: "Nombre de producto" , field: 'ofrecido' },
                { title: "marca" , field: 'bmarca' }, 
                { title: "modelo", field: 'bmodelo' },
                { title: "U.medida",  field: 'bmedida' },
                { title: "cantidad", field: 'bcantidad' },
            ]
        },
    ]);

})