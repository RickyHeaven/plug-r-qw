export const isClient = typeof window !== 'undefined'

export default {
	bind(el, binding) {
		el.__vueClickOutsideBinding__ = binding

		function documentHandler(e) {
			if (el.contains(e.target)) {
				return false
			}
			if (el.__vueClickOutsideBinding__ && el.__vueClickOutsideBinding__.value) {
				el.__vueClickOutsideBinding__.value(e)
			}
		}

		el.__vueClickOutside__ = documentHandler
		isClient && document.addEventListener('click', documentHandler)
	},
	update(el, binding) {
		el.__vueClickOutsideBinding__ = binding
	},
	unbind(el) {
		isClient && document.removeEventListener('click', el.__vueClickOutside__)
		delete el.__vueClickOutside__
		delete el.__vueClickOutsideBinding__
	}
}