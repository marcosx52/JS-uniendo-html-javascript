class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;  
    }
    mostrarProducto() {
        return (
        "id: " +
        this.id +
        " Precio: " +
        this.precio + 
        " " +
        " Producto: " +
        this.nombre +
        "\n"
        );
    }
}

function comprar(nombre, email, tel, productosEnCarro) {
    let cant = productosEnCarro.reduce((acc, item) => item.precio + acc, 0);  
    alert("Gracias" + nombre + " por tu compra. \n Total: $" + cant);   
}

let productos = [
    new Producto(1001, 'Hot Wheels x3 Azul', 500, 'Vehiculos de juguete'),
    new Producto(1002, 'Hot Wheels x3 Amarrillo', 500, 'Vehiculos de juguete'),
    new Producto(1003, 'Hot Wheels Combo Montaña Rusa + kit x3', 2500, 'Vehiculos de juguete'),
    new Producto(1004, 'Hot Wheels Montaña Rusa', 1500,'Vehiculos de juguete'),

    new Producto(2001, 'Zanahorias Monte', 500, 'Montessori'),
    new Producto(2002, 'Fabrica Monte', 500, 'Montessori'),
    new Producto(2003, 'Kit Monte Portatil', 500, 'Montessori'),
    new Producto(2004, 'Colgador Monte', 500, 'Montessori'),

    new Producto(3001, 'Teddy Bear Marron', 500, 'Peluches'),
    new Producto(3002, 'Unicorni', 500, 'Peluches'),
    new Producto(3003, 'Palta', 500, 'Peluches'),
    new Producto(3004, 'Elefante', 500, 'Peluches'),

    new Producto(4001, 'Barbie Musica', 2500, 'Muñecas'),
    new Producto(4002, 'Barbie Niñera', 2500, 'Muñecas'),
    new Producto(4003, 'Muñeca Bailarina', 500,'Muñecas'),
    new Producto(4004, 'Casa de Barbie', 500, 'Muñecas'),

    new Producto(5001, 'Backgammon', 1500, 'Juegos de mesa'),
    new Producto(5002, 'Ludo Chino', 1500, 'Juegos de mesa'),
    new Producto(5003, 'Uno', 1500, 'Juegos de mesa'),
    new Producto(5004, 'Juego de la Vida - Mario Bros Edition', 1500, 'Juegos de mesa'),

    new Producto(6001, 'Karaoke', 2500, 'Musica e instrumentos'),
    new Producto(6002, 'Bateria', 2500, 'Musica e instrumentos'),
    new Producto(6003, 'Teclado', 2500, 'Musica e instrumentos'),
    new Producto(6004, 'Saxofon', 2500, 'Musica e instrumentos'),

    new Producto(7001, 'Capitan America', 2500, 'Figuras de accion'),
    new Producto(7002, 'Spiderman', 2500, 'Figuras de accion'),
    new Producto(7003, 'Toy Story 4 - buddy', 2500, 'Figuras de accion'),
    new Producto(7004, 'Marvel - Avengers kit', 6500, 'Figuras de accion'),

    new Producto(8001, 'Faber Castell kit Acuarelas', 2500, 'Dibujo y arte'),
    new Producto(8002, 'Pinturas Lavables', 2500, 'Dibujo y arte'),
    new Producto(8003, 'Atril con Pinturas y Pinceles', 2500, 'Dibujo y arte'),
    new Producto(8004, 'Acuarelas', 6500, 'Dibujo y arte'),
];

let categorias = ["Vehiculos de juguete", "Montessori", "Peluches", "Muñecas", "Juegos de mesa", "Musica e instrumentos", "Figuras de accion", "Dibujo y arte"];

let productosEnCarro = [];

let categoria = "";


while (categoria != "salir" && categoria != null) {
    let aux = categorias.join ("\n");
    categoria = prompt(
        'Ingrese un categoria para continuar con su compra o ingrese "salir": \n(' + aux + ")"
    );
   
    if (categoria != "salir" && categoria != null) {
       let productosFiltradoPorCategoria = productos.filter(
        (item) => item.categoria == categoria
        );

        
        let cartel = "";
        for (let i = 0; i < productosFiltradoPorCategoria.length; i++) {
            cartel += productosFiltradoPorCategoria[i].mostrarProducto();
        }

        let idSeleccionado = parseInt(
            prompt("Seleccione el id del producto que quiere comprar: \n\n" + cartel)
        );

        let productoParaCarro = productosFiltradoPorCategoria.find(
            (item) => item.id == idSeleccionado
            );

        if (productoParaCarro) {
                productosEnCarro.push(productoParaCarro);                
            }            
    }    
}

if (productosEnCarro.length > 0) {
    alert('Te invitamos a Iniciar sesion o Registrarte para terminar tu compra');
    let nombre = prompt('ingrese su nombre');
    let mail = prompt('ingrese su email');
    let tel = prompt('ingrese su tel');
    comprar(nombre, mail, tel, productosEnCarro);
}