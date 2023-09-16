"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const widget = document.getElementById("widget");
    const pubId = 210215065;
    let count = 50;

    // Загружаем данные 
    const loadData = async (count, pubId) => {
        const res = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${pubId}&count=${count}&v=5.131&access_token=vk1.a.vgiOgvutPJPs3BasfIcm_IlWPk0jLa-7ncgQ_bQ-36ksKlhMU-07fGlBgC6J0hfrA33B_nvR96jVCd5kpHa3SxuhZ54B07569ShIMBt-bDMq_MfwnUhtwMdhOwtuSA01VvC4Oac5qYwE7fAN5-lSLwLf64tWXuAz4ggsUxeF8pH-XOw7cZBJAl0aLAaNOxzBAMrVSZ4vhJA83i9ylQQlqQ`);
        const data = await res.json()
        return data;
    }


    // Получаем данные и отрисоввываем их в виджете

    loadData(count, pubId).then(item => {
        // получаем посты
        const posts = item.response.items
        for (const post of posts) {
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
        widget.addEventListener("scroll", () => {
            const documentRect = widget.getBoundingClientRect();
            if (widget.scrollTop === 14917) {
                count++;
            }
        })
    })


})
