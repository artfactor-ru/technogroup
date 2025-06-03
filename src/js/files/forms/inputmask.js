/* Маски для полей (в работе) */

// Подключение функционала "Чертоги Фрилансера"
// Подключение списке активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll("input");
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}

// Inputmask =========================================================
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach((input) => {
	if (input) {
		Inputmask({ mask: "+7 (999) 999-99-99" }).mask(input);
	}
});
