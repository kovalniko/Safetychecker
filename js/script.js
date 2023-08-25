"use strict";

const domainsBtn = document.querySelector('.domains__btn');

domainsBtn.addEventListener("click", function (e) {
	const items = document.querySelectorAll('.domains__item_mobile-hide');
	if (items.length > 0) {
		for (let item of items) {
			item.classList.add("_active");
		}
		domainsBtn.style.display = "none";
	}
});

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