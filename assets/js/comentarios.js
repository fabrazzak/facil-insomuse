function initHistorial(...tablasTabulator) {

    /*  
    definir historialCircle
    definir historialContent
    definif btnCerrarHistorial
    definir inputSearchHistorial
    */

    var historialCircle = document.getElementById("historialCircle");
    var historialContent = document.getElementById("historialContent");
    var btnCerrarHistorial = document.getElementById("btnCerrarHistorial");
    var inputSearchHistorial = document.getElementById("inputSearchHistorial");
    var btnSubmit = document.getElementById("btnHistorial");
    
    /*  
    Crear var tblHistorial. Agrupar por Tabla
    Columnas:
    - Elemento: Formatter html con nombre del elemento, fecha, y ultimo comentario
    - Tabla: Nombre de la tabla  
    */
    var tblHistorial = initTabulator('#tblHistorial', [
        { title: "Mensaje" , field: 'elemento', formatter: "textarea" },
        { title: "nombreTabla" , field: 'nombreTabla', visible:false },
        { title: "elementoTabla" , field: 'elementoTabla', visible:false },
        { title: "TRAZA" , field: 'TRAZA', visible:false },
    ],true,1,"nombreTabla"); 

    /*  
    definir historialTitulo
    definir historial
    definir userForm 
    */
    var historialTitulo = document.getElementById("historialTitulo");
    var historial = document.getElementById("historial");

    /*     
    Si click en historialCircle
        historialCircle display = None
        historialContent display = inline
    Si click en btnCerrarHistorial
        historialCircle display = inline
        historialContent display = None
    */
    btnCerrarHistorial.addEventListener("click", function() {
        historialCircle.style.setProperty("display","flex","important");
        historialContent.style.setProperty("display","none","important");
    });

    historial.innerHTML = '';

    /* 
    Conseguir todos los campos 'Ediciones' de las tablas cargadas en esa pagina en diccionario
    ediciones = nombre de tabla{
        nombre de elemento: edicion,
        ...
    }     
    */
    function obtenerEdiciones(...tablasTabulator) {
        // Crear un array para almacenar los objetos con "nombreTabla" y "elemento"
        let edicionesArray = [];
        // Recorrer todas las tablas y extraer el campo "Ediciones"
        tablasTabulator.forEach((tabla) => {
            let data = tabla.getData(); // Obtener todos los datos de la tabla
            // Recorrer cada fila de la tabla y agregar un objeto al array edicionesArray
            data.forEach(row => {
                let edicion = row["Ediciones"] || row["edicion"] || row["Edicion"]; // Ajusta esto según el campo que contiene la edición
                let traza = row.TRAZA;
                let nombreTabla = row.nombreTabla;
                let elementoTabla = tabla.element.id;
                if (edicion) {
                    // Agregar un nuevo objeto al array con el formato solicitado
                    edicionesArray.push({
                        nombreTabla: nombreTabla, 
                        elemento: edicion,
                        elementoTabla: elementoTabla,
                        TRAZA: traza
                    });
                }
            });
        });
        
        return edicionesArray; // Devolver el array si es necesario usarlo en otro lugar
    }

    //Si hay cambio en inputSearchHistorial
    //Buscar en tblHistorial
    inputSearchHistorial.addEventListener("input", function() {
        applyTabulatorFilters(tblHistorial, inputSearchHistorial);
    });

    historialCircle.addEventListener("click", function() {
        historialCircle.style.setProperty("display","none","important");
        historialContent.style.setProperty("display","flex","important");
    }); 

    tblHistorial.on("rowSelected", function(row){
        const rowData = row.getData();
        ImprimirEdicionesEnHistorial(rowData,historialTitulo,historial);
    });

    function ImprimirEdicionesEnHistorial(rowData, tituloHistorial,contentHistorial){
        // Cambiar el título del historial con el nombre del elemento seleccionado
        tituloHistorial.innerHTML = rowData.nombreTabla;
    
        // Obtener el string 'elemento' y dividirlo en partes
        const elemento = rowData.elemento;
        const partes = elemento.split(';');
    
        // Limpiar el contenido del historial antes de agregar nuevo contenido
        contentHistorial.innerHTML = '';
    
        partes.forEach(parte => {
            const [fecha, nombreUsuario, comentario] = parte.split(',');
            const fechaParte = new Date(fecha.trim());
            const hoy = new Date();
            const esHoy = hoy.toDateString() === fechaParte.toDateString();
            // Determinar el formato de la fecha
            const fechaTexto = esHoy ? fechaParte.toLocaleTimeString() : fechaParte.toLocaleDateString();
    
            if (nombreUsuario.trim().endsWith(':')) {
                // Si el nombre de usuario termina con ":", es un comentario
    
                // Generar el HTML para el comentario
                const comentarioHTML = `
                    <li class="list-group-item usuarioComentario">
                        <div class="info-even-row">
                            <h6>${nombreUsuario.trim()}</h6>
                            <span class="align-right text-muted">${fechaTexto}</span>
                        </div>
                        <span>${comentario.trim()}</span>
                    </li>
                `;
                console.log(nombreUsuario);
                console.log(comentario);
                // Insertar el HTML en el historial
                contentHistorial.insertAdjacentHTML('beforeend', comentarioHTML);
            } else {
                // Si no, es un movimiento
    
                // Generar el HTML para el movimiento
                const movimientoHTML = `
                    <li class="usuarioMovimiento list-group-item">
                        <p>${fechaParte}</p>
                        <p>${nombreUsuario.trim()} - ${comentario.trim()}</p>
                    </li>
                `;
    
                // Insertar el HTML en el historial
                contentHistorial.insertAdjacentHTML('beforeend', movimientoHTML);
            }
        });
    };

    function ejecutarHistorial(){
        //Llenar tblHistorial
        //tblHistorial.setData()
        const edicion = obtenerEdiciones(...tablasTabulator)
        tblHistorial.setData(edicion); 
    };   

    historialCircle.addEventListener("click", function() {
        historial.innerHTML = '';
        historialCircle.style.setProperty("display","none","important");
        historialContent.style.setProperty("display","flex","important");
        ejecutarHistorial();
    });     

    btnSubmit.addEventListener("click", function () {
        let selectedData = tblHistorial.getSelectedData();
        const tabla = selectedData[0]['nombreTabla'];
        const traza = selectedData[0]['TRAZA'];
        const mensaje = document.getElementById("inputMessage").value;
        
        const jsonEdicion = {
            "nombreTabla": "`" + tabla + "` a",
            "informacionColumnas": {
                // datos propios
                "a.Ediciones": mensaje,
            },
            "tablaJoins": [],
            "datosFiltro": [
                {
                    "tabla": "a",
                    "columna": "TRAZA",
                    "operacion": "=",
                    "comparador": traza,
                    "sigoperacion": ""
                }
            ],
            "orderby": [],
        };
        console.log(jsonEdicion);

        let filaSeleccionada = tblHistorial.getSelectedRows()[0];
        // Obtener el valor actual de la columna 'Ediciones'
        let edicionActual = filaSeleccionada.getCell("elemento").getValue();
        // Formatear el nuevo mensaje con fecha, usuario y el mensaje del input
        const fechaActual = new Date().toISOString();  // Fecha en formato ISO
        const nuevoComentario = `${fechaActual}, Usuario:, ${mensaje}`;  // Ajustar según sea necesario
        // Concatenar el nuevo comentario al final del valor existente
        let nuevoValorEdiciones = edicionActual ? `${edicionActual}; ${nuevoComentario}:` : nuevoComentario;
        // Actualizar la columna 'elemento' con el nuevo valor concatenado
        filaSeleccionada.update({ elemento: nuevoValorEdiciones });
        // Limpiar el campo de mensaje después de enviar
        document.getElementById("inputMessage").value = '';

        // Actualizar el historial visual
        historial.innerHTML = ''; // Limpiar el historial visual
        const rowData = selectedData[0];
        ImprimirEdicionesEnHistorial(rowData, historialTitulo,historial);
    });
};

/*     btnSubmit.addEventListener("click", function () {
        let selectedData = tblHistorial.getSelectedData();
        const tabla = selectedData[0]['nombreTabla'];
        const traza = selectedData[0]['TRAZA'];
        const mensaje = document.getElementById("inputMessage").value;
        
        const jsonEdicion = {
            "nombreTabla": "`" + tabla + "` a",
            "informacionColumnas": {
                // datos propios
                "a.Ediciones": mensaje,
            },
            "tablaJoins": [],
            "datosFiltro": [
                {
                    "tabla": "a",
                    "columna": "TRAZA",
                    "operacion": "=",
                    "comparador": traza,
                    "sigoperacion": ""
                }
            ],
            "orderby": [],
        };
    
        // Enviar el JSON al backend
        fetch('/ruta_al_backend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonEdicion)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {  // Verificar si la respuesta fue exitosa
                // Actualizar la fila en Tabulator concatenando el nuevo mensaje
                let filaSeleccionada = tblHistorial.getSelectedRows()[0]; // Obtener la fila seleccionada
                let edicionActual = filaSeleccionada.getCell("elemento").getValue(); // Obtener el valor actual de la columna "Ediciones"
                
                // Concatenar el nuevo mensaje con el valor actual de "Ediciones"
                let nuevoMensaje = `${new Date().toISOString()}, Usuario, ${mensaje}; ${edicionActual}`;
    
                // Actualizar el valor en la columna "Ediciones"
                filaSeleccionada.update({ elemento: nuevoMensaje });
    
                // Limpiar el campo de mensaje después de enviar
                document.getElementById("inputMessage").value = '';
            } else {
                console.error("Error al actualizar el historial:", data.error);
            }
        })
        .catch(error => {
            console.error("Error en la solicitud al servidor:", error);
        });
    });
 */

