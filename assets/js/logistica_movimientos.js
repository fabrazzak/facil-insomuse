$(document).ready(function() { 

    //const traza_movimiento = localStorage.getItem("traza_movimiento");
    //const fecha_inicial = localStorage.getItem("fecha_inicial");
    //const fecha_final = localStorage.getItem("fecha_final");

    const tblMovimientosLogisticos = initTabulator('#tblMovimientosLogisticos',[
        { title: "Fecha planeada", field: "planeada", editor:"input" },  
        { title: "Fecha Real", field: "real", editor:"input" },
        { title: "Completado", field: "estado", editor:"input" },
        { title: "Transportista", field: "transportista", editor:"input" },
        { title: "Lugar inicial", field: "inicial", editor:"input" },
        { title: "Lugar Final", field: "final", editor:"input" },
        { title: "TRAZA", field: "TRAZA", visible: false},
        { title: "Entrega", field: "entrega", visible: false},
    ],false,1,null,null,null,null,false,null,null,true);

    const tblGuias = initTabulator('#tblGuias',[
        { title: "Numero de Guia", field: "numero" },  
        { title: "OC cliente", field: "cliente" },
        { title: "Guia sin Firmar PDF", field: "sin_firmar" },
        { title: "Guia firmada PDF", field: "firmada" },
        { title: "Traza", field: "traza",  visible: false }
    ]);

    const tblProducto = initTabulator('#tblProducto',[
        { title: "Producto", field: "producto" },  
        { title: "Movimiento", field: "movimiento", visible: false },
        { title: "Movimiento Traza", field: "mtraza" },
        { title: "Producto Traza", field: "ptraza", visible: false },
    ]);

    //Acciones
    tblMovimientosLogisticos.on("rowSelectionChanged", function(data, rows){
        if(data.length > 0){
            console.log("data", data[0]);
            detailMovimiento(data[0].entrega);
        }
    });

    //Funciones
    function detailMovimiento(detalle){
        document.getElementById("mcondicion").textContent = detalle;
    }
   
    $('#btnGuardar').on('click',btnGuardar);

    function btnGuardar() {
        enableEditTable(tblGuias);
        enableEditTable(tblProducto);
    }

})