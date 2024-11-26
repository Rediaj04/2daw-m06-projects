// Declaración de colecciones para categorías, productos y ventas
const categorias: Set<string> = new Set(['Electrónica', 'Ropa', 'Juguetes']);
const productos: Map<string, number> = new Map([
    ['Televisor', 10],
    ['Cámara', 5],
    ['Zapatos', 20]
]);
const ventas: { producto: string, precio: number }[] = [
    { producto: 'Televisor', precio: 200 },
    { producto: 'Cámara', precio: 100 }
];

// Función para añadir una categoría
function AñadirC(): void {
    const input = document.getElementById("AñadirCa") as HTMLInputElement;
    const categoria = input.value.trim();

    if (categoria === "") {
        alert("Por favor, introduce una categoría.");
        return;
    }

    if (categorias.has(categoria)) {
        alert("La categoría ya existe.");
    } else {
        categorias.add(categoria);
        input.value = "";
        alert(`Categoría "${categoria}" añadida correctamente.`);
    }
}

// Función para mostrar todas las categorías
function MostrarC(): void {
    const categoriasParrafo = document.getElementById("categorias") as HTMLParagraphElement;

    if (categorias.size > 0) {
        categoriasParrafo.textContent = Array.from(categorias).join(", ");
    } else {
        categoriasParrafo.textContent = "No hay categorías.";
    }
}

// Función para añadir un producto
function AñadirP(): void {
    const input = document.getElementById("AñadirPo") as HTMLInputElement;
    const inputCantidad = document.getElementById("AñadirPoCant") as HTMLInputElement;
    const producto = input.value.trim();
    let cantidad = parseInt(inputCantidad.value) || 1;

    if (producto === "") {
        alert("Por favor, introduce un producto.");
        return;
    }

    if (productos.has(producto)) {
        productos.set(producto, productos.get(producto)! + cantidad);
        alert(`Se han añadido ${cantidad} unidades al producto "${producto}".`);
    } else {
        productos.set(producto, cantidad);
        alert(`Producto "${producto}" añadido con ${cantidad} unidades.`);
    }

    input.value = "";
    inputCantidad.value = "1";
}

// Función para eliminar un producto
function EliminarP(): void {
    const input = document.getElementById("AñadirPo") as HTMLInputElement;
    const producto = input.value.trim();

    if (producto === "") {
        alert("Por favor, introduce un producto.");
        return;
    }

    if (!productos.has(producto)) {
        alert(`El producto "${producto}" no existe.`);
    } else {
        productos.delete(producto);
        input.value = "";
        alert(`Producto "${producto}" eliminado correctamente.`);
    }
}

// Función para mostrar todos los productos
function MostrarP(): void {
    const productosParrafo = document.getElementById("productos") as HTMLParagraphElement;

    if (productos.size > 0) {
        const productosList = Array.from(productos.entries())
            .map(([nombre, cantidad]) => `${nombre} (Cantidad: ${cantidad})`)
            .join(", ");
        productosParrafo.textContent = productosList;
    } else {
        productosParrafo.textContent = "No hay productos.";
    }
}

// Función para vender un producto
function VenderProducto(): void {
    const inputProducto = document.getElementById("ProductoVenta") as HTMLInputElement;
    const inputPrecio = document.getElementById("PrecioVenta") as HTMLInputElement;
    const producto = inputProducto.value.trim();
    const precio = parseFloat(inputPrecio.value);

    if (producto === "") {
        alert("Por favor, introduce un producto para vender.");
        return;
    }

    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, introduce un precio válido.");
        return;
    }

    if (!productos.has(producto)) {
        alert(`El producto "${producto}" no existe.`);
        return;
    }

    const cantidad = productos.get(producto)!;
    if (cantidad <= 0) {
        alert(`El producto "${producto}" ya no está disponible.`);
        return;
    }

    productos.set(producto, cantidad - 1);
    if (productos.get(producto) === 0) {
        productos.delete(producto);
    }

    ventas.push({ producto, precio });
    alert(`Producto "${producto}" vendido por ${precio}€.`);

    inputProducto.value = "";
    inputPrecio.value = "";
}

// Función para mostrar todas las ventas realizadas
function MostrarVentas(): void {
    const ventasParrafo = document.getElementById("ventas") as HTMLParagraphElement;

    if (ventas.length > 0) {
        const totalGanancias = ventas.reduce((total, venta) => total + venta.precio, 0).toFixed(2);
        const detalleVentas = ventas.map(v => `${v.producto} (${v.precio}€)`).join(", ");
        ventasParrafo.textContent = `Ventas: ${detalleVentas}. Total: ${totalGanancias}€.`;
    } else {
        ventasParrafo.textContent = "No hay ventas realizadas.";
    }
}

// Función para mostrar los beneficios ordenados por mayor ganancia
function MostrarBeneficios(): void {
    const beneficiosParrafo = document.getElementById("beneficios") as HTMLParagraphElement;

    const ventasOrdenadas = ventas.sort((a, b) => b.precio - a.precio);
    if (ventasOrdenadas.length > 0) {
        const beneficios = ventasOrdenadas.map(v => `${v.producto}: ${v.precio}€`);
        beneficiosParrafo.textContent = beneficios.join(", ");
    } else {
        beneficiosParrafo.textContent = "No hay beneficios disponibles.";
    }
}
