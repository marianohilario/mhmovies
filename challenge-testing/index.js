class CarritoCompra {
    constructor () {
        this.carrito = []
    }

    agregarProducto(producto) {
        this.carrito.push(producto)
    }

    calcularTotal() {
        return this.carrito.reduce((accum,curVal) => accum + curVal.price * curVal.quantity, 0)
    }

    aplicarDescuento(porcentaje) {
        return this.calcularTotal() - this.calcularTotal() * porcentaje / 100
    }
}


module.exports = CarritoCompra