// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
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
