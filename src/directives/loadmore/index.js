/**
 * @description 滚动加载更多指令，常用于select下拉滚动监听
 * @author Ricky email:zhangqingcq@foxmail.com
 * @created 2023.04.27
 */

export default {
	bind(el, binding) {
		// 获取定义好的scroll盒子
		let SELECT_DOM

		if (binding.arg) {
			SELECT_DOM = el.querySelector('.' + binding.arg)
		} else {
			SELECT_DOM = el.querySelector('.ivu-select-dropdown') || el
		}

		const scrollHandler = function () {
			/*
			 * scrollHeight 获取元素内容高度(只读)
			 * scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
			 * clientHeight 读取元素的可见高度(只读)
			 * 如果元素滚动到底, 下面等式返回true, 没有则返回false:
			 * ele.scrollHeight - ele.scrollTop === ele.clientHeight;
			 */
			if (this.scrollTop > 0 && this.scrollHeight - this.scrollTop <= this.clientHeight) {
				if (binding.value && typeof binding.value === 'function') {
					binding.value()
				}
			}
		}

		SELECT_DOM.addEventListener('scroll', scrollHandler)
		el.__loadmoreScrollHandler__ = scrollHandler
		el.__loadmoreSelectDom__ = SELECT_DOM
	},
	unbind(el) {
		if (el.__loadmoreSelectDom__ && el.__loadmoreScrollHandler__) {
			el.__loadmoreSelectDom__.removeEventListener('scroll', el.__loadmoreScrollHandler__)
		}
		delete el.__loadmoreScrollHandler__
		delete el.__loadmoreSelectDom__
	}
}