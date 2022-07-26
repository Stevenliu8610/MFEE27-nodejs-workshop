// 1. 自動取得今日日期 （可能利用 cron 排程工具 系統每日自動執行）
// 2. 從檔案中讀取股票代碼
const axios = require('axios');
const moment = require('moment');
const fs = require('fs/promises');


//讀取檔案
fs.readFile('stock.txt', 'utf-8')
  .then((data) => {
    console.log('promise', data);
  })
  .catch(console.error);



// 開始抓資料
// 2330 台積電
// 2603 長榮
// let stockNo = data; // TODO: 需要從 stock.txt 的檔案裡讀取股票代碼
let queryDate = moment().format('YYYYMMDD'); //'20220814';
// axios.get(url, 設定)
(async () => {
  try {
    let queryNameResponse = await axios.get('https://www.twse.com.tw/zh/api/codeQuery?query=2330')





    let stockNo = await fs.readFile('stock.txt', 'utf-8');
    let response = await axios.get(`https://www.twse.com.tw/exchangeReport/STOCK_DAY`, {
      params: {
        response: 'json',
        date: queryDate,
        stockNo: stockNo,
      },
    });
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();


