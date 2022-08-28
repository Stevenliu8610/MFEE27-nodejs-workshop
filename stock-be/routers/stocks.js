const express = require('express')
const router = express.Router()
const pool = require('../utils/db')

router.get('/', async (req, res, next) => {
  console.log('/api/stocks')
  let [data] = await pool.execute('SELECT * FROM stocks')

  res.json(data)
})

router.get('/:stockId', async (req, res, next) => {
  const stockId = req.params.stockId

  let page = req.query.page || 1

  const perPage = 3

  let [total] = await pool.execute(
    'SELECT COUNT(*) AS total FROM stock_prices WHERE stock_id=?',
    [stockId]
  )

  total = total[0].total

  let lastPage = Math.ceil(total / perPage)

  const offset = perPage * (page - 1)

  let [data] = await pool.execute(
    'SELECT * FROM stock_prices WHERE stock_id = ? ORDER BY date LIMIT ? OFFSET ?',
    [stockId, perPage, offset]
  )

  res.json({
    pagination: {
      total, // 總共有幾筆
      perPage, // 一頁有幾筆
      page, // 目前在第幾頁
      lastPage, // 總頁數
    },
    data,
  })
})

module.exports = router
