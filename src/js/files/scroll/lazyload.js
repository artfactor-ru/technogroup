import LazyLoad from "vanilla-lazyload";

// Работает с объектами с классом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: "[data-src],[data-srcset]",
	class_loaded: "loaded",
	// use_native: true,

	// 💡 Коллбэк: когда элемент "вошёл в зону видимости"
	callback_enter: (el) => {
		const picture = el.closest("picture.lazy");
		if (picture) {
			picture.classList.add("loading");
		}
	},

	// 💡 Коллбэк: когда элемент загружен
	callback_loaded: (el) => {
		const picture = el.closest("picture.lazy");
		if (picture) {
			picture.classList.remove("loading");
		}
	},
});

// Обновить модуль
//lazyMedia.update();
