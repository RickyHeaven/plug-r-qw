/**
 * @description 文件导出接口
 * @author Ricky zhangqingcq@foxmail.com
 * @created 2026.07.28
 */

const express = require('express')
const router = express.Router()
const ExcelJS = require('exceljs')
const { _get } = require('./database')

/**
 * 生成 Excel 并返回
 * @param {number} delay 延时毫秒数
 */
async function exportExcel(res, delay = 0) {
	try {
		if (delay > 0) {
			await new Promise((resolve) => setTimeout(resolve, delay))
		}

		const workbook = new ExcelJS.Workbook()
		const worksheet = workbook.addWorksheet('数据导出')

		worksheet.columns = [
			{ header: 'ID', key: 'id', width: 10 },
			{ header: '文件名称', key: 'name', width: 30 },
			{ header: '文件类型', key: 'mimeType', width: 30 },
			{ header: '文件大小', key: 'size', width: 15 },
			{ header: '备注', key: 'remark', width: 30 }
		]

		const headerRow = worksheet.getRow(1)
		headerRow.font = { bold: true }
		headerRow.fill = {
			type: 'pattern',
			pattern: 'solid',
			fgColor: { argb: 'FFD3D3D3' }
		}

		const result = _get('bt-table-page', 1, -1)
		result.data.forEach((item) => {
			worksheet.addRow({
				id: item.id,
				name: item.name,
				mimeType: item.mimeType,
				size: item.size,
				remark: item.remark
			})
		})

		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
		res.setHeader('Content-Disposition', 'attachment; filename="btTablePage_export.xlsx"')

		await workbook.xlsx.write(res)
		res.end()
	} catch (err) {
		console.error('Excel导出错误:', err)
		res.status(500).send({
			code: -1,
			message: 'Excel导出失败'
		})
	}
}

router.post('/export-excel', async function (req, res) {
	await exportExcel(res)
})

router.post('/export-excel-slow', async function (req, res) {
	await exportExcel(res, 5000)
})

module.exports = router