document.addEventListener('DOMContentLoaded', function () {
    const selectLang = document.getElementById('menulang');

    // Función para cambiar idioma
    function changeLanguage() {
        if (selectLang.value) {
            window.location.href = selectLang.value;
        }
    }

    // Evento para cambio en desktop
    if (selectLang) {
        selectLang.addEventListener('change', changeLanguage);
    }

    // Para móvil - detectar cuando el menú se abre/cierra si es necesario
    const menuCheckbox = document.getElementById('menu');
    if (menuCheckbox) {
        menuCheckbox.addEventListener('change', function () {
            // Si el menú se abre, asegurar que el selector funciona
            if (this.checked) {
                console.log('Menú móvil abierto');
            }
        });
    }
});