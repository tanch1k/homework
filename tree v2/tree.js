document.addEventListener("DOMContentLoaded", function(e) { 
	function init(){
		var items = document.getElementsByTagName('li');

		function setOpen() {
			var elemParent = this.parentNode;

			elemParent.classList.toggle('active');

			/*if (elemParent.classList.contains('b-tree__item_opened')) {
				elemParent.classList.remove('b-tree__item_opened');
				elemParent.classList.add('b-tree__item_closed');
			}
			else {
				elemParent.classList.remove('b-tree__item_closed');
				elemParent.classList.add('b-tree__item_opened');
			}*/
		}

		for (var i = 0; i < items.length; i++) {
			var item = items[i],
				children = item.getElementsByTagName('ul');

			if (children && children.length > 0) {
				item.classList.add('hasChildren');

				var clickElem = item.children[0];
				clickElem.addEventListener('click', setOpen);
			};
			
		}
	};
	init();
});
