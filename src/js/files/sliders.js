/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper с node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Scrollbar, Pagination, Thumbs, EffectFade } from "swiper/modules";
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
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
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
		/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

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

if (document.querySelector(".mountain__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper(".mountain__slider", {
		// Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
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
		/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

		// Скроллбар
		/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: ".mountain-prev",
			nextEl: ".mountain-next",
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

if (document.querySelector(".fertilizers__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper(".fertilizers__slider", {
		// Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
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
		/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

		// Скроллбар
		/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: ".fertilizers-prev",
			nextEl: ".fertilizers-next",
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

if (document.querySelector(".about-trust__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper(".about-trust__slider", {
		// Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation],
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
		/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

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
