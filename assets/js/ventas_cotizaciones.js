$(document).ready(function() { 
    
    
    var tblCotizaciones = initTabulator('#tblCotizaciones',[
        { title: "Numero de OC", field: 'cot_numero' },
        { title: "Req", field: 'cot_req' },  
        { title: "Empresa", field: 'cot_empresa' },
        { title: "Fecha de entrega", field: 'cot_fecha_entrega' },
        { title: "Estado", field: 'cot_estado' },
        { title: "TRAZA", field: 'cot_traza' }
    ]);

    var tblProductos = initTabulator('#tblProductos',[
        { title: "Traza", field: 'cot_traza', visible: false},
        { title: "Descripcion a cliente", field: 'cot_producto' },  
        { title: "Cantidad", field: 'cot_cantidad' },
        { title: "Dias de entrega", field: 'cot_dias' },
        { title: "Imagen referencial", field: 'cot_imagen' }
    ],true,1);


});
