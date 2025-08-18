// Подключение функционала "Чертоги Фрилансера"
import { isMobile, bodyLockStatus, bodyUnlock, bodyLock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll("form").forEach(function (form) {
		const checkbox = form.querySelector('input[type="checkbox"][name="personal_data_agreement"]');
		const button = form.querySelector('button[type="submit"]');
		if (!checkbox || !button) return;
		const toggleButton = () => {
			button.disabled = !checkbox.checked;
		};
		toggleButton();
		checkbox.addEventListener("change", toggleButton);
	});
});

const menuItems = document.querySelectorAll(".modal-menu__list li.menu-item-has-children");

menuItems.forEach((item) => {
	const submenu = item.querySelector(".sub-menu");

	item.addEventListener("click", function (e) {
		const isOpen = item.classList.contains("open");

		// Закрываем все
		menuItems.forEach((el) => {
			const elSub = el.querySelector(".sub-menu");
			el.classList.remove("open");
			if (elSub) {
				elSub.style.height = "0px";
			}
		});

		// Если кликнули по уже открытому — не открываем заново
		if (!isOpen && submenu) {
			item.classList.add("open");
			submenu.style.height = submenu.scrollHeight + "px";
		}
	});
});

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const mapContainer = document.querySelector(".map-container");
const cityItems = [...document.querySelectorAll(".cityItem")];

// Сортируем, чтобы "Санкт-Петербург" был первым
cityItems.sort((a, b) => {
	if (a.dataset.cityId === "26") return -1;
	if (b.dataset.cityId === "26") return 1;
	return 0;
});

// Timeline создаём, но запускаем внутри ScrollTrigger
let tl;

ScrollTrigger.create({
	trigger: mapContainer,
	start: "top 80%",
	once: true,
	onEnter: () => {
		tl = gsap.timeline({ repeat: -1 });

		cityItems.forEach((item, index) => {
			tl.to(
				{},
				{
					duration: 1.5,
					onStart: () => item.classList.add("is-active"),
					onComplete: () => item.classList.remove("is-active"),
				}
			);
		});
	},
});

const animateElementsOnScroll = () => {
	const elements = document.querySelectorAll(".is-fade-down");

	elements.forEach((el) => {
		const delay = parseFloat(el.dataset.delay) || 0;

		gsap.fromTo(
			el,
			{ opacity: 0, y: 60 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				delay: delay,
				ease: "power2.out",
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					toggleActions: "play none none none",
				},
			}
		);
	});
};

document.addEventListener("DOMContentLoaded", animateElementsOnScroll);

document.addEventListener("DOMContentLoaded", () => {
	document.body.style.opacity = "1";
});

const videoWrappers = document.querySelectorAll(".video-wrapper");

if (videoWrappers.length > 0) {
	videoWrappers.forEach((wrapper) => {
		const video = wrapper.querySelector("video");
		const playButton = wrapper.querySelector(".btn-play");

		// Если видео отсутствует — пропускаем
		if (!video || !playButton) return;

		const source = video.querySelector("source");
		if (!source) return;

		playButton.addEventListener("click", () => {
			if (!source.src) {
				source.src = source.dataset.src;
				video.load();
			}

			video.play();
			video.setAttribute("controls", "controls");
			playButton.style.display = "none";
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const section = document.querySelector(".advantages-work");
	if (!section) return; // Выходим, если секции нет

	const items = gsap.utils.toArray(".advantages-work .item");
	if (!items.length) return; // Выходим, если нет элементов

	let tl = null;
	let isMobile = window.innerWidth < 768;
	let isAnimationPlayed = false;

	// Группы для аккордеона: [заголовок, содержимое]
	const accordionGroups = [
		{ header: 0, content: [1, 2, 3, 4, 5, 6] },
		{ header: 7, content: [8, 9, 10, 11, 12] },
		{ header: 13, content: [14, 15, 16] },
	];

	const createDesktopAnimation = () => {
		if (tl) tl.kill();

		tl = gsap.timeline({
			paused: true,
			defaults: { ease: "power2.out" },
			onComplete: () => {
				isAnimationPlayed = true;
			},
		});

		items.forEach((item, index) => {
			tl.fromTo(item, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }, index * 0.6);

			const arrow1 = item.querySelector(".arrow-1");
			const arrow2 = item.querySelector(".arrow-2");

			if (arrow1) {
				tl.fromTo(arrow1, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 }, index * 0.6 + 0.4);
			}

			if (arrow2) {
				const appearStep = parseInt(item.dataset.arrow2Step, 10);
				if (!isNaN(appearStep) && appearStep > index + 1 && appearStep <= items.length) {
					tl.fromTo(arrow2, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5 }, (appearStep - 1) * 0.6 + 0.4);
				}
			}
		});
	};

	const setupDesktop = () => {
		if (!items.length) return;

		if (tl) {
			tl.kill();
			tl = null;
		}

		items.forEach((item) => {
			if (!item) return;
			item.onclick = null;
			item.style.cursor = "";
			item.classList.remove("accordion-header", "accordion-content", "accordion-open");

			const headerSpan = item.querySelector("span");
			if (headerSpan) {
				const indicator = headerSpan.querySelector(".accordion-indicator");
				if (indicator) indicator.remove();
			}

			gsap.set(item, { clearProps: "all" });
			item.style.display = "block";
		});

		isAnimationPlayed = false;
		createDesktopAnimation();

		const rect = section.getBoundingClientRect();
		const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

		if (isInViewport && tl) {
			tl.play();
		} else if (observer && section) {
			observer.observe(section);
		}
	};

	const setupMobileAccordion = () => {
		if (!items.length) return;

		if (tl) {
			tl.kill();
			tl = null;
		}

		items.forEach((item) => {
			if (!item) return;
			gsap.set(item, { clearProps: "all" });

			const arrow1 = item.querySelector(".arrow-1");
			const arrow2 = item.querySelector(".arrow-2");

			[arrow1, arrow2].forEach((arrow) => {
				if (arrow) {
					gsap.set(arrow, { clearProps: "all" });
					arrow.style.transform = "translate3d(0px, 0px, 0px)";
					arrow.style.opacity = "1";
					arrow.style.translate = "none";
					arrow.style.rotate = "none";
					arrow.style.scale = "none";
				}
			});

			item.classList.remove("accordion-header", "accordion-content", "accordion-open");
		});

		accordionGroups.forEach((group) => {
			const headerItem = items[group.header];
			if (!headerItem) return;

			headerItem.classList.add("accordion-header");
			headerItem.style.display = "block";
			headerItem.style.cursor = "pointer";

			const headerSpan = headerItem.querySelector("span");
			if (headerSpan && !headerSpan.querySelector(".accordion-indicator")) {
				const indicator = document.createElement("span");
				indicator.className = "accordion-indicator";
				indicator.innerHTML = " ▼";
				indicator.style.fontSize = "0.8em";
				indicator.style.marginLeft = "10px";
				indicator.style.transition = "transform 0.3s ease";
				headerSpan.appendChild(indicator);
			}

			group.content.forEach((contentIndex) => {
				const contentItem = items[contentIndex];
				if (contentItem) {
					contentItem.classList.add("accordion-content");
					contentItem.style.display = "none";
				}
			});

			headerItem.onclick = () => {
				const isOpen = headerItem.classList.contains("accordion-open");
				const headerSpan = headerItem.querySelector("span");
				const indicator = headerSpan ? headerSpan.querySelector(".accordion-indicator") : null;

				group.content.forEach((contentIndex) => {
					const contentItem = items[contentIndex];
					if (contentItem) {
						contentItem.style.display = isOpen ? "none" : "block";
					}
				});

				if (isOpen) {
					headerItem.classList.remove("accordion-open");
					if (indicator) indicator.style.transform = "rotate(0deg)";
				} else {
					headerItem.classList.add("accordion-open");
					if (indicator) indicator.style.transform = "rotate(180deg)";
				}
			};
		});
	};

	const handleResize = () => {
		const newIsMobile = window.innerWidth < 768;
		if (newIsMobile !== isMobile) {
			isMobile = newIsMobile;
			if (observer && section) observer.unobserve(section);
			if (isMobile) setupMobileAccordion();
			else setupDesktop();
		}
	};

	let observer = null;
	if (section) {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isMobile && tl && !isAnimationPlayed) {
						tl.play();
						if (observer && section) observer.unobserve(section);
					}
				});
			},
			{ threshold: 0.3 }
		);
	}

	if (isMobile) setupMobileAccordion();
	else {
		setupDesktop();
		if (observer && section) observer.observe(section);
	}

	let resizeTimer;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(handleResize, 100);
	});
});
