// script.js

document.addEventListener('DOMContentLoaded', function() {
    var loveYesButton = document.getElementById('loveYes');
    var loveNoButton = document.getElementById('loveNo');
    var firstMenu = document.getElementById('firstMenu');
    var secondMenu = document.getElementById('secondMenu');
    var noLoveMessage = document.getElementById('noLoveMessage');
    var loveMessage = document.getElementById('loveMessage');

    // Mostrar el mensaje y luego el segundo menú cuando se selecciona "Sí, te amo"
    loveYesButton.addEventListener('click', function() {
        firstMenu.style.display = 'none'; // Oculta el primer menú
        noLoveMessage.style.display = 'none'; // Asegura que el mensaje de "No te amo" esté oculto
        loveMessage.style.display = 'block'; // Muestra el mensaje de "Sí, te amo"
        // Despliega el segundo menú después de un pequeño retraso para que el mensaje se pueda leer
        setTimeout(function() {
            loveMessage.style.display = 'none'; // Oculta el mensaje
            secondMenu.style.display = 'block'; // Muestra el segundo menú
        }, 100000); // Ajusta el tiempo según sea necesario
    });

    // Mostrar un mensaje cuando se selecciona "No, no te amo"
    loveNoButton.addEventListener('click', function() {
        firstMenu.style.display = 'none'; // Oculta el primer menú
        secondMenu.style.display = 'none'; // Oculta el segundo menú
        loveMessage.style.display = 'none'; // Asegura que el mensaje de "Sí, te amo" esté oculto
        noLoveMessage.style.display = 'block'; // Muestra el mensaje de "No te amo"
    });
});
