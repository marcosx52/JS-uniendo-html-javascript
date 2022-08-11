function clickEnProducto(id) {
  alert('click en ' + id);
}

fetch('../data.json')
.then((resinicial) => resinicial.json())
.then((res) => {
  const miArray = res;

  let htmlAux = '';
  for (let i = 0; i < miArray.length; i++) {
    htmlAux =
      htmlAux +
      /*`<div onclick="clickProducto(${miArray[i].id})">
          <h3>${miArray[i].nombre}</h3>
          <p>${miArray[i].precio}</p>
      </div>`; */


      `<div class=".col-md-" (${miArray[i].id})>
      <div class="card" style="width: 18rem;">
          <img src= class="card-img-top" alt="(${miArray[i].id})">
          <div class="card-body">
              <h5 class="card-title">${miArray[i].nombre}</h5>
              <p class="card-text">${miArray[i].precio}</p>
              <a href="#" class="btn btn-primary">Añadir al Carrito</a>
          </div>
      </div>

  </div>`
















  }
  document.getElementById('listadoDeProductos').innerHTML = htmlAux;
  console.log(htmlAux);
})
.catch((e) => {
console.log(e);
});


/*

let productos = []
let aux = localStorage.getItem("productosEnCarro");
let productosEnCarro;

/*
if (!aux) {
  productosEnCarro = [];
} else {
  productosEnCarro = JSON.parse(aux);
  pintarCarrito();
}
*/

/////////// OPTIMIZACION DE CODIGO /////////////
//!aux ? productosEnCarro = [] : productosEnCarro = JSON.parse(aux); pintarCarrito();

////////////////////////////////////////////////
/*
function pintarListado() {
  let aux = "";
  for (let i = 0; i < productos.length; i++) {
    aux =
      aux +
      `<div class=".col-md-">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title"> Nombre: ${productos[i].nombre}</h5>
                        <p class="card-text">Precio: $ ${productos[i].precio} Categoria: $ ${productos[i].categoria} ID: ${productos[i].id} </p>
                        <a href="#" onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', categoria: '${productos[i].categoria}', precio: ${productos[i].precio}})"class="btn btn-primary">Añadir al Carrito</a>
                    </div>
                </div>
            </div>`;
      
  }
  document.getElementById("div-productos").innerHTML = aux;
}
pintarListado();


*/

function meterAlCarro(objetosProducto) {
  productosEnCarro.push(objetosProducto);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  pintarCarrito();
  Swal.fire('Su Producto ha sido agregado al Carrito')
}

function borrarDelCarro(id) {
  productosEnCarro.splice(id, 1);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  pintarCarrito();
  Swal.fire('Has removido un Objeto del Carrito')
}

function pintarCarrito() {
  let aux = "";
  for (let i = 0; i < productosEnCarro.length; i++) {
    aux =
      aux +
      `<div >
    <h3> Nombre: ${productosEnCarro[i].nombre} </h3>
    <p> Categoria: $ ${productos[i].categoria} </p>
    <p> Precio: $ ${productosEnCarro[i].precio} </p>
    <p> ID: ${productosEnCarro[i].id} </p>
    <p onclick="borrarDelCarro(${i})" style="cursor: pointer;"> 🗑️</p>
  </div>`;
  }
  document.getElementById("div-carrito").innerHTML = aux;
}


            // cambio
/*
            `<div onclick="meterAlCarro({id: ${productos[i].id}, nombre: '${productos[i].nombre}', categoria: '${productos[i].categoria}', precio: ${productos[i].precio}})" style="cursor: pointer;">
    <h3> Nombre: ${productos[i].nombre} </h3>
    <p> Categoria: $ ${productos[i].categoria} </p>
    <p> Precio: $ ${productos[i].precio} </p>
    <p> ID: ${productos[i].id} </p>
  </div>`;

  */