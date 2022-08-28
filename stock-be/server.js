const express = require('express')
// 利用 express 這個框架/函式庫 來建立一個 web application
require('dotenv').config()
// 初始化 dotenv
const app = express()

// 在程式碼中，不要讓某些常數散亂在專案的各處
// 至少在同一個檔案中，可以放到最上方統一管理
// 目標是: 只需要改一個地方，全部的地方就生效
// 降低漏改到的風險 -> 降低程式出錯的風險
const port = process.env.SERVER_PORT || 3001

const cors = require('cors')
app.use(cors())

// 引用 mysql 連線模組 server 需要的資料庫模組
// const pool = require('./utils/db')

// app.[method]
// method: get, post, delete, put, patch, ...
// GET /
app.get('/', (req, res) => {
  res.send('Hello Express')
})

let stockRouter = require('./routers/stocks')
app.use('/api/stocks', stockRouter)

app.use((req, res, next) => {
  console.log('在所有路由中間件的下面 -> 404 了！')
  res.status(404).send('Not Found!!')
})

// 啟動 server，並且開始 listen 一個 port
app.listen(port, () => {
  console.log(`server start at ${port}`)
})
