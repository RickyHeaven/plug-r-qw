/**
 * t('XXX',...arg)
 *  去掉XXX中双花括号，或替换%{XXX}为arg[XXX]，arg为t('XXX',...arg)中arg
 *  如果XXX没有花括号，则返回XXX本身
 */

const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

function hasOwn(obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key)
}

export default function (string, ...args) {
	if (args.length === 1 && typeof args[0] === 'object') {
		args = args[0]
	}

	if (!args || !args.hasOwnProperty) {
		args = {}
	}

	return string.replace(RE_NARGS, (match, prefix, i, index) => {
		let result

		if (string[index - 1] === '{' && string[index + match.length] === '}') {
			return i
		} else {
			result = hasOwn(args, i) ? args[i] : null
			if (result === null || result === undefined) {
				return ''
			}

			return result
		}
	})
}
