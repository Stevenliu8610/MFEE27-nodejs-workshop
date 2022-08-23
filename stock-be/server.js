const express = require('express')
// 初始化 dotenv
require('dotenv').config()
// 利用 express 這個框架/函式庫 來建立一個 web application
const app = express()

// 在程式碼中，不要讓某些常數散亂在專案的各處
// 至少在同一個檔案中，可以放到最上方統一管理
// 目標是: 只需要改一個地方，全部的地方就生效
// 降低漏改到的風險 -> 降低程式出錯的風險
const port = process.env.SERVER_PORT

const cors = require('cors')
app.use(cors())

// 使用資料庫
const mysql = require('mysql2')
const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
  })
  .promise()

// app.[method]
// method: get, post, delete, put, patch, ...
// GET /
app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.get('/test', (req, res, next) => {
  console.log('這裡是 test 1')
  // res.send('Hello Test 1');
  next()
})

app.use((req, res, next) => {
  console.log('BBBB')
  next()
})

// API
// 列出所有股票代碼
// GET /stocks
app.get('/api/stocks', async (req, res, next) => {
  let [data] = await pool.execute('SELECT * FROM stocks')

  res.json(data)
})

app.use((req, res, next) => {
  console.log('在所有路由中間件的下面 -> 404 了！')
  res.status(404).send('Not Found!!')
})

// 啟動 server，並且開始 listen 一個 port
app.listen(port, () => {
  console.log(`server start at ${port}`)
})
