"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const widget = document.getElementById("widget");

    // Загружаем данные
    const loadData = async (count, pubId) => {
        try {
            const res = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${pubId}&count=${count}&v=5.131&access_token=vk1.a.K5sOznrbrsIXAOZ-gFxFK0YYI15TeXbA60m6jkvoplztjT47u_TLbkgBzTlPn7PPMzLlsizOKiwx8IMbES3hsnmBes3IRrBDdD7cJaZtafVr4OFPUpMOHuEIUJQJbH8g76PFed9g2WV-KO93kzGW9OlhsiH_b2Ww9BrPyfI-ibS5Zv4kb5Pge_vCRxXC3lgV-YnTV5a5Ty0_sNDYOhIQcQ&expires_in=86400&user_id=213386040`);
            const data = await res.json();
            return data;
        } catch (e) {
            throw new Error(`Код ошибки - ${e}`)
        }
    }

    // Функция отображения данных
    const render = async () => {
        const pubId = 210215065;
        let count = 50;
        const dataArr = await loadData(count, pubId);

        // Функция записи в localStorage
        const addLocalStorage = (arrData) => {
            // получаем посты
            const newPosts = arrData.response.items;
            let postArray = [];
            // перебираем и наполняем storage
            for (let i = 0; i < newPosts.length; i++) {
                localStorage.setItem(`post${i}`, JSON.stringify(newPosts[i]))
                postArray.push(JSON.parse(localStorage.getItem(`post${i}`)))
            }
        }

        // Функция отображения постов
        const displayPosts = (arrData) => {
            // получение массива данных
            const arrItems = arrData.response.items;
            // отображение элементов
            for (const post of arrItems) {
                const postEl = document.createElement("li");
                postEl.classList.add("widget__item");
                // отображение картинки
                const postPhoto = post.attachments;
                const photos = postPhoto.map(item => item.photo.sizes)
                for (const photo of photos) {
                    for (const photoElement of photo) {
                        // отображение текста, изображения и лайков
                        widget.appendChild(postEl)
                        postEl.innerHTML = `
                <p>${post.text}</p>
                <img src=${photoElement.url} alt=icon class="widget__image" />
                <span>likes ${post.likes.count}</span>`
                        widget.appendChild(postEl)
                    }
                }
            }

        }


        // реализация бесконечного скролла
        widget.addEventListener("scroll", () => {
            const documentRect = widget.getBoundingClientRect();
            if (widget.scrollTop === 14917) {
                count += 50;

            }
        })

        addLocalStorage(dataArr);
        displayPosts(dataArr)
    }

    render()
})
