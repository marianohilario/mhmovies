class CarritoCompra {
    constructor () {
        this.carrito = []
    }

    agregarProducto(producto) {
        this.carrito.push(producto)
    }

    calcularTotal() {
        const total = this.carrito.reduce((accum,curVal) => accum + curVal.price * curVal.quantity, 0)
        return total
    }

    aplicarDescuento(porcentaje) {
        const totalConDescuento = this.calcularTotal() - this.calcularTotal() * porcentaje / 100
        return totalConDescuento
    }
}


module.exports = CarritoCompra