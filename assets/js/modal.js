//Creación del modal.
$('.modal-body').html(`
<div class="order-md-1">
    <form action="#" method="post" class="needs-validation" name="formulario">
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" name="nombre" placeholder="Juan" value="" required>
            </div>
            <div class="col-md-6 mb-3">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" name="apellido" placeholder="Perez" value="" required>
            </div>
        </div>
        <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" placeholder="juanperez@ejemplo.com" required>
        </div>
        <div class="mb-3">
            <label for="direccion">Dirección</label>
            <input type="text" class="form-control" name="direccion" placeholder="Av.corrientes 1234">
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="departamento">Piso/Departamento</label>
                <input type="text" class="form-control" name="depto" placeholder="1º/2º - Casa" value="">
            </div>
            <div class="col-md-6 mb-3">
                <label for="telefono">Teléfono</label>
                <input type="text" class="form-control" name="telefono" placeholder="1123456789" value="">   
            </div>
        </div>
        <div class="row">
            <div class="col-md-5 mb-3">
                <label for="pais">País</label>
                <select class="custom-select d-block w-100" name="pais">
                <option value="">Elija...</option>
                <option>Argentina</option>
                </select>
            </div>
            <div class="col-md-4 mb-3">
                <label for="provincia">Provincia</label>
                <select class="custom-select d-block w-100" name="provincia">
                <option value="">Elija...</option>
                <option>Buenos Aires</option>
                </select>
            </div>
            <div class="col-md-3 mb-3">
                <label for="codigoPostal">CP</label>
                <input type="text" class="form-control" name="cp" placeholder="1234">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="numero-tarjeta">Número de tarjeta</label>
                <input type="text" class="form-control" name="numeroTarjeta" placeholder="">
            </div>
            <div class="col-md-3 mb-3">
                <label for="vencimiento">Vencimiento</label>
                <input type="text" class="form-control" name="vencimiento" placeholder="MM/AA">
            </div>
            <div class="col-md-3 mb-3">
                <label for="tarjeta-cvv">CVV</label>
                <input type="text" class="form-control" name="tarjetaCvv" placeholder="123" required>
            </div>
        </div>
    </form>        
    <button type="submit" class="btnPay w-100 mt-2 btn btn-primary">Comprar</button>
    <div class="text-center" id="app">
        <h3 class="buyModal">La compra se realizó correctamente</h3>
        <img src="https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-icono-de-c--rculo-de-marca-de-verificaci--n-curvo-by-vexels.png" width="50%"></img>
    </div>
`);

// Mostrar el modal.
$('.btnBuy').click((event) =>{
    event.preventDefault();
    $('#productModal').modal('show');
});

$('.btnPay').click((event) =>{
    event.preventDefault();
    $('.modal-body').html(
    `
    <div class="text-center">
        <h3 class="buyModal">La compra se realizó correctamente</h3>
        <img src="https://images.vexels.com/media/users/3/157931/isolated/preview/604a0cadf94914c7ee6c6e552e9b4487-icono-de-c--rculo-de-marca-de-verificaci--n-curvo-by-vexels.png" width="50%"></img>
    </div>
    `              
    );
});

// Validación del formulario del modal.
$(document).ready(() => {
    $('#app').hide();
    $("form[name='formulario']").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                minlength: 3
            },
            direccion: {
                required: true,
                minlength: 8
            },
            depto: {
                required: true,
            },
            telefono: {
                required: true,
                minlength: 8
            },
            pais: {
                required: true,
            },
            provincia: {
                required: true,
            },
            cp: {
                required: true,
            },
            numeroTarjeta: {
                required: true,
            },
            vencimiento: {
                required: true,
            },
            tarjetaCvv: {
                required: true,
            }         
        },
        messages: {
            nombre: {
                required: 'El nombre es obligatorio',
                minlength: 'El campo debe tener un minimo de 3 caracteres.'
            },
            apellido: {
                required: 'El apellido es obligatorio',
                minlength: 'El campo debe tener un minimo de 3 caracteres.'
            },
            email: {
                required: 'El email es obligatorio',
                minlength: 'El campo debe tener un minimo de 3 caracteres.'
            },
            depto: {
                required: 'El departamento es obligatorio',
            },
            telefono: {
                required: 'El telefono es obligatorio',
                minlength: 'El campo debe tener un minimo de 8 caracteres.'
            },
            pais: {
                required: 'El pais es obligatorio',
            },
            provincia: {
                required: 'La provincia es obligatorio',
            },
            cp: {
                required: 'El codigo postal es obligatorio',
            },
            numeroTarjeta: {
                required: 'El número de tarjeta es obligatorio',
             },
            vencimiento: {
                required: 'El vencimiento es obligatorio',
            },
            tarjetaCvv: {
                required: 'El codigo CVV es obligatorio',
            },
        },
        submiteHandler: function(event){
            
        }
    })
})