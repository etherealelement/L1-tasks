window.addEventListener("click", () => {
   const createElement = () => {
       // Создаем новый элемент
       const newEl = document.createElement("div");

       // Добавляем стили с помощью css
       newEl.classList.add("style1")
       newEl.classList.add("style2")
       newEl.classList.add("style3")

       // Добавляем элемент в дом
       document.body.appendChild(newEl);
   }
   createElement();
})