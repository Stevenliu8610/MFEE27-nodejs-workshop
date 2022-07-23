### 覺得老師上課講解的觀念很具體

```javascript =
function printStar(n){
            let stararr = [];
            let str="";
            for(let i = 0;i < n; i++){
                str = str+"*";
                stararr.push(str);
                console.log(str)
            }
            for(let i = 0 ; i<n; i++){
                // str.replace("*","")
               str=str.replace("*","")
               console.log(str)
            }
            
        }
    printStar(5);
```