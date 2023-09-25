window.addEventListener("DOMContentLoaded", () => {
    "use strict"
    const passwordInput = document.getElementById("password");
    const passwordStrange = document.getElementById("password-strength");
    const submitBtn = document.getElementById("submit");
    const passwordInfo = document.getElementById("password-info");
    const infoErrorMessage = document.createElement("span");
    infoErrorMessage.classList.add("info__spn")


    submitBtn.addEventListener("click", () => {
        const validatePassword = (value) => {
            // Создадим переменные для рейтинга и ошибок
            let errors = [];
            let rating = 0;

            // Валидация по длине пароля
            if (value.length < 4) {
                errors.push("Пароль слишком короткий")
            } else if (value.length > 4) {
                rating++;
                errors.filter(item => item !== "короткий")
                passwordStrange.innerText = "";
            }

            // Проверяем наличие различных символов и их регистр
            if (!value.match(/[a-z]/)) {
                errors.push("Добавьте латинские символы")
            } else if (value.match(/[a-z]/)) {
                rating++;
                errors.filter(item => item !== "символы");
                passwordStrange.innerText = "";
            }

            if (!value.match(/[A-Z]/)) {
                errors.push("Добавьте латинские символы в верхнем регистре")
            } else if (value.match(/[A-Z]/)) {
                rating++;
                errors.filter(item => item !== "верхнем");
                passwordStrange.innerText = "";
            }

            // Проверяем на спецсимволы

            if (!value.match(/[!@#$%^&*]/)) {
                errors.push("Добавьте спецсимволы ([!@#$%^&*])")
            } else if (value.match(/[!@#$%^&*]/)) {
                rating++;
                errors.filter(item => item !== "спецсимволы");
                passwordStrange.innerText = "";
            }

            // Проверяем на цифры

            if (!value.match(/[0-9]/)) {
                errors.push("Добавьте спецсимволы цифры и заглавные буквы")
            } else if (value.match(/[0-9]/)) {
                rating++;
                errors.filter(item => item !== "цифры ");
                passwordStrange.innerText = "";
            }

            console.log(errors)

            // Выводим ошибки пользователю
            for (const error of errors) {
                const errorLengthMessage = document.createElement("span")
                errorLengthMessage.innerHTML = `<span>${error}</span>`;
                passwordStrange.append(errorLengthMessage);
            }

            // Вернем функцию для оценки сложности и рекомендации улучшений

            return function () {
                switch (rating) {
                    case 1:
                        infoErrorMessage.innerText = "Сложность пароля: очень лёгкий, добавьте спец.символы и заглавные буквы"
                        passwordInfo.appendChild(infoErrorMessage);
                        break;

                    case 2:
                        infoErrorMessage.innerText = "";
                        infoErrorMessage.innerText = "Сложность пароля: легкий, добавьте спец.символы и заглавные буквы"
                        passwordInfo.appendChild(infoErrorMessage);
                        break;

                    case 3:
                        infoErrorMessage.innerText = "";
                        infoErrorMessage.innerText = "Сложность пароля: средний, добавьте цифры, спец.символы и заглавные буквы"
                        passwordInfo.appendChild(infoErrorMessage);
                        break;

                    case 4:
                        infoErrorMessage.innerText = "";
                        infoErrorMessage.innerText = "Сложность пароля: сложный"
                        passwordInfo.appendChild(infoErrorMessage);
                        break;

                    case 5:
                        infoErrorMessage.innerText = "";
                        infoErrorMessage.innerText = "Сложность пароля: очень сложный"
                        passwordInfo.appendChild(infoErrorMessage);
                        break;
                }
            }

        }
        validatePassword(passwordInput.value)();
    })

})


