import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// Галерея Fancybox =================================
Fancybox.bind('[data-fancybox="gallery"]', {});

// Popup Fancybox =================================
const btnAplication = document.querySelectorAll("[data-aplication]");
btnAplication.forEach((btn) => {
	btn.addEventListener("click", () => {
		Fancybox.show([{ src: "#application", type: "inline" }]);
	});
});

// Popup успешной отправки формы
window.addEventListener(
	"wpcf7mailsent",
	function (event) {
		Fancybox.close();
		Fancybox.show([{ src: "#feedback-success", type: "inline" }]);
	},
	false
);
