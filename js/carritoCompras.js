let productos = [
  {id: 1001, nombre:'Hot Wheels x3 Azul', precio: 500, categoria:'Vehiculos de juguete'},
  {id: 1002, nombre:'Hot Wheels x3 Amarrillo', precio: 500, categoria:'Vehiculos de juguete'},
  {id: 1003, nombre:'Hot Wheels Combo Montaña Rusa + kit x3', precio: 2500, categoria:'Vehiculos de juguete'},
  {id: 1004, nombre:'Hot Wheels Montaña Rusa', precio: 1500, categoria: 'Vehiculos de juguete'},
  {id: 2001, nombre:'Zanahorias Monte', precio: 500, categoria: 'Montessori'},
  {id: 2002, nombre:'Fabrica Monte', precio: 500, categoria:'Montessori'},
  {id: 2003, nombre:'Kit Monte Portatil', precio: 500, categoria:'Montessori'},
  {id: 2004, nombre:'Colgador Monte', precio: 500, categoria:'Montessori'},
  {id: 3001, nombre:'Teddy Bear Marron', precio: 500, categoria:'Peluches'},
  {id: 3002, nombre:'Unicorni', precio: 500, categoria:'Peluches'},
  {id: 3003, nombre:'Palta', precio: 500, categoria:'Peluches'},
  {id: 3004, nombre:'Elefante', precio: 500, categoria:'Peluches'},
  {id: 4001, nombre:'Barbie Musica', precio: 2500, categoria:'Muñecas'},
  {id: 4002, nombre:'Barbie Niñera', precio: 2500, categoria:'Muñecas'},
  {id: 4003, nombre:'Muñeca Bailarina', precio: 500,categoria:'Muñecas'},
  {id: 4004, nombre:'Casa de Barbie', precio: 500, categoria:'Muñecas'},
  {id: 5001, nombre:'Backgammon', precio: 1500, categoria:'Juegos de mesa'},
  {id: 5002, nombre:'Ludo Chino', precio: 1500, categoria:'Juegos de mesa'},
  {id: 5003, nombre:'Uno', precio: 1500, categoria:'Juegos de mesa'},
  {id: 5004, nombre:'Juego de la Vida - Mario Bros Edition', precio: 1500, categoria:'Juegos de mesa'},
  {id: 6001, nombre:'Karaoke', precio: 2500, categoria:'Musica e instrumentos'},
  {id: 6002, nombre:'Bateria', precio: 2500, categoria:'Musica e instrumentos'},
  {id: 6003, nombre:'Teclado', precio: 2500, categoria:'Musica e instrumentos'},
  {id: 6004, nombre:'Saxofon', precio: 2500, categoria:'Musica e instrumentos'},
  {id: 7001, nombre:'Capitan America', precio: 2500, categoria:'Figuras de accion'},
  {id: 7002, nombre:'Spiderman', precio: 2500, categoria:'Figuras de accion'},
  {id: 7003, nombre:'Toy Story 4 - buddy', precio: 2500, categoria:'Figuras de accion'},
  {id: 7004, nombre:'Marvel - Avengers kit', precio: 6500, categoria:'Figuras de accion'},
  {id: 8001, nombre:'Faber Castell kit Acuarelas', precio: 2500, categoria:'Dibujo y arte'},
  {id: 8002, nombre:'Pinturas Lavables', precio: 2500, categoria:'Dibujo y arte'},
  {id: 8003, nombre:'Atril con Pinturas y Pinceles', precio: 2500, categoria:'Dibujo y arte'},
  {id: 8004, nombre:'Acuarelas', precio: 6500, categoria:'Dibujo y arte'},
];

let aux = localStorage.getItem("productosEnCarro");
let productosEnCarro;

if (!aux) {
  productosEnCarro = [];
} else {
  productosEnCarro = JSON.parse(aux);
  pintarCarrito();
}

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

function meterAlCarro(objetosProducto) {
  productosEnCarro.push(objetosProducto);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  pintarCarrito();
}

function borrarDelCarro(id) {
  productosEnCarro.splice(id, 1);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  pintarCarrito();
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