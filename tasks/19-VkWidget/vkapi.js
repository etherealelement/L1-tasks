"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const widget = document.getElementById("widget");
    const pubId = 210215065;
    let count = 150;

    // Загружаем данные 
    const loadData = async (count, pubId) => {
        const res = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${pubId}&count=${count}&v=5.131&access_token=vk1.a.WMZHqkxwldhjr62u_xn1nvubZ0sZc20Vb0APQ4gufkKpWrAXA6t12OxW3ufS8whyVgu0nCY95pyqYgwthsZkYtaLbO8YLJXdTHHkgtWcWj1yvdToNi_heK0gnkdaM1A5yMTdVACah9AdUCFUfqCUbjTGjaIiGfWHAJb5ndNnF-6S1DnpFCtmZ0DEfYMUj6p6BbD_nJ92C2uJv1L_9esrag&expires_in=86400&user_id=213386040`);
        const data = await res.json()
        return data;
    }


    // Получаем данные и отрисоввываем их в виджете

    loadData(count, pubId).then(item => {
        // получаем посты
        // сразу их кэшируем
        const newPosts = item.response.items;

        let postArray = [];
        for (let i = 0; i < newPosts.length; i++) {
            localStorage.setItem(`post${i}`, JSON.stringify(newPosts[i]))
            postArray.push(JSON.parse(localStorage.getItem(`post${i}`)))
        }
        
        const posts = postArray;
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
        // реализация бесконечного скролла
        widget.addEventListener("scroll", () => {
            const documentRect = widget.getBoundingClientRect();
            if (widget.scrollTop === 14917) {
                count++;
            }
        })
    })



})
