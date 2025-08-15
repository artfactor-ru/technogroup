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

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".advantages-work");
    const items = gsap.utils.toArray(".advantages-work .item");

    let tl = null;
    let isMobile = window.innerWidth < 768;
    let isAnimationPlayed = false;

    // Группы для аккордеона: [заголовок, содержимое]
    const accordionGroups = [
        {
            header: 0, // step-1 (индекс 0)
            content: [1, 2, 3, 4, 5, 6] // step-2 до step-7
        },
        {
            header: 7, // step-8 (индекс 7) 
            content: [8, 9, 10, 11, 12] // step-9 до step-13
        },
        {
            header: 13, // step-14 (индекс 13)
            content: [14, 15, 16] // step-15 до step-17
        }
    ];

    const createDesktopAnimation = () => {
        if (tl) tl.kill();
        
        tl = gsap.timeline({ 
            paused: true, 
            defaults: { ease: "power2.out" },
            onComplete: () => { isAnimationPlayed = true; }
        });

        items.forEach((item, index) => {
            tl.fromTo(
                item,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8 },
                index * 0.6
            );

            const arrow1 = item.querySelector(".arrow-1");
            const arrow2 = item.querySelector(".arrow-2");

            if (arrow1) {
                tl.fromTo(
                    arrow1,
                    { opacity: 0, scale: 0.8 },
                    { opacity: 1, scale: 1, duration: 0.5 },
                    index * 0.6 + 0.4
                );
            }

            if (arrow2) {
                const appearStep = parseInt(item.dataset.arrow2Step, 10);
                if (!isNaN(appearStep) && appearStep > index + 1 && appearStep <= items.length) {
                    tl.fromTo(
                        arrow2,
                        { opacity: 0, scale: 0.8 },
                        { opacity: 1, scale: 1, duration: 0.5 },
                        (appearStep - 1) * 0.6 + 0.4
                    );
                }
            }
        });
    };

    const setupDesktop = () => {
        // Убиваем предыдущую анимацию
        if (tl) {
            tl.kill();
            tl = null;
        }
        
        // Полный сброс всех стилей и обработчиков
        items.forEach(item => {
            item.onclick = null;
            item.style.cursor = "";
            item.classList.remove("accordion-header", "accordion-content", "accordion-open");
            
            // Удаляем индикаторы аккордеона
            const headerSpan = item.querySelector("span");
            if (headerSpan) {
                const indicator = headerSpan.querySelector(".accordion-indicator");
                if (indicator) {
                    indicator.remove();
                }
            }
            
            // Полный сброс всех стилей
            gsap.set(item, { clearProps: "all" });
            item.style.display = "block"; // Показываем все элементы
        });

        // Сбрасываем флаг анимации при переходе с мобильного
        isAnimationPlayed = false;
        
        // Создаем новую анимацию
        createDesktopAnimation();
        
        // Если секция уже в viewport, сразу запускаем анимацию
        const rect = section.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport && tl) {
            tl.play();
        } else {
            // Иначе подключаем observer
            observer.observe(section);
        }
    };

    const setupMobileAccordion = () => {
        // Убиваем GSAP анимацию
        if (tl) {
            tl.kill();
            tl = null;
        }

        // Сброс GSAP стилей для всех элементов и их дочерних элементов
        items.forEach(item => {
            gsap.set(item, { clearProps: "all" });
            
            // Сбрасываем стили для arrow-1 и arrow-2
            const arrow1 = item.querySelector(".arrow-1");
            const arrow2 = item.querySelector(".arrow-2");
            
            if (arrow1) {
                gsap.set(arrow1, { clearProps: "all" });
                // Принудительно устанавливаем нормальные стили
                arrow1.style.transform = "translate3d(0px, 0px, 0px)";
                arrow1.style.opacity = "1";
                arrow1.style.translate = "none";
                arrow1.style.rotate = "none";
                arrow1.style.scale = "none";
            }
            
            if (arrow2) {
                gsap.set(arrow2, { clearProps: "all" });
                // Принудительно устанавливаем нормальные стили
                arrow2.style.transform = "translate3d(0px, 0px, 0px)";
                arrow2.style.opacity = "1";
                arrow2.style.translate = "none";
                arrow2.style.rotate = "none";
                arrow2.style.scale = "none";
            }
            
            item.classList.remove("accordion-header", "accordion-content", "accordion-open");
        });

        // Настройка аккордеона
        accordionGroups.forEach((group, groupIndex) => {
            const headerItem = items[group.header];
            
            // Настройка заголовка
            headerItem.classList.add("accordion-header");
            headerItem.style.display = "block";
            headerItem.style.cursor = "pointer";
            
            // Добавляем индикатор внутрь span (если нужно)
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

            // Настройка содержимого
            group.content.forEach(contentIndex => {
                const contentItem = items[contentIndex];
                if (contentItem) {
                    contentItem.classList.add("accordion-content");
                    contentItem.style.display = "none";
                }
            });

            // Обработчик клика
            headerItem.onclick = () => {
                const isOpen = headerItem.classList.contains("accordion-open");
                const headerSpan = headerItem.querySelector("span");
                const indicator = headerSpan ? headerSpan.querySelector(".accordion-indicator") : null;
                
                if (isOpen) {
                    // Закрываем
                    headerItem.classList.remove("accordion-open");
                    if (indicator) {
                        indicator.style.transform = "rotate(0deg)";
                    }
                    group.content.forEach(contentIndex => {
                        const contentItem = items[contentIndex];
                        if (contentItem) {
                            contentItem.style.display = "none";
                        }
                    });
                } else {
                    // Открываем (можно сделать, чтобы закрывались другие группы)
                    headerItem.classList.add("accordion-open");
                    if (indicator) {
                        indicator.style.transform = "rotate(180deg)";
                    }
                    group.content.forEach(contentIndex => {
                        const contentItem = items[contentIndex];
                        if (contentItem) {
                            contentItem.style.display = "block";
                        }
                    });
                }
            };
        });
    };

    const handleResize = () => {
        const newIsMobile = window.innerWidth < 768;
        
        if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            
            // Отключаем observer при переключении режимов
            observer.unobserve(section);
            
            if (isMobile) {
                setupMobileAccordion();
            } else {
                setupDesktop();
            }
        }
    };

    // Intersection Observer для запуска анимации на десктопе
    let observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isMobile && tl && !isAnimationPlayed) {
                    tl.play();
                    observer.unobserve(section);
                }
            });
        },
        { threshold: 0.3 }
    );

    // Первоначальная настройка
    if (isMobile) {
        setupMobileAccordion();
    } else {
        setupDesktop();
        observer.observe(section);
    }

    // Обработчик изменения размера окна
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 100);
    });
});