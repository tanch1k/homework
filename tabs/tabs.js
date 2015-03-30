function init(){
	var links = document.getElementsByClassName('b-tabs__nav-link'),
		activeNav = document.getElementsByClassName('b-tabs__nav-item_state_active')[0],
		activeContent = document.getElementsByClassName('b-tabs__content_state_active')[0];

	function setActive() {
		var activeId = this.getAttribute('href').replace('#', ''),
			linkParent = this.parentNode,
			contentEl = document.getElementById(activeId);

		linkParent.classList.add('b-tabs__nav-item_state_active');
		contentEl.classList.add('b-tabs__content_state_active');

		if (activeNav) {
			activeNav.classList.remove('b-tabs__nav-item_state_active');
		}

		if (activeContent) {
			activeContent.classList.remove('b-tabs__content_state_active');
		}

		activeNav = linkParent;
		activeContent = contentEl;

		return false;

	}

	for (var i = 0; i < links.length; i++) {
		var link = links[i];

		link.addEventListener('click', setActive);
	}
};
init();