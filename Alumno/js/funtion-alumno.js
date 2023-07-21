$('#tablealumnos').DataTable();

var tablealumnos;

document.addEventListener('DOMContentLoaded', function() {
    tablealumnos = $('#tablealumnos').DataTable({
    "aProcessing": true,
    "aServerSide": true,
    "language": {
        "url": "//cdn.datatables.net/plug-ins/1.10.20./i18n/Spanish.json"
    },
    "ajax": {
        "url": "/instituto/Alumno/includes/modals/modals.php",
        "dataSrc": ""
    },
    "columns": [
      { "data": "acciones" },
      { "data": "usuario_id" },
      { "data": "nombre" },
      { "data": "usuario" },
      { "data": "nombre_rol" },
      { "data": "estado" }
    ],
    "responsive": true,
    "bDestroy": true,
    "iDisplayLength": 10,
    "order": [[0, "asc"]]
  });

  var formAlumno = document.querySelector('#formAlumno');
  formAlumno.onsubmit = function (e) {
    //elemnto ejecutafuncion
    e.preventDefault(); //evita que se recargue la pag.

    var idusuario = document.querySelector('#idusuario').value;
    var nombre = document.querySelector('#nombre').value;
    var usuario = document.querySelector('#usuario').value;
    var clave = document.querySelector('#clave').value;
    var rol = document.querySelector('#listRol').value;
    var estado = document.querySelector('#listEstado').value;

    if (nombre == '' || usuario == '' || clave == '') {
      swal('Atencion', 'Todos los campos son necesarios', 'error');
      return false;
    }
    var request = (window.XMLHttpRequest) ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
    var url ='/instituto/Alumno/models/usuarios/ajax_usuarios.php'
    var from = new FormData(formUsuario)
    request.open('POST',URL,true);
    request.send(form);//envia formularios
    request.onreadystatechange=function(){
        if(request.readyState == 4 && request.status == 200){//validad que todo este ok{
            var data = JSON.parse(request.responseText);
            if(request.status){
                $('#modalAlumno').modal('hide');//oculta datos
                formAlumno.reset();
                swal('Usuario',data.msg,'success');
                tablealumnos.ajax.reload();
            }else{
                swal('Usuario',data.msg,'error');

            }
        }

    }
}
  
});

function openModalAA() {
  document.querySelector('#formAlumno').value = "";
  document.querySelector('#tituloModal').innerHTML ='Nuevo Alumno';
 /* document.querySelector('#action').innerHTML ='Guardar';*/
  document.querySelector('#formAlumno').reset(),



  $('#modalAlumno').modal('show');
}

function editarUsuario(id){
  var idusuario = id;

        document.querySelector('#tituloModal').innerHTML ='Actualizar Uusario';
        document.querySelector('#action').innerHTML ='Actualizar';
        var request = (window.XMLHttpRequest) ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
        var url ='/instituto/Adman/models/usuarios/edit_usuarios.php?'+idusuario;
        request.open('GET',URL,true);
        request.send();
        request.onreadystatechange=function(){
            if(request.readyState == 4 && request.status == 200){//validad que todo este ok{
                var data = JSON.parse(request.responseText);
                if(request.status){
                  document.querySelector('#idusuario').value =data.data.usuario_id;
                  document.querySelector('#nombre').value =data.data.nombre;
                  document.querySelector('#usuario').value =data.data.usuario;
                  document.querySelector('#listRol').value =data.data.rol;
                  document.querySelector('#listEstado').value =data.data.estado;


                  $('#modalAlumno').modal('show'); 
                }else{
                    swal('Atencion',data.msg,'error');

                }
            }

        }
}

