// Animación para mostrar carrito.
$('document').ready(()=>{
    $('.divPay').hide();
    
    ($(".carro").click(()=> {
        $('.divPay').toggle("slow");
    }));

    $orderContainer = $('#game-container');

});

// JSON para agregar productos al body y al carrito.
const productos = `assets/data/data.json`;

$.ajax({
    method: "GET",
    url: productos
}).done((carryOn)=> {

const order = [];

function addOrder(product) {
    order.push(product);
    renderOrder();
};

function renderOrder() {
    $orderContainer.empty();
    let total = 0;
    order.forEach(function(product, i) {
        $orderContainer.append(`<li class="">${product.name} $${product.price}  </li>`)
        total = total + product.price;
    });
    
    $('.totalPrice').html(`Total: $${total}`);
};


carryOn.forEach((product, index) => {
    $('#productsContainer').append(
        `
        <div class="col-lg-4 d-flex borderDiv mt-4">
            <div class="card">
                <div  href="#" class="imageProduct"><img src="${product.thumbnail}" width="100%"></div>
                <div class="card-body">
                    <p class="card-text">${product.name}</p>
                    <p class="price card-text">$ ${product.price}</p>
                </div>
                <form action="#" id="btn">    
                    <button class="itemA mt-2 btnAdd btn btn-primary" data-ind="${index}">Agregar Carrito</button>
                </form>  
            </div>
        </div>
        `)
    $('.btnAdd').click((event) => {
        event.preventDefault();
        $('.divPay').slideDown(500);
    });
    $('.btnCancel').click((event) => {
        let removeIndex = order.findIndex(remove => remove.id == event.target.dataset.id);
        order.splice(removeIndex, 1);
        
        renderOrder()
    })
});

const $items = $('.itemA');

$items.click((event) => {
    const productSelected = carryOn[$(event.target).data('ind')]; 
    addOrder(productSelected);
    });
}).fail((error)=> {
    console.log(error);
});