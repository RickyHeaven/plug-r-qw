import tablePrint from './tablePrint'

/**
 * @description 打印Dom(网页指定的内容)
 * @param {Array} data 要打印的dom数据，一般使用dom操作获取dom，然后将其outerHTML作为data传进去就行
 * @param {String} title 标题(如打印为PDF将是默认文件名)
 * @param {Object} config 打印设置，目前支持：1.customClass,用于定制打印页面样式；2.autoPrint,是否直接打印；3.width,dom容器宽度（打印内容将放在这个容器进行打印）
 * 注意：
 * 1.data只是dom,要打印出带样式的dom，需要将要打印的dom相关样式设置成全局样式，而且这些样式无需进入调用打印的页面即可生效。
 * 2.不要限制要打印的dom的高度（实在需要限制可在原来的页面写成局部样式，不要影响打印页面高度），否则无法正常分页打印出全部内容。
 */
function _p(data, title, config = {}) {
	config.domPrint = true
	if (!config.width) {
		config.width = 715
	}
	tablePrint.print([], data, title, config)
}

export default _p
