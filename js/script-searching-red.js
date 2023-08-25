"use strict";

const similarBtn = document.querySelector('.similar__btn');
similarBtn.addEventListener("click", function (e) {
	const items = document.querySelectorAll('.similar__item_mobile-hide');
	if (items.length > 0) {
		for (let item of items) {
			item.classList.add("_active");
		}
		similarBtn.style.display = "none";
	}
});

const typosBtn = document.querySelector('.typos__btn');
typosBtn.addEventListener("click", function (e) {
	const items = document.querySelectorAll('.typos__item_mobile-hide');
	if (items.length > 0) {
		for (let item of items) {
			item.classList.add("_active");
		}
		typosBtn.style.display = "none";
	}
});

// ==== Всплывающее окно тревоги ====

const popupLinks = document.querySelectorAll('.searching__form button');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 500;

window.addEventListener("load", function (e) {
	const curentPopup = document.getElementById('popup-alert');
	popupOpen(curentPopup);
	e.preventDefault();
	setTimeout(() => curentPopup.classList.remove('open'), 5000);
	setTimeout(() => body.classList.remove('lock'), 5000);
})

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup-alert'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup-alert.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup-alert__content')) {
				popupClose(e.target.closest('.popup-alert'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup-alert.open');
		popupClose(popupActive);
	}
});

(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

// ==== Очистка полей ввода в момент фокуса на них ====

const inputs = document.querySelectorAll('input');

if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const elem = inputs[index];
		let text;
		elem.addEventListener("focus", function (e) {
			text = elem.placeholder;
			elem.placeholder = "";
		});
		elem.addEventListener("blur", function (e) {
			elem.placeholder = text;
		});
	}
}