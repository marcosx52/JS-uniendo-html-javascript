const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById ('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito ={}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})
cards.addEventListener('click', e => {
    addCarrito(e)
})

items.addEventListener('click', e => {
   btnAccion(e) 
})

const fetchData =async () => {
    try {
        const res = await fetch ('../data.json')
        const data = await res.json()
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector ('h5').textContent = producto.nombre
        templateCard.querySelector ('p').textContent = producto.precio
        templateCard.querySelector ('img').setAttribute ('src', producto.img)
        templateCard.querySelector ('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
        
    });
    cards.appendChild(fragment)
}

const addCarrito = e => { 
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    
    if(carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto}
    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector ('th').textContent = producto.id
        templateCarrito.querySelectorAll ('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll ('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector ('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector ('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector ('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)        
    })
    items.appendChild(fragment)
    
    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - Elija sus Productos</th>
        `
        return
    }
    
    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
        Swal.fire(
            'El Carro de compras 🛒 ha sido Vaciado'
          )
        
    })

}


const btnAccion = e => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
        Toastify({
            text: "Ha Agregado el mismo producto a su carro de compras 🛒",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }


if (e.target.classList.contains('btn-danger')) {
    const producto = carrito[e.target.dataset.id]
    producto.cantidad--
    if (producto.cantidad === 0) {
        delete carrito[e.target.dataset.id]
    } else {
        carrito[e.target.dataset.id] = {...producto}
    }
    pintarCarrito()
    Toastify({
        text: "Ha Quitado un producto a su carro de compras 🛒",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}
e.stopPropagation()
}