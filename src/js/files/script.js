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
				duration: 0.8,
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

if (videoWrappers) {
	videoWrappers.forEach((wrapper) => {
		const video = wrapper.querySelector("video");
		const playButton = wrapper.querySelector(".btn-play");
		const source = video.querySelector("source");

		if (playButton) {
			// Проверяем, что playButton не null
			playButton.addEventListener("click", () => {
				if (!source.src) {
					source.src = source.dataset.src;
					video.load();
				}

				video.play();
				video.setAttribute("controls", "controls");

				playButton.style.display = "none";
			});
		}
	});
}
