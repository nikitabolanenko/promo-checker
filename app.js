let choicePanel = `<div class="choice-panel">
						<div class="btn yes">Да</div>
						<div class="btn cancel">Отмена</div>
					</div>`

let infoEmpty = `<p class="info empty">Промокод не найден!</p>`
let infoWasActivated = `<p class="info was-activated">Промокод был <br> активирован!</p>`

let checkButton = document.querySelector(".btn.check")
let checkerMenu = document.querySelector(".checker-menu")
let activateButton = document.querySelector(".btn.activate")
let baseInfo = document.querySelector(".info.base")
let promocodeInput = document.querySelector("#promo-code")

function initChoicePanelButtons(){
	let yesButton = document.querySelector(".btn.yes")
	let cancelButton = document.querySelector(".btn.cancel")
	checkButton.disabled = true

	yesButton.addEventListener('click', function(e){
		console.log(e)
		baseInfo.style.display = 'none'
		document.querySelector(".choice-panel").remove()
		checkerMenu.insertAdjacentHTML('beforeend', infoWasActivated)
		checkButton.disabled = false
	})

	cancelButton.addEventListener('click', function(e){
		console.log(e)
		document.querySelector(".choice-panel").remove()
		activateButton.style.display = "block"
		checkButton.disabled = false
	})
}

checkButton.addEventListener('click', function(e){
	if (promocodeInput.value.length === 9){
		console.log(e)
		if (document.querySelector(".info.was-activated") != null) {
			document.querySelector(".info.was-activated").remove()
		}
		checkerMenu.style.visibility = 'visible'
		baseInfo.style.display = 'block'
		activateButton.style.display = "block"
	}
})

activateButton.addEventListener('click', function(e){
	console.log(e)
	activateButton.style.display = 'none'
	checkerMenu.insertAdjacentHTML('beforeend', choicePanel)
	initChoicePanelButtons()
})

promocodeInput.addEventListener('input', function(e) {
	this.value = this.value.toUpperCase()
	let maxLength = 9
	if (this.value.length > maxLength) {
		this.value = this.value.slice(0, maxLength);
	}
})