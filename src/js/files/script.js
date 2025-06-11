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
