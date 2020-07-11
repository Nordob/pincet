import "./index.sass"

export default ()=> {
	let menuDrop = document.querySelector('.menu__mobile'),
		menuText = document.querySelector('.menu__choise'),
		listDown = document.querySelector('.menu__list'),
		choiseMenu = document.querySelectorAll('.menu__link')

	menuDrop.onclick = function(){
		if(this.classList.contains('menu__mobile--open')) {
			menuDrop.classList.remove('menu__mobile--open')
			listDown.classList.remove('menu__list--open')
		}else{
			menuDrop.classList.add('menu__mobile--open')
			listDown.classList.add('menu__list--open')
		}
	}

	listDown.onclick = function (e){
		let elem = event.srcElement || e.target
		while (elem.tagName != "LI" && elem) {
			elem = elem.parentNode
		}
		menuText.innerHTML = elem.firstChild.innerHTML
		menuDrop.classList.remove('menu__mobile--open')
		listDown.classList.remove('menu__list--open')

	}

}