$(document).ready(function(){ 

    tblProductosOC = initTabulator('#tblProductosOC', [
        { title: "Req", field: "Producto"},  
        { title: "Proveedor", field: "Categoria" },
        { title: "Producto", field: "Marca" },
        { title: "Contacto proveedor", field: "Modelo" },
        { title: "Numero", field: "Grupo" },
        { title: "Correo", field: "Medida" }
    ],false,1);


})