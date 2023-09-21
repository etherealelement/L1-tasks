window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    document.addEventListener("keyup", () => {
        let password = document.getElementById("password");
        let passwordStrength = document.getElementById("password-strength");
        const passwordValue = password.value;
        // Массив с ошибками

        let errors = [];
        // Если длина пароля равно 0 импут не валидируем

        // Проверка на длину
        if (passwordValue.length <= 10) {
            errors.push(`<span>Длина пароля не менее 10 символов</span>`);
            const errorLengthMessage = document.createElement(errors[0]);
            console.log(errorLengthMessage)
            passwordStrength.appendChild(errorLengthMessage);
        } else if (passwordValue.length > 10) {
            errors.pop();
            passwordStrength.innerText = "";
        }
        // Проверка на спецсимволы
        // if (!/[!@#$%^&*()_+{}[]:;<>,.?~\-=|]/.test(passwordValue)) {
        //     errors.push(`<span>Пароль должен содержать хотя бы один специальный символ</span>`);
        //     passwordStrength.innerText = errors[1];
        // } else if (/[!@#$%^&*()_+{}[]:;<>,.?~\-=|]/.test(passwordValue)) {
        //     errors.pop();
        //     passwordStrength.innerText = "";
        // }
    })
})


