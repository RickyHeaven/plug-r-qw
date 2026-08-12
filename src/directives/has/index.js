/**
 * @description 权限控制指令，用于根据权限显示/隐藏元素
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */
import { hasPermission } from '../../utils/functionGroup.js'

export default {
	bind(el, binding) {
		if (binding.value && !hasPermission(binding.value)) {
			el.style.display = 'none'
		}
	}
}