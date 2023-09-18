const buttons = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		button.parentNode.classList.toggle("active");
	});
});
