document.addEventListener('DOMContentLoaded', function () {
    const selectLang = document.getElementById('menulang');

    if (selectLang) {
        // Función para cambiar idioma
        function handleLanguageChange() {
            const selectedValue = selectLang.value;
            console.log('Idioma seleccionado:', selectedValue);

            if (selectedValue) {
                window.location.href = selectedValue;
            }
        }

        // Evento change normal
        selectLang.addEventListener('change', handleLanguageChange);

        // Evento adicional para móvil (touch devices)
        selectLang.addEventListener('click', function (e) {
            console.log('Click en selector');
        });

        selectLang.addEventListener('touchstart', function (e) {
            console.log('Touch en selector');
        });
    }
});