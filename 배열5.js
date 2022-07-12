let num=[10,15,20,25,30];
console.log("[실행 결과]");
let sum=0;
num.forEach((item,index)=>{
    console.log(`${index}----->${item}`);
    sum+=item;
});
console.log(`합계:${sum}`);
