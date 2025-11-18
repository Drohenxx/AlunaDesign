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
});
