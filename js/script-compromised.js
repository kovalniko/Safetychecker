"use strict";

const compromiseBtn = document.querySelector('.compromised__btn');
if (compromiseBtn) {
	compromiseBtn.addEventListener("click", function (e) {
		const items = document.querySelectorAll('.compromised__item_mobile-hide');
		if (items.length > 0) {
			for (let item of items) {
				item.classList.add("_active");
			}
			compromiseBtn.style.display = "none";
		}
	});
}

const chooseDomain = document.querySelector('.compromised__choose');
const elem = document.querySelector(".compromised__choose-domain");
if (chooseDomain) {
	chooseDomain.addEventListener("click", function (e) {
		if (elem) {
			elem.classList.toggle("_active");
		}
	});
}

document.body.addEventListener("click", function (e) {
	const targetElement = e.target;
	if (!targetElement.closest('.compromised__choose-domain') && !targetElement.closest('.compromised__choose') && document.querySelector('.compromised__choose-domain._active')) {
		elem.classList.remove("_active");
	}
})

const btnDefault = document.querySelector(".compromised__choose-default");
const inputZone = document.querySelector("input[readonly]");

btnDefault.addEventListener("click", function (e) {
	if (inputZone) {
		//console.log(btnDefault.innerHTML);
		inputZone.value = "";
		elem.classList.remove("_active");
	}
})

document.querySelector(".compromised__options-button").addEventListener("click", function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.compromised__choose-btn')) {
		inputZone.value = targetElement.innerHTML;
		elem.classList.remove("_active");
	}
})

// ==== Очистка полей ввода в момент фокуса на них ====

const inputs = document.querySelectorAll('.editable');

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