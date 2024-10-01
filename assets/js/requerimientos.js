document.addEventListener("DOMContentLoaded", function () {

    
    //Inicializando las tablas de la pagina
    const tblReq = initTabulator('#tblReq', [
        { title: "Cod Req" , field: 'Cod Req'},
        { title: "TRAZA" , field: 'TRAZA', visible:false},
        { title: "Estado" , field: 'Estado'},
        { title: "Ediciones" , field: 'Ediciones', visible: false},
        { title: "Numero cotizaciones enviadas" , field: 'Numero cotizaciones enviadas'},
        { title: "Numero OC recibidas" , field: 'Numero OC recibidas'},
        { title: "Facturas recibidas de proveedores" , field: 'Facturas recibidas de proveedores',
            formatter: (cell, formatterParams) => {
            return customProgressFormatter(cell, 'Numero OC recibidas');
        }},
        { title: "Pagos a proveedores" , field: 'Pagos de clientes', 
            formatter: (cell, formatterParams) => {
                return customProgressFormatter(cell, 'Numero OC recibidas');
        }},
        { title: "Guías firmadas" , field: 'Guias firmadas', 
            formatter: (cell, formatterParams) => {
                return customProgressFormatter(cell, 'Numero OC recibidas');
        }},
        { title: "Facturas enviadas" , field: 'Facturas enviadas',
            formatter: (cell, formatterParams) => {
            return customProgressFormatter(cell, 'Numero OC recibidas');
        }},
        { title: "Pagos de clientes" , field: 'Pagos de clientes', 
            formatter: (cell, formatterParams) => {
            return customProgressFormatter(cell, 'Numero OC recibidas');
        }}
    ],false,1);

    var tblHistorial = initTabulator('#tblHistorial', [
        { title: "mensaje" , field: 'mensaje', formatter: "textarea" },
        { title: "nombreTabla" , field: 'nombreTabla', visible:false },
        { title: "TRAZA" , field: 'TRAZA', visible:false },
        { title: "elemento" , field: 'elemento', visible:false },
    ],true,1,"nombreTabla"); 

    const tblPlanilla = initTabulator('#tblPlanilla', [
        { title: "Cod Req" , field: 'Cod Req'},
        { title: "Grupo" , field: 'Grupo'},
        { title: "Categoria" , field: 'Categoria'},
        { title: "Producto Solicitado" , field: 'Producto Solicitado', formatter: "textarea"},
        { title: "Marca" , field: 'Marca'},
        { title: "Modelo" , field: 'Modelo'},
        { title: "U. Medida" , field: 'U. Medida'},
        { title: "Cantidad" , field: 'Cantidad'},
        { title: "Ediciones" , field: 'Ediciones', visible:false},
        { title: "TRAZA " , field: 'TRAZA'},
    ],false,1);

    const tblOfertas = initTabulator('#tblOfertas', [
        { title: "Cotizacion" , field: 'Cotizacion', },
        { title: "Producto Solicitado" , field: 'Producto Solicitado' },
        { title: "Descripcion proveedor" , field: 'Descripcion proveedor', formatter: "textarea"},
        { title: "Marca" , field: 'Marca'},
        { title: "Modelo" , field: 'Modelo'},
        { title: "Peso (kg)" , field: 'Peso (kg)'},
        { title: "Volumen (m3)" , field: 'Volumen (m3)'},
        { title: "Descripcion cliente" , field: 'Descripcion cliente', formatter: "textarea"},
        { title: "Dias entrega proveedor" , field: 'Dias entrega proveedor'},
        { title: "Dias entrega cliente" , field: 'Dias entrega cliente'},
        { title: "U. Medida" , field: 'U. Medida'},
        { title: "Cantidad" , field: 'Cantidad'},
        { title: "Costo x Unidad SIN IGV en moneda de oferta" , field: 'Costo x Unidad SIN IGV en moneda de oferta'},
        { title: "Precio Venta x Unidad SIN IGV en moneda de oferta" , field: 'Precio Venta x Unidad SIN IGV en moneda de oferta'},
        { title: "Link" , field: 'Link'},
        { title: "Adjunto Ficha Tecnica" , field: 'Adjunto Ficha Tecnica'},
        { title: "Imagen Referencial" , field: 'Imagen Referencial',},
        { title: "Ediciones" , field: 'Ediciones', visible:false},
        { title: "OC a proveedor" , field: 'OC a proveedor'},
        { title: "TRAZA " , field: 'TRAZA', visible:false},
    ],false,1);

    const tblCotizaciones = initTabulator('#tblCotizaciones', [
        { title: "Cod Req" , field: 'Cod Req', },
        { title: "Numero de Cotizacion" , field: 'Numero de Cotizacion' },
        { title: "Valor de venta" , field: 'Valor de venta'},
        { title: "IGV" , field: 'IGV'},
        { title: "Fecha" , field: 'Fecha'},
        { title: "Validez" , field: 'Validez'},
        { title: "Enviada" , field: 'Enviada'},
        { title: "Archivo" , field: 'Archivo'},
        { title: "Adjuntos" , field: 'Adjuntos'},
        { title: "Estado" , field: 'Estado'},
        { title: "Ediciones" , field: 'Ediciones', visible:false},
        { title: "TRAZA" , field: 'TRAZA'},
    ],false,1);

    const tblOCClientes = initTabulator('#tblOCClientes', [
        { title: "Numero de Cotizacion" , field: 'Numero de Cotizacion', },
        { title: "Numero OC Cliente" , field: 'Numero OC Cliente' },
        { title: "Estado" , field: 'Estado'},
        { title: "Valor sin IGV" , field: 'Valor sin IGV'},
        { title: "IGV" , field: 'IGV'},
        { title: "Fecha Emision" , field: 'Fecha Emision'},
        { title: "OC Cliente PDF" , field: 'OC Cliente PDF'},
        { title: "Ediciones" , field: 'Ediciones', visible:false},
        { title: "TRAZA" , field: 'TRAZA'},
    ],false,1);

    const tblOCProveedores = initTabulator('#tblOCProveedores', [
        { title: "No Orden de Compra" , field: 'No Orden de Compra', },
        { title: "Proveedor" , field: 'Proveedor' },
        { title: "Estado" , field: 'Estado'},
        { title: "Moneda" , field: 'Moneda'},
        { title: "Valor de compra" , field: 'Valor de compra'},
        { title: "IGV" , field: 'IGV'},
        { title: "Lugar de entrega" , field: 'Lugar de entrega'},
        { title: "Fecha de vencimiento 1" , field: 'Fecha de vencimiento 1'},
        { title: "Fecha de vencimiento 2" , field: 'Fecha de vencimiento 2'},
        { title: "Garantia" , field: 'Garantia'},
        { title: "OC pdf" , field: 'OC pdf'},
        { title: "Fecha Pedido" , field: 'Fecha Pedido'},
        { title: "OC entregada" , field: 'OC entregada'},
        { title: "Orden Generada" , field: 'Orden Generada'},
        { title: "Contador" , field: 'Contador'},
        { title: "Ediciones" , field: 'Ediciones', visible:false},
        { title: "TRAZA" , field: 'TRAZA', visible:false}
    ],false,1);

    const tblFacturas = initTabulator('#tblFacturas', [
        { title: "Tipo" , field: 'Tipo', },
        { title: "Categoria" , field: 'Categoria' },
        { title: "Proveedor" , field: 'Proveedor'},
        { title: "OC proveedor" , field: 'OC proveedor'},
        { title: "OC cliente" , field: 'OC cliente'},
        { title: "Descripcion" , field: 'Descripcion'},
        { title: "Numero de documento" , field: 'Numero de documento'},
        { title: "Fecha Emision" , field: 'Fecha Emision'},
        { title: "Fecha Vencimiento" , field: 'Fecha Vencimiento'},
        { title: "Fecha de Envio" , field: 'Fecha de Envio'},
        { title: "Valor sin IGV" , field: 'Valor sin IGV'},
        { title: "IGV" , field: 'IGV'},
        { title: "Moneda" , field: 'Moneda'},
        { title: "Saldo" , field: 'Saldo'},
        { title: "Documento PDF" , field: 'Documento PDF'},
        { title: "Ediciones" , field: 'Ediciones', visible:false},
        { title: "TRAZA" , field: 'TRAZA', visible:false}
    ],false,1);

    const tblAbonos = initTabulator('#tblAbonos', [
        { title: "Categoria" , field: 'Categoria', },
        { title: "Fecha" , field: 'Fecha' },
        { title: "Valor" , field: 'Valor'},
        { title: "Moneda" , field: 'Moneda'},
        { title: "Concepto" , field: 'Concepto', formatter:'textarea'},
        { title: "Archivo" , field: 'Archivo'},
        { title: "Banco" , field: 'Banco'},
        { title: "No Operacion Bancaria" , field: 'No Operacion Bancaria'},
        { title: "Ediciones" , field: 'Ediciones'},
        { title: "TRAZA" , field: 'TRAZA', visible:false}
    ],false,1);

    const tblGuias = initTabulator('#tblGuias', [
        { title: "OC de cliente" , field: 'OC de cliente', },
        { title: "Numero Guia" , field: 'Numero Guia' },
        { title: "Guia sin firma PDF" , field: 'Guia sin firma PDF'},
        { title: "Guia firmada PDF" , field: 'Guia firmada PDF'},
        { title: "Ediciones" , field: 'Ediciones', visible: false},
        { title: "TRAZA" , field: 'TRAZA'},
        { title: "Fecha Emision" , field: 'Fecha Emision' }
    ],false,1);


})