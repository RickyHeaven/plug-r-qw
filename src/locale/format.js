/**
 * @description 国际化字符串格式化
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2020.10.14
 *
 * t('XXX',...arg)
 *  去掉XXX中双花括号，或替换%{XXX}为arg[XXX]，arg为t('XXX',...arg)中arg
 *  如果XXX没有花括号，则返回XXX本身
 */

const REG_NAME = /(%|){([0-9a-zA-Z_]+)}/g

export default function () {
	function hasOwn(obj, key) {
		return Object.prototype.hasOwnProperty.call(obj, key)
	}

	/**
	 * template
	 *
	 * @param {String} string
	 * @param {Array} a
	 * @return {String}
	 */

	function template(string, ...a) {
		let args
		if (a.length === 1 && typeof a[0] === 'object') {
			args = a[0]
		}

		if (!args || !args.hasOwnProperty) {
			args = {}
		}
		if (string === undefined) {
			return ''
		}

		return string.replace(REG_NAME, (match, prefix, i, index) => {
			let result

			if (string[index - 1] === '{' && string[index + match.length] === '}') {
				return i
			} else {
				result = hasOwn(args, i) ? args[i] : null

				return result ?? ''
			}
		})
	}

	return template
}
