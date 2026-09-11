// Escucha el evento de clic en el botón de cálculo
document.getElementById('btnCalcular').addEventListener('click', function() {
    
    // 1. Obtener valores de la página
    let precio = 60; // Precio base de un videojuego estándar
    let cantidad = parseInt(document.getElementById('cantidad').value);
    let cupon = document.getElementById('codigoCupon').value.trim();
    let contenedor = document.getElementById('resultadoContenedor');

    // 2. Operadores Aritméticos (* para multiplicar y - para restar)
    let subtotal = precio * cantidad; 
    let descuento = 0;

    // 3. Condición y Operadores Lógicos (&& para 'Y', || para 'O')
    // El cupón es válido si el usuario escribe 'GAMER10' O 'GAMERZONE' Y el subtotal supera los 30 dólares
    if ((cupon === "GAMER10" || cupon === "GAMERZONE") && subtotal > 30) {
        descuento = subtotal * 0.10; // 10% de descuento aritmético
        let totalFinal = subtotal - descuento;
        
        // Mostrar resultado dinámicamente en la página web
        contenedor.innerHTML = `¡Cupón Aplicado con Éxito! <br> 
                                Subtotal: $${subtotal.toFixed(2)} <br> 
                                Descuento (10%): -$${descuento.toFixed(2)} <br> 
                                Total a Pagar: $${totalFinal.toFixed(2)}`;
    } else {
        // En caso de que no ingresen un cupón correcto
        contenedor.innerHTML = `Total a Pagar: $${subtotal.toFixed(2)} <br> 
                                <span style="color: red; font-size: 12px;">(No se aplicó ningún cupón de descuento válido)</span>`;
    }
});