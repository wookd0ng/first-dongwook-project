const num=[1,2,4,8,16];
console.log("[실행 결과]");
let outputA=num.map((item,index)=>{
    return item*2;
});
console.log(`[${outputA}]`);