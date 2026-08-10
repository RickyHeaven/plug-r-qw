let count = 0
let loader = null

function createLoader() {
	if (!loader) {
		loader = document.createElement('div')
		loader.setAttribute('class', 'spinModal')
		loader.innerHTML =
			'<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10" /></svg></div>'

		const body = document.getElementsByTagName('body')[0]
		if (body) {
			body.append(loader)
		} else if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', () => {
				document.getElementsByTagName('body')[0] && document.getElementsByTagName('body')[0].append(loader)
			})
		}
	}
	return loader
}

if (typeof document !== 'undefined') {
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', () => {
			createLoader()
		})
	} else {
		createLoader()
	}
}

/**
 * 开关spin
 * @param d 开为：true，关：不传
 */
export function toggleSpin(d) {
	const loaderEl = loader || createLoader()
	if (d) {
		loaderEl.classList.add('show')
	} else {
		loaderEl.classList.remove('show')
	}
}

/**
 * 网络请求计数
 * @param d 增加计数：true，减少计数：不传
 */
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