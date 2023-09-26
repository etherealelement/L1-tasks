window.addEventListener("DOMContentLoaded", () => {
    // получаем виджет
    const widget = document.getElementById("widget");
    // Загружаем данные
    const loadData = async (count, pubId) => {
        try {
            const res = await fetch(`https://api.vk.com/method/wall.get?owner_id=-${pubId}&count=${count}&v=5.131&access_token=vk1.a.r3YxBiUptqoqsxXfsa7LdGrAk4rJUomSjVLsFPulJBlmmQyQ_96s985wULyUTLbFvd7tVo60qzRmJC2xywn4bqHtnjxLjqkXY_ciVioBMnakA1afs6pw8PAvtWb_u3rX3rrP11gIkSJ_1fyGaqBVVmRxJjYpYGquU0vgIa5ZpQ5EhKcbTSz2cm4wMwKc124s_gqOscZjaxG5eawOHPMRXw&expires_in=86400&user_id=213386040`);
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
        let countPosts = 10;

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

        // Функция настройки колл-ва постов

        const changePostsData = (dataArr, count) => {
            const resultArr = dataArr.response.items.slice(0, count);
            return resultArr;
        }

        const createPostElement = () => {
            const slicedItem = changePostsData(dataArr, countPosts)
            for (const post of slicedItem) {
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

        // Функция отображения постов + Реализация lazy load
        const displayPosts = () => {
            createPostElement()
        }

        addLocalStorage(dataArr);
        displayPosts();
        // реализация бесконечного скролла
        widget.addEventListener('scroll', () => {
            if (widget.scrollTop > 2200) {
                displayPosts();
            }
        });
    }
    render()
})
