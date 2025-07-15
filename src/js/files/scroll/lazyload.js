import LazyLoad from "vanilla-lazyload";

// Работает с объектами с классом ._lazy
const lazyMedia = new LazyLoad({
	elements_selector: "[data-src],[data-srcset]",
	class_loaded: "loaded",

	callback_enter: (el) => {
		const picture = el.closest("picture.lazy");
		if (picture) picture.classList.add("loading");
		const video = el.closest("video.lazy");
		if (video) video.classList.add("loading");
	},

	callback_loaded: (el) => {
		// Поддержка видео
		if (el.tagName === "VIDEO") {
			const src = el.getAttribute("data-src");
			if (src) {
				el.src = src;
				el.load();
				el.play();
			}
		}

		const picture = el.closest("picture.lazy");
		if (picture) picture.classList.remove("loading");

		const video = el.closest("video.lazy");
		if (video) video.classList.remove("loading");
	},
});

// Обновить модуль
//lazyMedia.update();
