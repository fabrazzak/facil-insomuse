document.addEventListener("DOMContentLoaded", function () {

  const tblGuias = initTabulator('#tblGuias', [
    { title: "Numero de Guia" , field: 'guia' }, 
    { title: "Guia sin firma PDF", field: 'sin_firma' },
    { title: "Guia firmada PDF",  field: 'firma' },
    { title: "Fecha de registro", field: 'fecha' },
    { title: "TRAZA", field: 'TRAZA' }
])

const tblsComprobantes = initTabulator('#tblsComprobantes', [
  { title: "Tipo" , field: 'Tipo' }, 
  { title: "Categoria", field: 'Categoria' },
  { title: "Proveedor",  field: 'Proveedor' },
  { title: "OC proveedor", field: 'OC_proveedor' },
  { title: "OC cliente", field: 'OC_cliente' },
  { title: "Descripcion", field: 'Descripcion' },
  { title: "Numero de documento", field: 'Numero_de_documento' },
  { title: "Fecha Emision", field: 'Fecha_Emision' },
  { title: "Fecha Vencimiento", field: 'Fecha_Vencimiento' },
  { title: "Fecha de Envio", field: 'Fecha_de_Envio' },
  { title: "Valor sin IGV", field: 'Valor_sin_IGV' },
  { title: "IGV", field: 'IGV' },
  { title: "Moneda", field: 'Moneda' },
  { title: "Documento PDF", field: 'Documento_PDF' },
  { title: "TRAZA", field: 'TRAZA' },
])

const tblNotas = initTabulator('#tblNotas', [
  { title: "Tipo" , field: 'Tipo' }, 
  { title: "Descripcion", field: 'Descripcion' },
  { title: "Comprobante de origen",  field: 'Comprobante_de_origen' },
  { title: "Comprobante de destino", field: 'Comprobante_de_destino' },
  { title: "Numero NCredito", field: 'Numero_NCredito' },
  { title: "Fecha Emision", field: 'Fecha_Emision' },
  { title: "Fecha Vencimiento", field: 'Fecha_Vencimiento' },
  { title: "Fecha Cancelacion", field: 'Fecha_Cancelacion' },
  { title: "Forma de Pago", field: 'Forma_de_Pago' },
  { title: "Valor", field: 'Valor' },
  { title: "Moneda", field: 'Moneda' },
  { title: "Nota Credito PDF", field: 'Nota_Credito_PDF' },
  { title: "TRAZA", field: 'TRAZA' },
  { title: "Email Analista", field: 'Email_Analista' },
  { title: "Fecha Registro", field: 'Fecha_Registro' },
])

const tblDetracciones = initTabulator('#tblDetracciones', [
  { title: "Comprobante de pago" , field: 'Comprobante_de_pago' }, 
  { title: "Fecha", field: 'Fecha' },
  { title: "Valor",  field: 'Valor' },
  { title: "Moneda", field: 'Moneda' },
  { title: "Concepto", field: 'Concepto' },
  { title: "Archivo", field: 'Archivo' },
  { title: "TRAZA", field: 'TRAZA' },
  { title: "Email Analista", field: 'Email_Analista' },
  { title: "Fecha Registro", field: 'Fecha_Registro' },
])

const tblOCClientes = initTabulator('#tblOCClientes', [
  { title: "Numero de Cotizacion" , field: 'Numero_de_Cotizacion' }, 
  { title: "Numero OC Cliente", field: 'Numero_OC_Cliente' },
  { title: "Estado",  field: 'Estado' },
  { title: "Valor sin IGV", field: 'Valor_sin_IGV' },
  { title: "IGV", field: 'IGV' },
  { title: "Fecha Emision", field: 'Fecha_Emision' },
  { title: "OC Cliente PDF", field: 'OC_Cliente_PDF' },
  { title: "TRAZA", field: 'TRAZA' },
  { title: "Email Analista", field: 'Email_Analista' },
  { title: "Fecha Registro", field: 'Fecha_Registro' },
  { title: "Req", field: 'Req' },
  { title: "Moneda", field: 'Moneda' },
])

const tblOCProveedores = initTabulator('#tblOCProveedores', [
  { title: "No_Orden_de_Compra" , field: 'No_Orden_de_Compra' }, 
  { title: "Proveedor", field: 'Proveedor' },
  { title: "Estado",  field: 'Estado' },
  { title: "Moneda", field: 'Moneda' },
  { title: "Valor_de_compra", field: 'Valor_de_compra' },
  { title: "IGV", field: 'IGV' },
  { title: "Lugar_de_entrega", field: 'Lugar_de_entrega' },
  { title: "Fecha_de_vencimiento_1", field: 'Fecha_de_vencimiento_1' },
  { title: "Fecha_de_vencimiento_2", field: 'Fecha_de_vencimiento_2' },
  { title: "Garantia", field: 'Garantia' },
  { title: "OC_pdf", field: 'OC_pdf' },
  { title: "Adjunto", field: 'Adjunto' },
  { title: "Fecha_Pedido", field: 'Fecha_Pedido' },
  { title: "OC_entregada", field: 'OC_entregada' },
  { title: "Observaciones", field: 'Observaciones' },
  { title: "TRAZA", field: 'TRAZA' },
  { title: "Historial", field: 'Historial' },
  { title: "Orden_Generada", field: 'Orden_Generada' },
  { title: "Contador", field: 'Contador' },
])

const tblCostosEquipo = initTabulator('#tblCostosEquipo', [
  { title: "Descripcion" , field: 'Descripcion' }, 
  { title: "Proveedor", field: 'Proveedor' },
  { title: "Comprobante_de_pago",  field: 'Comprobante_de_pago' },
  { title: "Tipo_de_Gasto", field: 'Tipo_de_Gasto' },
  { title: "TRAZA", field: 'TRAZA' },
  { title: "Email_Analista", field: 'Email_Analista' },
  { title: "Fecha_Registro", field: 'Fecha_Registro' }
])

});
  