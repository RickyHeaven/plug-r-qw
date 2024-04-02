let count = 0
let loader = document.createElement('div')
loader.setAttribute('class', 'spinModal')

loader.innerHTML =
	'<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>'

window.onload = function () {
	document.getElementsByTagName('body')[0].append(loader)
}

export function toggleSpin(d) {
	if (d) {
		loader.classList.add('show')
	} else {
		loader.classList.remove('show')
	}
}

export function counts(d) {
	let t = count
	if (d) {
		count++
	} else if (count > 0) {
		count--
	}

	if (t !== count) {
		if (count === 0) {
			toggleSpin(false)
		} else if (t === 0) {
			toggleSpin(true)
		}
	}
}
