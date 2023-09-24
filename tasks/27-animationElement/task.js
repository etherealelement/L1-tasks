window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const  addAnimation = (element, animationName, duration) => {
        // Создаем стиль для анимации
        const styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
    @keyframes ${animationName} {
      from { transform: translate(0, 0); }
      to { transform: translate(500px, 300px); }
    }
  `;
        document.head.appendChild(styleSheet);

        // Добавляем класс с анимацией к элементу
        element.classList.add(animationName);

        // Устанавливаем длительность анимации
        element.style.animationDuration = duration + 's';
    }

// Пример вызова функции с указанием элемента, имени анимации и длительности
    const element = document.getElementById('myElement');
    addAnimation(element, 'moveAnimation', 2);
})