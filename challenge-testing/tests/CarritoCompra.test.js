const CarritoCompra = require('../index.js')

// ------------------------- ACTIVIDAD 02 -------------------------
//* En la raíz del proyecto debes crear una nueva carpeta a la que llamaremos “challenge-testing”. Es MUY IMPORTANTE que esta carpeta se encuentre en la raíz (al mismo nivel de las carpetas back y front) para que se suba junto con el resto de tu proyecto a tu repositorio de Github. 

//* Una vez creada la carpeta y parados dentro de ella en la terminal, ejecutar el comando npm init para generar un nuevo package.json en esta carpeta

//* Instalar la dependencia jest utilizando el comando adecuado de NPM.

//* Configurar el comando test del package.json para que ejecute las pruebas con jest.

//* Crear una carpeta tests y un archivo index.js.



// ------------------------- ACTIVIDAD 03 -------------------------
// En este punto ya tenemos el mini-proyecto de testing listo para empezar a trabajar. Lo que haremos aquí será:

// Partir de un enunciado.

// Implementar los tests en un módulo dentro de la carpeta tests. (Recuerda que estos módulos deben tener la extensión “*.test.js”.).

// Luego, con los tests ya listos, trabajaremos en la implementación de la funcionalidad.



// ------------------------- ACTIVIDAD 04 -------------------------
// El enunciado es el siguiente:

//* Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

//* constructor(): Inicializa el carrito como un array vacío.

//* agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

//* calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

//* aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

//* Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.



describe('Tests realizados sobre la clase CarritoCompra.', () => {
    let carritoCompra
    beforeEach(() => {
        carritoCompra = new CarritoCompra()
    })

    const product1 = {name: 'Product A', price: 20, quantity: 1}
    const product2 = {name: 'Product A', price: 10, quantity: 10}
    const product3 = {name: 'Product A', price: 50, quantity: 2}

    it('Debe existir la clase CarritoCompra', () => {
        expect(typeof CarritoCompra).toBe('function')
    })

    it('La clase debe tener un constructor', () => {
        expect(typeof CarritoCompra.prototype.constructor).toBe('function')
    })

    // constructor(): Inicializa el carrito como un array vacío.
    it('Inicializa el carrito como un array vacío', () => {
        expect(carritoCompra.carrito).toEqual([])
        expect(carritoCompra.carrito.length).toBe(0)
        expect(Array.isArray(carritoCompra.carrito)).toBe(true)
    })

    it('Debería tener un método agregarProducto', () => {
        expect(typeof carritoCompra.agregarProducto).toBe('function')
    })

    // agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
    it('Recibe un objeto representando un producto y lo agrega al carrito.', () => {
        expect(carritoCompra.carrito.length).toBe(0)
        carritoCompra.agregarProducto(product1)
        expect(carritoCompra.carrito.length).toBe(1)
    })

    it('Debería tener un método calcularTotalo', () => {
        expect(typeof carritoCompra.calcularTotal).toBe('function')
    })

    // calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
    it('Calcula el total de la compra sumando los precios de todos los productos en el carrito.', () => {
        carritoCompra.agregarProducto(product1)
        carritoCompra.agregarProducto(product2)
        carritoCompra.agregarProducto(product3)
        expect(carritoCompra.calcularTotal()).toBe(220)
    })

    it('Debe tener un método aplicarDescuento', () => {
        expect(typeof carritoCompra.aplicarDescuento).toBe('function')
    })

    // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
    it('Aplica un descuento al total de la compra según el porcentaje especificado.', () => {
        carritoCompra.agregarProducto(product2)
        carritoCompra.agregarProducto(product3)
        expect(carritoCompra.aplicarDescuento(10)).toBe(180)
        expect(carritoCompra.aplicarDescuento(50)).toBe(100)
    })
})