$(function() {
	/* FAQ Accordion */
	const questions = document.querySelectorAll(".question__item");
	const images = document.querySelectorAll(".question__img");

	questions.forEach((question) => {
		question.addEventListener('click', (e) => {
			question.classList.toggle('active');
			if (question.classList.contains('active')) {
		        question.querySelector('img').src = 'img/minus.png';
		    } else {
		    	question.querySelector('img').src = 'img/plus.svg';
		    }
		});
	});

	/* Contact Tabs */
	const buttons = document.querySelectorAll('.contact-tabs__item');
	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {
			e.preventDefault();
		});
	});

	/* Slider */
	$('.slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

});