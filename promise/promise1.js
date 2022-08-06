// Promise 是一個表示非同步運算的「最終」完成或失敗的物件
// - 物件 new Promise();
// 建構式 Promise，需要傳一個參數 executor
// new Promise(executor);
// executor: 也是一個函式，有兩個參數 resolve, reject
// function executor(resolve, reject)
// (resolve, reject) => {}
// - 非同步: 把非同步程式搬進去 executor 裡
// - 最終完成: 呼叫 resolve -> resolve(資料)
// - 最終失敗: 呼叫 reject -> reject(失敗原因)

function doWork(job, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dt = new Date();
            resolve(`完成工作 ${job} at ${dt.toISOString()}`);
        },timer);
    });
  }
  
  let dt = new Date();
  console.log(`開始工作 at ${dt.toISOString()}`);
  // 刷牙(3) => 吃早餐(5) => 寫功課(3)
  
  // TODO: 利用 doWork 做一個刷牙的 promise
  // TODO: 如果 刷牙 promise 最終成功，就印出資訊，然後接著做吃早餐 promise
  // TODO: 如果 吃早餐 promise 最終成功，就印出資訊，然後接著做寫功課 promise
  // TODO: 如果 寫功課 promise 最終成功，就印出資訊
  // TODO: 會用 catch 去接住以上所有 promise 的 reject

  doWork('刷牙', 3000)
    .then((data) => {
        console.log(data);
        return doWork('吃早餐', 5000);
    })
    .then((data) => {
        console.log(data);
        return doWork('寫作業', 3000);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.err('發生錯誤', err);
    });