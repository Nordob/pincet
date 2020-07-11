import './index.sass'

export default ()=> {
	const headerPopup = document.querySelector('.contact'),
		  headerModal = document.querySelector('.contact__wrapper'),
		  buttonStartHeader = document.querySelector('.header__button--popup'),
		  buttonCloseHeader = document.querySelector('.contact__close')
	

	buttonStartHeader.onclick = function() {
		headerPopup.classList.add("contact__show")
		headerModal.classList.add("contact__animation")
		return false
	}

	buttonCloseHeader.onclick = function(){
		headerModal.classList.remove("contact__animation")
		headerModal.classList.add("contact__close--popup")

		setTimeout(function() {
			headerPopup.classList.remove("contact__show")
			headerModal.classList.remove("contact__close--popup")
		},1000)
	}

}