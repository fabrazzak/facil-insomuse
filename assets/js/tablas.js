function initTabulator(
    selector, 
    columns,
    enumerate=true, 
    selectCount=1, 
    rowGroup=null, 
    onRowEdit = null,
    groupHeaderButton = null,
    onCellEdit = null,
    includeCheckbox=false,
    includeEditButtonFunction = null,
    modalEditId = null,
    initialData = true
){

     // Agregar una columna numerador si esta activado enumerate
    if (enumerate){
        columns.unshift({
            title: "#", 
            formatter: "rownum", // Usar el formatter 'rownum' para mostrar el número de fila
            hozAlign: "center", 
            width: 50 
        });
    }

    // Agregar una columna con un checkbox si está activado includeCheckbox
    if (includeCheckbox) {
        columns.unshift({
            title: "Seleccionar", 
            field: "selected", 
            hozAlign: "center", 
            formatter: "rowSelection", // Mostrar un checkbox/tick
            editor: true, 
            width: 50 
        });
    }

    // Generar datos aleatorios si initialData es true
    if (initialData === true) {
        initialData = Array.from({ length: 15 }, () => {
            let rowData = {};
            columns.forEach(column => {
                if (column.field) {
                    // Generar un valor aleatorio de palabrasComerciales
                    rowData[column.field] = palabrasComerciales[Math.floor(Math.random() * palabrasComerciales.length)];
                }
            });
            return rowData;
        });
    }

    // Agregar columna de acciones
    if (typeof includeEditButtonFunction === 'function') {
        columns.push({
            title: "Acciones", // Título de la columna
            formatter: function(cell, formatterParams) {
                return `
                    <button type="button" class="btn btn-primary" 
                        data-bs-toggle="modal" data-bs-target="#${modalEditId}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                        stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/>
                            <path d="M16 5l3 3"/>
                        </svg>
                    </button>
                `;
            },
            hozAlign: "center", // Alinear al centro
            width: 100,
            cellClick: function(e, cell) {
                var rowData = cell.getRow().getData(); // Obtener los datos de la fila
                includeEditButtonFunction(rowData); // Llamar a la función con los datos de la fila
            }
        });
    }
    // Configuración de la tabla
    let tabulatorOptions = {
        layoutColumnsOnNewData: true,
        height: "311px",
        history:true,
        autoColumns: false, // Las columnas se ajustan automáticamente
        layout: "fitData",
        columns: columns,
        selectableRows: selectCount, // Definir cuántas filas se pueden seleccionar
        data: initialData // Usar los datos iniciales, si los hay
    };

    // Si rowGroup es proporcionado, configurar agrupación
    if (rowGroup) {
        tabulatorOptions.groupBy = rowGroup;
        tabulatorOptions.groupStartOpen = true;
        tabulatorOptions.initialSort = [
            { column: rowGroup, dir: "asc" }
        ];

        // Si groupHeaderButton es proporcionado, configurar el header del grupo
        if (groupHeaderButton && typeof groupHeaderButton === 'function') {
            tabulatorOptions.groupHeader = function(value, count, data, group) {
                return groupHeaderButton(value, count, data, group);
            };
        }
    }

    // Si onRowEdit es proporcionado, agregar el evento rowUpdated
    if (onRowEdit && typeof onRowEdit === 'function') {
        tabulatorOptions.rowUpdated = function (row) {
            console.log("aqui")
            onRowEdit(row); // Llamar a la función callback pasando la fila modificada
        };
    }

    // Si onCellEdit es proporcionado, agregar el evento cellEdited
    if (onCellEdit && typeof onCellEdit === 'function') {
        tabulatorOptions.cellEdited = function (cell) {
            onCellEdit(cell); // Llamar a la función callback pasando la celda modificada
        };
    }

    return new Tabulator(selector, tabulatorOptions);
}


const palabrasComerciales = [
    "Innovación",
    "Estrategia",
    "Soluciones",
    "Calidad",
    "Crecimiento",
    "Rentabilidad",
    "Visión",
    "Transformación",
    "Sostenibilidad",
    "Excelencia",
    "Valor",
    "Éxito",
    "Confianza",
    "Competitividad",
    "Liderazgo",
    "Desarrollo",
    "Impacto",
    "Progreso",
    "Optimización",
    "Alianzas"
];
  
  
// Funcion para mostrar cuando hover
function mostrarComentariosDashboard(componente){
    componente.querySelectorAll('.comment-row').forEach(rowElement => {
        const commentElement = rowElement.querySelector('.comment');
    
        // Mostrar el comentario al pasar el cursor
        rowElement.addEventListener('mouseenter', function () {
            commentElement.style.display = 'block';
        });
    
        // Ocultar el comentario cuando el cursor sale
        rowElement.addEventListener('mouseleave', function () {
            commentElement.style.display = 'none';
        });
    
        // Acción cuando se hace clic en .comment-row
        rowElement.addEventListener('click', function () {
            const id = this.querySelector('.deck-title').getAttribute('data-id');
            
            // Definir la clave en localStorage
            selectedReqId = local_traza === "" ? "selectedReqId" : local_traza;
    
            // Comprobar si la clave existe en localStorage y eliminarla
            if (localStorage.getItem(selectedReqId)) {
                localStorage.removeItem(selectedReqId); // Eliminar la clave si existe
            }
    
            // Guardar el nuevo valor en localStorage
            localStorage.setItem(selectedReqId, id);
            
            // Redirigir al usuario
            window.location.href = url; 
        });
    });
}