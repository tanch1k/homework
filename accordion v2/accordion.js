function init(){
	var titles = document.getElementsByClassName('b-accordion__title'),
		activeEl;

	function setActive() {

		if (this.classList.contains('show')) {
			this.classList.remove('show');
			activeEl = null;
		} else {
			
			if(activeEl){
				activeEl.classList.remove('show');
			}

			this.classList.add('show');
			activeEl = this;
		}
		
	}


	for (var i = 0; i < titles.length; i++) {
		var title = titles[i];

		title.addEventListener("click", setActive);
	}
};
init();