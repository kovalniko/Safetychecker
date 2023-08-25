"use strict";

window.addEventListener("load", function (e) {
	const four = document.querySelector('.animate__animated');
	if (!four.classList.contains('animate__hinge')) {
		four.classList.add('animate__hinge');
	}

	function changeAnimation() {
		four.classList.toggle('animate__hinge');
		four.classList.toggle('animate__fadein');
	}

	setInterval(changeAnimation, 3000);
})