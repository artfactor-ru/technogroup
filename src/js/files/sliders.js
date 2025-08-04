/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Scrollbar, Pagination, Thumbs, EffectFade, Autoplay } from "swiper/modules";
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей с node_modules
// import 'swiper/css';

// Список слайдеров
// Проверяем, есть ли слайдер на странице
if (document.querySelector(".metal__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".metal__slider", {
        // Указываем скласс нужного слайдера
        // Подключаем модули слайдера
        // для конкретного случая
        modules: [Navigation, Pagination, EffectFade, Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: false,
        speed: 800,
        //touchRatio: 0,
        //simulateTouch: false,
        loop: true,
        //preloadImages: false,
        //lazy: true,

        // Эффекты
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // Пагинация

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Скроллбар
        /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

        // Кнопки "влево/вправо"
        navigation: {
            prevEl: ".metal-prev",
            nextEl: ".metal-next",
        },
        /*
			// Брейкпоинты
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
        // События
        on: {},
    });
}

let projectsSlider = null;
let newsSlider = null;
let clientsSlider = null;

function initSliders() {
    const sliderElement = document.querySelector(".projects-main__slider");
    const newsElement = document.querySelector(".news-main__slider");
    const clientsElement = document.querySelector(".about-clients__slider");

    // Инициализация projectsSlider, если элемент существует
    if (sliderElement) {
        if (window.innerWidth < 1367 && !projectsSlider) {
            projectsSlider = new Swiper(sliderElement, {
                modules: [Navigation, Pagination],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 20,
                autoHeight: false,
                speed: 800,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 20 },
                },
            });
        } else if (window.innerWidth >= 1367 && projectsSlider) {
            projectsSlider.destroy(true, true);
            projectsSlider = null;
        }
    }

    // Инициализация newsSlider, если элемент существует
    if (newsElement) {
        if (window.innerWidth < 1367 && !newsSlider) {
            newsSlider = new Swiper(newsElement, {
                modules: [Navigation, Pagination],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 20,
                autoHeight: false,
                speed: 800,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 3, spaceBetween: 20 },
                },
            });
        } else if (window.innerWidth >= 1367 && newsSlider) {
            newsSlider.destroy(true, true);
            newsSlider = null;
        }
    }

    // Инициализация projectsSlider, если элемент существует
    if (clientsElement) {
        clientsSlider = new Swiper(clientsElement, {
            modules: [Navigation, Pagination, Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 20,
            autoHeight: false,
            loop: true,
            speed: 2000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: { slidesPerView: 6, spaceBetween: 10 },
                1024: { slidesPerView: 6, spaceBetween: 20 },
            },
        });
    }
}

// Инициализация при загрузке
window.addEventListener("load", initSliders);
// Проверка при изменении размера окна
window.addEventListener("resize", initSliders);

if (document.querySelector(".about-trust__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".about-trust__slider", {
        // Указываем скласс нужного слайдера
        // Подключаем модули слайдера
        // для конкретного случая
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        slidesPerView: 5,
        spaceBetween: 20,
        autoHeight: true,
        speed: 800,

        //touchRatio: 0,
        //simulateTouch: false,
        //loop: true,
        //preloadImages: false,
        //lazy: true,

        /*
      // Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

        // Пагинация

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Скроллбар
        /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

        // Кнопки "влево/вправо"
        navigation: {
            prevEl: ".about-trust-prev",
            nextEl: ".about-trust-next",
        },

        // Брейкпоинты
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1366: {
                slidesPerView: 5,
            },
        },

        // События
        on: {},
    });
}
