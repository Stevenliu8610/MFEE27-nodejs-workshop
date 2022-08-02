//1+2+3+.......+n

//for loop
function sum1(){
    let result = 0;
    for (let i = 1; i<= num; i++){
        result += i;
    }
    return result;
}

//公式
function sum2(n) {
    return ((n+1)*n) / 2;
}

//recursive
function sum3(n) {
    if (n === 1) {
        return n;
    }
    return sum3(n - 1) + n;
}
