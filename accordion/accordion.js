function init(){
	var titles = document.getElementsByClassName('b-accordion__title'),
		activeEl;

	function setActive() {
		var nextEl = this.nextElementSibling; 
		if(activeEl){
			activeEl.classList.remove('show');
		}
		nextEl.classList.add('show');
		activeEl = nextEl;
	}


	for (var i = 0; i < titles.length; i++) {
		var title = titles[i];

		title.addEventListener("click", setActive);
	}
};
init();