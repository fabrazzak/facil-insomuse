$(document).ready(function() {
    // Inicializar DataTables
    var tblBCP = initTabulator('#tblBCP', [
        { title: "Fecha" }, 
        { title: "Descripcion" }, 
        { title: "Monto" }, 
        { title: "Conciliacion" },
        { title: "BCP", visible: false }, 
        { title: "Contable", visible: false }, 
        { title: "Moneda", visible: false },
        { title: "Saldo", visible: false }, 
        { title: "TRAZA", visible: false }
    ],false,1);

    var tblInterbank = initTabulator('#tblIntertabk', [
        { title: "Fecha de operacion" }, 
        { title: "Movimiento" }, 
        { title: "Descripcion" }, 
        { title: "Monto" }, 
        { title: "Conciliacion" },
        { title: "Canal", visible: false }, 
        { title: "Fecha de proceso", visible: false }, 
        { title: "Moneda", visible: false },
        { title: "Nro de operacion", visible: false }, 
        { title: "Retencion", visible: false }, 
        { title: "Saldo contable", visible: false },
        { title: "TRAZA", visible: false }
    ],false,1);

    var tblMovimientosBancarios = initTabulator('#tblMovimientos', [
        { title: "Fecha" }, 
        { title: "Valor" }, 
        { title: "Concepto" }, 
        { title: "Banco" },
        { title: "Archivo", visible: false }, 
        { title: "Categoria", visible: false }, 
        { title: "Moneda", visible: false },
        { title: "No Operacion Bancaria", visible: false }, 
        { title: "TRAZA", visible: false },
        { title: "Conciliacion", visible: false }
    ],false,1);

 


});
