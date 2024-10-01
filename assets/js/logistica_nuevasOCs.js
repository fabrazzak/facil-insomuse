$(document).ready(function() { 

    const tblOCProveedor = initTabulator('#tblOCProveedores',[
        { title: "Empresa Proveedor", field: "oc_empresa" },  
        { title: "Numero OC", field: "oc_numero" },
        { title: "Lugar de recojo", field: "oc_recojo" },
        { title: "Contacto proveedor", field: "oc_contacto" },
        { title: "Numero", field: "oc_numero" },
        { title: "Correo", field: "oc_correo" },
        { title: "Estado", field: "oc_estado" },
        { title: "TRAZA", field: "oc_traza", visible: false },
    ],false,1);
})