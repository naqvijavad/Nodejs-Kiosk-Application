/*!
* Start Bootstrap - Clean Blog v6.0.8 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
    // this is for validating the "name"
		var name = $("#firstName").val().trim();
		if (name == "") {
			$("#firstName").next().text(
				"Please enter a valid name.");
			isValid = false;
		}
		else {
			$("#firstName").next().text("");
		}
		$("#firstName").val(name);

        // this is for validating the "name"
		var name = $("#lasttName").val().trim();
		if (name == "") {
			$("#lastName").next().text(
				"Please enter a valid name.");
			isValid = false;
		}
		else {
			$("#lastName").next().text("");
		}
		$("#lastName").val(name);

       



		


		
})
