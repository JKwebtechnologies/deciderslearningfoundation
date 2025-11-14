


$(function () {
"use strict";


	// data - background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
	});

	// contact-form 
	$(".contact-btn").on('click', function () {
		$(".contact-wrapper").addClass("show");
	});
	$(".close").on('click', function () {
		$(".contact-wrapper").removeClass("show");
	});

	// contact-form-28
	$("#contact-btn").on('click', function () {
		$("#contact-wrapper").addClass("show");
	});
	$(".close").on('click', function () {
		$("#contact-wrapper").removeClass("show");
	});
	// subscribe-form-28
	$("#subscribe-btn").on('click', function () {
		$("#subscribe-wrapper").addClass("show");
	});
	$(".close").on('click', function () {
		$("#subscribe-wrapper").removeClass("show");
	});

	// sidebar
	$(".menu-toggle-btn").on('click', function () {
		$(".sidebar").addClass("show");
	});
	$(".close").on('click', function () {
		$(".sidebar").removeClass("show");
	});

	//Scroll top 
	$(".scroll-top").click(function () {
		$("html,body").animate({ scrollTop: 0 }, 1000);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn(); }
		else {
			$(".scroll-top").fadeOut();
		}
	});

	//Countdown

    // $('[data-countdown]').each(function () {
	// 	var $this = $(this),
	// 		finalDate = $(this).data('countdown');
	// 	$this.countdown(finalDate, function (event) {
	// 		$this.html(event.strftime('<div class="countdown d-flex"><div class="single-count-content"><span class="count">%D</span><p class="text">Days</p></div><div class="single-count-content"><span class="count">%H</span><p class="text">Hours</p></div><div class="single-count-content"><span class="count">%M</span><p class="text">Minutes</p></div><div class="single-count-content"><span class="count">%S</span><p class="text">Seconds</p></div></div>'));
	// 	});
	// });

	function startCountdown() {
    const el = document.getElementById("countdown");
    const targetDate = new Date(el.getAttribute("data-countdown")).getTime();

    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
            el.innerHTML = "Countdown Finished!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        el.innerHTML = `
            <div class="countdown d-flex"><div class="single-count-content"><span class="count">${days}</span><p class="text">Days</p></div><div class="single-count-content"><span class="count">${hours}</span><p class="text">Hours</p></div><div class="single-count-content"><span class="count">${minutes}</span><p class="text">Minutes</p></div><div class="single-count-content"><span class="count">${seconds}</span><p class="text">Seconds</p></div></div>
        `;
    }

    update();                // initial call
    setInterval(update, 1000);  // update every second
}

startCountdown();

	// WOW active
	new WOW().init();

});	

