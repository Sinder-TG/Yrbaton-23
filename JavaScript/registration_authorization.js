// Проверка правильного Emaila
document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (validateEmail(email)) {
            document.getElementById("email").classList.add("correct__input");
            document.getElementById("email").classList.remove("error__input");
        } else {
            document.getElementById("email").classList.add("error__input");
            document.getElementById("email").classList.remove("correct__input");
            return;
        }

        // Отправка данных на сервер или выполнение других действий после проверки
    });

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Ставим прослушку на кнопки "Регистрация" и "Авторизации"
document.querySelector(".authorization").addEventListener("click", function () {
    document.querySelector("#registrationForm").classList.add("hidden");
    document.querySelector("#loginForm").classList.add("show");
});
document.querySelector(".registration").addEventListener("click", function () {
    document.querySelector("#registrationForm").classList.remove("hidden");
    document.querySelector("#loginForm").classList.remove("show");
});
