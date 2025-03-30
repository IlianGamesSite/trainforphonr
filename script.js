document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    if (menuButton && menu) {
        // Открытие/закрытие меню
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Предотвращаем всплытие события
            menu.classList.toggle("show"); // Переключаем класс 'show'
        });

        // Закрытие меню при клике вне его
        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.remove("show"); // Убираем класс 'show' при клике вне меню
            }
        });

        // Переходы между страницами с учетом регистра
        document.querySelectorAll("#menu a").forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                let targetPage = this.getAttribute("href");

                if (targetPage.toLowerCase() === "Zapic.html") {
                    targetPage = "Zapic.html";
                }

                window.location.href = targetPage;
            });
        });
    }
});
