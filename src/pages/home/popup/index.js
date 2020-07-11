import './index.sass'

export default ()=> {

	const popup = document.querySelector('.popup'),
		  firstModal = document.querySelector('.popup__wrapper'),
		  secondModal = document.querySelector('.popup__fon'),
		  buttonStart = document.querySelector('.header__online'),
		  buttonOpen = document.querySelector('.pincet__button'),
		  buttonClose = document.querySelector('.popup__wrapper .popup__close'),
		  buttonSumbit = document.querySelector('.popup__btn'),
		  buttonCloseSecond = document.querySelector('.popup__fon .popup__close')

	let popupDrop = document.getElementById('choise'),
		listPopup = document.querySelector('.popup__list')


	buttonStart.onclick = function() {
		popup.classList.add("popup__show")
		firstModal.classList.add("popup__animation")
		return false
		
	}

	buttonOpen.onclick = function() {
		popup.classList.add("popup__show")
		firstModal.classList.add("popup__animation")
		return false
	}

	buttonClose.onclick = function(){
		firstModal.classList.remove("popup__animation")
		firstModal.classList.add("popup__close--popup")

		setTimeout(function() {
			popup.classList.remove("popup__show")
			firstModal.classList.remove("popup__close--popup")
		},1000)

	}

	buttonSumbit.onclick = function() {
		firstModal.classList.remove("popup__animation")
		firstModal.classList.add("popup__close--popup")
		setTimeout(function() {
			firstModal.classList.remove("popup__close--popup")
			secondModal.classList.add('popup__animation')
		},1000)
		return false
	}

	buttonCloseSecond.onclick = function() {
		secondModal.classList.remove("popup__animation")
		secondModal.classList.add("popup__close--popup")

		setTimeout(function() {
			popup.classList.remove("popup__show")
			secondModal.classList.remove("popup__close--popup")
		},1000)
	}

	popupDrop.onclick = function(){
		if(this.classList.contains('popup__input--open')) {
			popupDrop.classList.remove('popup__input--open')
			listPopup.classList.remove('popup__list--open')
		}else{
			popupDrop.classList.add('popup__input--open')
			listPopup.classList.add('popup__list--open')
		}
	}
	
	listPopup.onclick = function (e){
		let elem = event.srcElement || e.target
		while (elem.tagName != "LI" && elem) {
			elem = elem.parentNode
		}
		popupDrop.value = elem.innerHTML
		setTimeout(function(){
			popupDrop.classList.remove('popup__input--open')
			listPopup.classList.remove('popup__list--open')
		},100)

		
	}

}